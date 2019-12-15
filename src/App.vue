<template>
  <div id="app">
    <div id='mynetwork'>
    </div>
    <div id="child" class="child"></div>
  </div>
</template>

<script lang="ts">
import vis from 'vis-network';
import graph from './config/graph';
const _ = require('lodash');

export default {
  name: 'app',
  data () {
    return {
      nodes: null,
      edges: null,
      network: null,
      childNetwork: null,
      selectedNode: null
    }
  },
  mounted (): void {
    this.nodes = new vis.DataSet(graph.nodes);

    this.edges = new vis.DataSet(graph.edges);

    let container = document.getElementById('mynetwork');
    let data = {
        nodes: this.nodes,
        edges: this.edges
    };
    let options = {};
    this.network = new vis.Network(container, data, options);

    this.network.on('click', (event: vis.NetworkEvents) => {
        let node = event.nodes[0];
        this.selectedNode = _.find(graph.nodes, {id: node});
        let childContainer = document.getElementById('child');
        childContainer.style.display = '';
        let data = {
            nodes: new vis.DataSet(this.selectedNode.child.nodes),
            edges: new vis.DataSet(this.selectedNode.child.edges)
        }
        this.childNetwork = new vis.Network(childContainer, data, {});
    });
  }
}
</script>

<style>

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
  display: none;
}

</style>