const baseGraph = {
  nodes: [
    {
      id: -1,
      label: 'M'
    },
    {
      id: -2,
      label: 'O'
    },
    {
      id: -3,
      label: 'O'
    },
    {
      id: -4,
      label: 'C',
      bracing: 1,
    },
    {
      id: -5,
      label: 'C',
      bracing: 2,
    },
    {
      id: -6,
      label: 'C'
    },
    {
      id: -7,
      label: 'H'
    },
    // {
    //   id: 8,
    //   label: 'R1'
    // },
    // {
    //   id: 9,
    //   label: 'R2'
    // },
  ],
  edges: [
    {from: -1, to: -2, color: '#277dea'},
    {from: -1, to: -3, color: '#277dea'},
    {from: -2, to: -4, color: '#277dea'},
    {from: -3, to: -5, color: '#277dea'},
    {from: -4, to: -6, color: '#277dea'},
    {from: -5, to: -6, color: '#277dea'},
    {from: -6, to: -7, color: '#277dea'},
    // {from: 4, to: 8, color: '#277dea'},
    // {from: 5, to: 9, color: '#277dea'},
  ]
};

export { baseGraph };

export default {
  nodes: [
    {
      id: 1,
      label: 'Node 1',
      child: baseGraph,
    },
    {
      id: 2,
      label: 'Node 2',
      child: baseGraph,
    },
  ],
  edges: [
    {
      from: 1,
      to: 2,
      color: '#277dea'
    },
  ]
}
