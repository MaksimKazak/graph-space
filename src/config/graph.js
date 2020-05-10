const baseGraph = {
  nodes: [
    {
      id: -1,
      label: 'M',
      x: 0,
      y: 0,
      physics: false,
    },
    {
      id: -2,
      label: 'O',
      x: 200,
      y: 0,
      physics: false,
    },
    {
      id: -3,
      label: 'O',
      x: 0,
      y: 200,
      physics: false,
    },
    {
      id: -4,
      label: 'C',
      bracing: 1,
      x: 320,
      y: 120,
      physics: false,
    },
    {
      id: -5,
      label: 'C',
      bracing: 2,
      x: 120,
      y: 320,
      physics: false,
    },
    {
      id: -6,
      label: 'C',
      x: 320,
      y: 320,
      physics: false,
    },
    {
      id: -7,
      label: 'H',
      x: 400,
      y: 400,
      physics: false,
    },
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
