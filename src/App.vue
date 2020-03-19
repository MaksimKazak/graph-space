<template>
  <div id="app">
    <div id="mynetwork"></div>
    <div id="child" class="child" style="display: none">
    </div>
  </div>
</template>

<script>
import vis from 'vis-network';
import _ from 'lodash';
import { baseGraph } from './config/graph';
import { radicals } from './config/radicals';

export default {
  name: 'app',
  data() {
    return {
      graph: {
        nodes: [],
        edges: [],
      },
      count: 1,
      container: null,
      network: null,
      childNetwork: null,
      selectedNode: null,
    };
  },
  mounted() {
    this.container = document.getElementById('mynetwork');
    this.startAlgorithm();
    this.showGraph();
  },
  methods: {
    startAlgorithm() {
      for (let i = 0; i < radicals.length; i++) {
        for (let j = i; j < radicals.length; j++) {
          let child = _.cloneDeep(baseGraph);
          const firstRadical = _.cloneDeep(radicals[i]);
          const secondRadical = _.cloneDeep(radicals[j]);
          secondRadical.nodes.forEach(node => {
            node.id = '+' + node.id;
          });
          secondRadical.edges.forEach(edge => {
            edge.to = '+' + edge.to;
            edge.from = '+' + edge.from;
          });
          child.nodes.push(...firstRadical.nodes);
          child.nodes.push(...secondRadical.nodes);
          child.edges.push(...firstRadical.edges);
          child.edges.push(...secondRadical.edges);
          const firstBracing = _.find(child.nodes, { bracing: 1 });
          const secondBracing = _.find(child.nodes, { bracing: 2 });
          child.edges.push({
            from: firstRadical.nodes[0].id,
            to: firstBracing.id,
          });
          child.edges.push({
            from: secondRadical.nodes[0].id,
            to: secondBracing.id,
          });
          this.graph.nodes.push({
            id: this.count,
            label: `node ${this.count}`,
            child,
          });
          this.count++;
        }
      }
    },
    showGraph() {
      const data = {
        nodes: this.graph.nodes,
        edges: this.graph.edges,
      };
      const options = {};
      this.network = new vis.Network(this.container, data, options);

      this.network.on('click', (event) => {
        const node = event.nodes[0];
        if (!node) {
          return;
        }
        this.selectedNode = _.find(this.graph.nodes, { id: node });
        const childContainer = document.getElementById('child');
        childContainer.style.display = '';
        const data = {
          nodes: new vis.DataSet(this.selectedNode.child.nodes),
          edges: new vis.DataSet(this.selectedNode.child.edges),
        };
        this.childNetwork = new vis.Network(childContainer, data, {});
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'Close';
        closeButton.id = 'child-close';
        closeButton.onclick = () => {childContainer.style.display = 'none'};
        childContainer.appendChild(closeButton);
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
#mynetwork {
  width: 100vw;
  height: 100vh;
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
