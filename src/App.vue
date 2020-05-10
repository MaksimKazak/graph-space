<template>
  <div id="app">
    <div class="fields"></div>
    <div id="child" class="child" style="display: none">
    </div>
  </div>
</template>

<script>
import vis from 'vis-network';
import _ from 'lodash';
import { baseGraph } from './config/graph';
import { radicals, generateRadicals } from './config/radicals';

export default {
  name: 'app',
  data() {
    return {
      parents: [],
      networks: [],
      count: 1,
      container: null,
      childNetwork: null,
      selectedNode: null,
      radicals,
    };
  },
  mounted() {
    this.container = document.getElementById('mynetwork');
    this.startAlgorithm();
    this.showGraph();
  },
  methods: {
    startAlgorithm() {
      for (let i = 0; i < this.radicals.length; i++) {
        for (let j = i; j < this.radicals.length; j++) {
          const [firstRadical, secondRadical] = this.getRadicals(i, j);
          const molecule = this.getComposedMolecule(firstRadical, secondRadical);
          this.parents.push({
            id: this.count,
            label: `${firstRadical.formula} + ${secondRadical.formula}`,
            child: molecule,
          });
          this.count++;
        }
      }
    },
    getRadicals(i, j) {
      const firstRadical = _.cloneDeep(this.radicals[i]);
      const secondRadical = _.cloneDeep(this.radicals[j]);
      secondRadical.nodes.forEach(node => {
        node.id = '+' + node.id;
      });
      secondRadical.edges.forEach(edge => {
        edge.to = '+' + edge.to;
        edge.from = '+' + edge.from;
      });
      return [firstRadical, secondRadical];
    },
    getComposedMolecule(firstRadical, secondRadical) {
      let molecule = _.cloneDeep(baseGraph);
      molecule.nodes.push(...firstRadical.nodes);
      molecule.nodes.push(...secondRadical.nodes);
      molecule.edges.push(...firstRadical.edges);
      molecule.edges.push(...secondRadical.edges);
      const firstBracing = _.find(molecule.nodes, { bracing: 1 });
      const secondBracing = _.find(molecule.nodes, { bracing: 2 });
      molecule.edges.push({
        from: firstRadical.nodes[0].id,
        to: firstBracing.id,
      });
      molecule.edges.push({
        from: secondRadical.nodes[0].id,
        to: secondBracing.id,
      });
      return molecule;
    },
    showGraph() {
      const fields = document.querySelector('.fields');
      this.parents.forEach(parent => {
        let network = document.createElement('div');
        network.classList.add('network');
        fields.appendChild(network);

        const data = {
          nodes: [parent],
          edges: [],
        };
        const options = {};
        const visNetwork = new vis.Network(network, data, options);
        this.networks.push(visNetwork);

        visNetwork.on('click', (event) => {
          const node = event.nodes[0];
          if (!node) {
            return;
          }
          this.selectedNode = _.find(this.parents, { id: node });
          const childContainer = document.getElementById('child');
          childContainer.style.display = '';
          const data = {
            nodes: new vis.DataSet(this.selectedNode.child.nodes),
            edges: new vis.DataSet(this.selectedNode.child.edges),
          };
          this.childNetwork = new vis.Network(childContainer, data, {
            layout: {
              improvedLayout: false,
            },
          });
          const closeButton = document.createElement('button');
          closeButton.innerHTML = 'Close';
          closeButton.id = 'child-close';
          closeButton.onclick = () => {childContainer.style.display = 'none'};
          childContainer.appendChild(closeButton);
        });
      });
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
.fields {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.network {
  width: calc(20% - 2px);
  height: 350px;
  border: 1px solid blue;
}
.child {
  width: 600px;
  height: 600px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  border: 1px solid grey;
  border-radius: 8px;
  z-index: 1000;
}
#child-close {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1100
}
</style>
