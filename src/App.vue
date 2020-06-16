<template>
  <div id="app">
    <div id="network" class="network"></div>
    <div id="child" class="child" style="display: none">
    </div>
  </div>
</template>

<script>
import vis from 'vis-network';
import _ from 'lodash';
import { radicals, generateSpace } from './config/radicals';
import { baseGraph } from './config/graph';

export default {
  name: 'app',
  data() {
    return {
      spaces: [],
      networks: [],
      container: null,
      childNetwork: null,
      selectedNode: null,
      radicals,
      space: {
        nodes: [],
        edges: [],
      },
    };
  },
  mounted() {
    this.container = document.getElementById('mynetwork');
    this.startAlgorithm();
    // this.showSomething();
    this.showGraph();
  },
  methods: {
    startAlgorithm() {
      for (let i = 0; i < this.radicals.length; i++) {
        for (let j = i; j < this.radicals.length; j++) {
          const [firstRadical, secondRadical] = this.getRadicals(i, j);
          const space = generateSpace(firstRadical, secondRadical);
          this.spaces.push(space);
        }
      }
      this.spaces.forEach(space => {
        this.space.nodes.push({
          id: space.nodes[0].id,
          label: space.nodes[0].label,
          leftRadical: space.nodes[0].leftRadical,
          rightRadical: space.nodes[0].rightRadical,
          structure: space,
        });
      });
      this.space.nodes.forEach(firstNode => {
        this.space.nodes.forEach(secondNode => {
          const connected = firstNode.leftRadical.neighbors.some(neighborId => secondNode.leftRadical.id === neighborId)
            || firstNode.rightRadical.neighbors.some(neighborId => secondNode.rightRadical.id === neighborId);
          if (connected) {
            this.space.edges.push({
              to: firstNode.id,
              from: secondNode.id,
            });
          }
        })
      });
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
    showGraph() {
      const options = {
        layout: {
          improvedLayout: true,
        },
      };
      const network = document.getElementById('network');
      const visNetwork = new vis.Network(network, this.space, {
        ...options,
        physics: false,
      });
      this.networks.push(visNetwork);

      visNetwork.on('click', (event) => {
        const node = event.nodes[0];
        if (!node) {
          return;
        }
        this.selectedNode = _.find(this.space.nodes, { id: node });
        const childContainer = document.getElementById('child');
        childContainer.style.display = '';
        const data = {
          nodes: new vis.DataSet(this.selectedNode.structure.nodes),
          edges: new vis.DataSet(this.selectedNode.structure.edges),
        };
        this.childNetwork = new vis.Network(childContainer, data, options);
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'Close';
        closeButton.id = 'child-close';
        closeButton.onclick = () => {
          childContainer.style.display = 'none'
        };
        childContainer.appendChild(closeButton);

        this.childNetwork.on('click', (event) => {
          const node = event.nodes[0];
          if (!node) {
            return;
          }
          this.selectedNode = _.find(this.selectedNode.structure.nodes, { id: node });
          const childContainer = document.getElementById('child');
          childContainer.style.display = '';
          const data = {
            nodes: new vis.DataSet(this.selectedNode.structure.nodes),
            edges: new vis.DataSet(this.selectedNode.structure.edges),
          };
          this.childNetwork = new vis.Network(childContainer, data, options);
          const closeButton = document.createElement('button');
          closeButton.innerHTML = 'Close';
          closeButton.id = 'child-close';
          closeButton.onclick = () => {
            childContainer.style.display = 'none'
          };
          childContainer.appendChild(closeButton);
        });
      });
    },
    showSomething() {
      const options = {
        layout: {
          improvedLayout: true,
        },
      };
      const network = document.getElementById('network');
      const visNetwork = new vis.Network(network, baseGraph, {
        ...options,
      });
      this.networks.push(visNetwork);
    }
  },
  computed: {
    count() {
      return this.spaces.reduce((acc, space) => {
        return acc + space.nodes.length;
      }, 0);
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
  width: 100vw;
  height: 100vh;
  border: 1px solid blue;
}
.child {
  width: 1000px;
  height: 1000px;
  position: fixed;
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
