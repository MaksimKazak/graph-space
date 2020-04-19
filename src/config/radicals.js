const radicals = [
  {
    id: 1,
    formula: 'CH3',
    nodes: [
      {
        id: 1,
        label: 'C',
      },
      {
        id: 2,
        label: 'H',
      },
      {
        id: 3,
        label: 'H',
      },
      {
        id: 4,
        label: 'H',
      },
    ],
    edges: [
      {
        from: 2,
        to: 1,
      },
      {
        from: 3,
        to: 1,
      },
      {
        from: 4,
        to: 1,
      },
    ],
  },
  {
    id: 2,
    formula: 'C2H5',
    nodes: [
      {
        id: 5,
        label: 'C',
      },
      {
        id: 6,
        label: 'C',
      },
      {
        id: 7,
        label: 'H',
      },
      {
        id: 8,
        label: 'H',
      },
      {
        id: 9,
        label: 'H',
      },
      {
        id: 10,
        label: 'H',
      },
      {
        id: 11,
        label: 'H',
      },
    ],
    edges: [
      {
        from: 6,
        to: 5,
      },
      {
        from: 7,
        to: 5,
      },
      {
        from: 8,
        to: 5,
      },
      {
        from: 9,
        to: 6,
      },
      {
        from: 10,
        to: 6,
      },
      {
        from: 11,
        to: 6,
      },
    ],
  },
  {
    id: 3,
    formula: 'C3H7',
    nodes: [
      {
        id: 12,
        label: 'C',
      },
      {
        id: 13,
        label: 'C',
      },
      {
        id: 14,
        label: 'C',
      },
      {
        id: 15,
        label: 'H',
      },
      {
        id: 16,
        label: 'H',
      },
      {
        id: 17,
        label: 'H',
      },
      {
        id: 18,
        label: 'H',
      },
      {
        id: 19,
        label: 'H',
      },
      {
        id: 20,
        label: 'H',
      },
      {
        id: 21,
        label: 'H',
      },
    ],
    edges: [
      {
        from: 13,
        to: 12,
      },
      {
        from: 14,
        to: 12,
      },
      {
        from: 15,
        to: 12,
      },
      {
        from: 16,
        to: 13,
      },
      {
        from: 17,
        to: 13,
      },
      {
        from: 18,
        to: 13,
      },
      {
        from: 19,
        to: 14,
      },
      {
        from: 20,
        to: 14,
      },
      {
        from: 21,
        to: 14,
      },
    ],
  },
  {
    id: 4,
    formula: '(CH3)3C',
    nodes: [
      {
        id: 22,
        label: 'C',
      },
      {
        id: 23,
        label: 'C',
      },
      {
        id: 24,
        label: 'C',
      },
      {
        id: 25,
        label: 'C',
      },
      {
        id: 26,
        label: 'H',
      },
      {
        id: 27,
        label: 'H',
      },
      {
        id: 28,
        label: 'H',
      },
      {
        id: 29,
        label: 'H',
      },
      {
        id: 30,
        label: 'H',
      },
      {
        id: 31,
        label: 'H',
      },
      {
        id: 32,
        label: 'H',
      },
      {
        id: 33,
        label: 'H',
      },
      {
        id: 34,
        label: 'H',
      },
    ],
    edges: [
      {
        from: 23,
        to: 22,
      },
      {
        from: 24,
        to: 22,
      },
      {
        from: 25,
        to: 22,
      },
      {
        from: 26,
        to: 23,
      },
      {
        from: 27,
        to: 23,
      },
      {
        from: 28,
        to: 23,
      },
      {
        from: 29,
        to: 24,
      },
      {
        from: 30,
        to: 24,
      },
      {
        from: 31,
        to: 24,
      },
      {
        from: 32,
        to: 25,
      },
      {
        from: 33,
        to: 25,
      },
      {
        from: 34,
        to: 25,
      },
    ],
  },
  {
    id: 5,
    formula: 'C4H3O',
    nodes: [
      {
        id: 35,
        label: 'C',
      },
      {
        id: 36,
        label: 'C',
      },
      {
        id: 37,
        label: 'C',
      },
      {
        id: 38,
        label: 'C',
      },
      {
        id: 39,
        label: 'H',
      },
      {
        id: 40,
        label: 'H',
      },
      {
        id: 41,
        label: 'H',
      },
      {
        id: 42,
        label: 'O',
      },
    ],
    edges: [
      {
        from: 35,
        to: 36,
      },
      {
        from: 36,
        to: 35,
      },
      {
        from: 36,
        to: 39,
      },
      {
        from: 36,
        to: 42,
      },
      {
        from: 42,
        to: 37,
      },
      {
        from: 37,
        to: 40,
      },
      {
        from: 37,
        to: 38,
      },
      {
        from: 38,
        to: 37,
      },
      {
        from: 38,
        to: 41,
      },
      {
        from: 35,
        to: 38,
      },
    ],
  },
  {
    id: 6,
    formula: 'C4H3S',
    nodes: [
      {
        id: 43,
        label: 'C',
      },
      {
        id: 44,
        label: 'C',
      },
      {
        id: 45,
        label: 'C',
      },
      {
        id: 46,
        label: 'C',
      },
      {
        id: 47,
        label: 'H',
      },
      {
        id: 48,
        label: 'H',
      },
      {
        id: 49,
        label: 'H',
      },
      {
        id: 50,
        label: 'S',
      },
    ],
    edges: [
      {
        from: 43,
        to: 44,
      },
      {
        from: 44,
        to: 43,
      },
      {
        from: 44,
        to: 47,
      },
      {
        from: 44,
        to: 50,
      },
      {
        from: 50,
        to: 45,
      },
      {
        from: 45,
        to: 48,
      },
      {
        from: 45,
        to: 46,
      },
      {
        from: 46,
        to: 45,
      },
      {
        from: 46,
        to: 49,
      },
      {
        from: 43,
        to: 46,
      },
    ],
  },
  {
    id: 7,
    formula: 'C4H3Se',
    nodes: [
      {
        id: 51,
        label: 'C',
      },
      {
        id: 52,
        label: 'C',
      },
      {
        id: 53,
        label: 'C',
      },
      {
        id: 54,
        label: 'C',
      },
      {
        id: 55,
        label: 'H',
      },
      {
        id: 56,
        label: 'H',
      },
      {
        id: 57,
        label: 'H',
      },
      {
        id: 58,
        label: 'Se',
      },
    ],
    edges: [
      {
        from: 51,
        to: 52,
      },
      {
        from: 52,
        to: 51,
      },
      {
        from: 52,
        to: 55,
      },
      {
        from: 52,
        to: 58,
      },
      {
        from: 58,
        to: 53,
      },
      {
        from: 53,
        to: 56,
      },
      {
        from: 53,
        to: 54,
      },
      {
        from: 54,
        to: 53,
      },
      {
        from: 54,
        to: 57,
      },
      {
        from: 51,
        to: 54,
      },
    ],
  },
  {
    id: 8,
    formula: 'C6H5',
    nodes: [
      {
        id: 59,
        label: 'C',
      },
      {
        id: 60,
        label: 'C',
      },
      {
        id: 61,
        label: 'C',
      },
      {
        id: 62,
        label: 'C',
      },
      {
        id: 63,
        label: 'C',
      },
      {
        id: 64,
        label: 'C',
      },
      {
        id: 65,
        label: 'H',
      },
      {
        id: 66,
        label: 'H',
      },
      {
        id: 67,
        label: 'H',
      },
      {
        id: 68,
        label: 'H',
      },
      {
        id: 69,
        label: 'H',
      },
    ],
    edges: [
      {
        from: 59,
        to: 60,
      },
      {
        from: 60,
        to: 59,
      },
      {
        from: 60,
        to: 61,
      },
      {
        from: 61,
        to: 62,
      },
      {
        from: 62,
        to: 61,
      },
      {
        from: 62,
        to: 63,
      },
      {
        from: 63,
        to: 64,
      },
      {
        from: 64,
        to: 63,
      },
      {
        from: 64,
        to: 59,
      },
      {
        from: 60,
        to: 65,
      },
      {
        from: 61,
        to: 66,
      },
      {
        from: 62,
        to: 67,
      },
      {
        from: 63,
        to: 68,
      },
      {
        from: 64,
        to: 69,
      },
    ],
  },
  {
    id: 9,
    formula: 'C4H9',
    nodes: [
      {
        id: 70,
        label: 'C',
      },
      {
        id: 71,
        label: 'C',
      },
      {
        id: 72,
        label: 'C',
      },
      {
        id: 73,
        label: 'C',
      },
      {
        id: 74,
        label: 'H',
      },
      {
        id: 75,
        label: 'H',
      },
      {
        id: 76,
        label: 'H',
      },
      {
        id: 77,
        label: 'H',
      },
      {
        id: 78,
        label: 'H',
      },
      {
        id: 79,
        label: 'H',
      },
      {
        id: 80,
        label: 'H',
      },
      {
        id: 81,
        label: 'H',
      },
      {
        id: 82,
        label: 'H',
      },
    ],
    edges: [
      {
        from: 70,
        to: 71,
      },
      {
        from: 70,
        to: 72,
      },
      {
        from: 70,
        to: 73,
      },
      {
        from: 70,
        to: 74,
      },
      {
        from: 71,
        to: 75,
      },
      {
        from: 71,
        to: 76,
      },
      {
        from: 71,
        to: 77,
      },
      {
        from: 72,
        to: 78,
      },
      {
        from: 72,
        to: 79,
      },
      {
        from: 72,
        to: 80,
      },
      {
        from: 73,
        to: 81,
      },
      {
        from: 73,
        to: 82,
      },
    ],
  },
];
export { radicals };
