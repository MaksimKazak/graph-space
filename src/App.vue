<template>
  <div id="app">
    <div id='mynetwork'></div>
  </div>
</template>

<script lang="ts">
import vis from 'vis-network';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
      console.log('mounted');
    let nodes = new vis.DataSet([
        {id: 1, label: 'Node 1', color: '#756338'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
    ]);

    let edges = new vis.DataSet([
        {from: 1, to: 3, color: '#277dea'},
        {from: 1, to: 2, color: '#277dea'},
        {from: 2, to: 4, color: '#277dea'},
        {from: 2, to: 5, color: '#277dea'},
    ]);

    let container = document.getElementById('mynetwork');
    let data = {
        nodes: nodes,
        edges: edges
    };
    let options = {};
    let network = new vis.Network(container, data, options);

    network.on('selectNode', event => {
        console.log('select', event);
    });
    network.on('deselectNode', event => {
        console.log('deselect ', event);
    });
  }
}
</script>