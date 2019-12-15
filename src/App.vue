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
import graph from './config/graph';

export default {
  name: 'app',
  data() {
    return {
      nodes: null,
      edges: null,
      network: null,
      childNetwork: null,
      selectedNode: null,
    };
  },
  mounted() {
    this.nodes = new vis.DataSet(graph.nodes);

    this.edges = new vis.DataSet(graph.edges);

    const container = document.getElementById('mynetwork');
    const data = {
      nodes: this.nodes,
      edges: this.edges,
    };
    const options = {};
    this.network = new vis.Network(container, data, options);

    this.network.on('click', (event) => {
        const node = event.nodes[0];
        if (!node) {
          return;
        }
        this.selectedNode = _.find(graph.nodes, {id: node});
        const childContainer = document.getElementById('child');
        childContainer.style.display = '';
        const data = {
          nodes: new vis.DataSet(this.selectedNode.child.nodes),
          edges: new vis.DataSet(this.selectedNode.child.edges),
        }
        this.childNetwork = new vis.Network(childContainer, data, {});
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'Close';
        closeButton.id = 'child-close';
        closeButton.onclick = () => {childContainer.style.display = 'none'};
        childContainer.appendChild(closeButton);
    });
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
