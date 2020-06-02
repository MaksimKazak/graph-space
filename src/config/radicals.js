import _ from 'lodash';
import { baseGraph } from "./graph";

const radicals = [
  {
    id: 1,
    neighbors: [2, 5, 6, 7, 8, 9, 10],
    formula: 'CH3',
    nodes: [
      {
        id: 1,
        label: 'C',
        physics: false,
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
    neighbors: [1, 3],
    formula: 'C2H5',
    nodes: [
      {
        id: 5,
        label: 'C',
        physics: false,
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
    neighbors: [2, 4],
    formula: 'C3H7',
    nodes: [
      {
        id: 83,
        label: 'C',
        physics: false,
      },
      {
        id: 84,
        label: 'C',
      },
      {
        id: 85,
        label: 'C',
      },
      {
        id: 86,
        label: 'H',
      },
      {
        id: 87,
        label: 'H',
      },
      {
        id: 88,
        label: 'H',
      },
      {
        id: 89,
        label: 'H',
      },
      {
        id: 90,
        label: 'H',
      },
      {
        id: 91,
        label: 'H',
      },
      {
        id: 92,
        label: 'H',
      },
    ],
    edges: [
      {
        from: 83,
        to: 84,
      },
      {
        from: 84,
        to: 85,
      },
      {
        from: 83,
        to: 86,
      },
      {
        from: 83,
        to: 87,
      },
      {
        from: 84,
        to: 88,
      },
      {
        from: 84,
        to: 89,
      },
      {
        from: 85,
        to: 90,
      },
      {
        from: 85,
        to: 91,
      },
      {
        from: 85,
        to: 92,
      },
    ],
  },
  {
    id: 4,
    neighbors: [3],
    formula: 'C4H9',
    nodes: [
      {
        id: 70,
        label: 'C',
        physics: false,
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
        from: 71,
        to: 72,
      },
      {
        from: 71,
        to: 73,
      },
      {
        from: 70,
        to: 74,
      },
      {
        from: 70,
        to: 75,
      },
      {
        from: 72,
        to: 76,
      },
      {
        from: 72,
        to: 77,
      },
      {
        from: 72,
        to: 78,
      },
      {
        from: 71,
        to: 79,
      },
      {
        from: 73,
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
  {
    id: 5,
    neighbors: [1, 6, 7, 8, 9, 10],
    formula: 'C4H3O',
    nodes: [
      {
        id: 35,
        label: 'C',
        physics: false,
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
    neighbors: [1, 5, 7, 8, 9, 10],
    formula: 'C4H3S',
    nodes: [
      {
        id: 43,
        label: 'C',
        physics: false,
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
    neighbors: [1, 5, 6, 8, 9, 10],
    formula: 'C4H3Se',
    nodes: [
      {
        id: 51,
        label: 'C',
        physics: false,
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
    neighbors: [1, 5, 6, 7, 9, 10],
    formula: 'C6H5',
    nodes: [
      {
        id: 59,
        label: 'C',
        physics: false,
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
    neighbors: [1, 5, 6, 7, 8, 10],
    complexFormula: '(CH3)2CH',
    formula: 'C3H7',
    nodes: [
      {
        id: 12,
        label: 'C',
        physics: false,
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
    id: 10,
    neighbors: [1, 5, 6, 7, 8, 9],
    complexFormula: '(CH3)3C',
    formula: 'C4H9',
    nodes: [
      {
        id: 22,
        label: 'C',
        physics: false,
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
];

const FIRST_RADICAL_X = 540;
const FIRST_RADICAL_Y = 0;
const SECOND_RADICAL_X = 0;
const SECOND_RADICAL_Y = 540;
const ATOMS = ['C', 'H', 'F', 'O', 'S', 'Se'];

const convertNode = (derivedRadicals) => (node, index) => {
  if (node.label === 'H') {
    let derivativeRadical = _.cloneDeep(derivedRadicals[derivedRadicals.length - 1]);
    derivativeRadical.nodes[index].label = 'F';
    derivativeRadical.id = derivedRadicals.length + '' + derivedRadicals[derivedRadicals.length - 1].id;

    derivativeRadical.nodes.forEach(node => {
      node.id = derivedRadicals.length + '' + node.id;
    });
    derivativeRadical.edges.forEach(edge => {
      edge.to = derivedRadicals.length + '' + edge.to;
      edge.from = derivedRadicals.length + '' + edge.from;
    });
    let atomsQuantityObject = derivativeRadical.nodes.reduce((acc, node) => {
      acc[node.label] = acc[node.label] ? acc[node.label] + 1 : 1;
      return acc;
    }, {});
    derivativeRadical.formula =  ATOMS.reduce((acc, atom) => {
      return acc +
        (atomsQuantityObject[atom]
          ? `${atom + (atomsQuantityObject[atom] === 1 ? '' : atomsQuantityObject[atom])}`
          : '');
    }, '');

    derivedRadicals.push(derivativeRadical);
  }
};

const getComposedMolecule = (firstRadical, secondRadical) => {
  let molecule = _.cloneDeep(baseGraph);
  molecule.nodes.push(...firstRadical.nodes);
  molecule.nodes.push(...secondRadical.nodes);
  molecule.edges.push(...firstRadical.edges);
  molecule.edges.push(...secondRadical.edges);
  const firstBracing = _.find(molecule.nodes, { bracing: 1 });
  const secondBracing = _.find(molecule.nodes, { bracing: 2 });
  firstRadical.nodes[0].x = FIRST_RADICAL_X;
  firstRadical.nodes[0].y = FIRST_RADICAL_Y;
  secondRadical.nodes[0].x = SECOND_RADICAL_X;
  secondRadical.nodes[0].y = SECOND_RADICAL_Y;
  molecule.edges.push({
    from: firstRadical.nodes[0].id,
    to: firstBracing.id,
  });
  molecule.edges.push({
    from: secondRadical.nodes[0].id,
    to: secondBracing.id,
  });
  return molecule;
};

let count = 0;
const generateSpace = (firstRadical, secondRadical) => {
  let derivedFirstRadicals = [firstRadical];
  const convertFirstNodes = convertNode(derivedFirstRadicals);
  firstRadical.nodes.forEach(convertFirstNodes);
  let derivedSecondRadicals = [secondRadical];
  const convertSecondNodes = convertNode(derivedSecondRadicals);
  secondRadical.nodes.forEach(convertSecondNodes);

  let space = {
    nodes: [],
    edges: [],
  };
  derivedFirstRadicals.forEach((leftRadical, leftIndex) => {
    derivedSecondRadicals.forEach((rightRadical, rightIndex) => {
      if (
        space.nodes.some(node =>
          node.leftRadical.formula === rightRadical.formula && node.rightRadical.formula === leftRadical.formula)
      ) {
        return;
      }
      const molecule = getComposedMolecule(leftRadical, rightRadical);
      space.nodes.push({
        id: `${count}${leftIndex}${rightIndex}`,
        label: `${leftRadical.formula} + ${rightRadical.formula}`,
        isRoot: leftIndex === 0 && rightIndex === 0,
        leftRadical: leftRadical,
        rightRadical: rightRadical,
        structure: molecule,
      });
      if (rightIndex) {
        space.edges.push({
          from: `${count}${leftIndex}${rightIndex}`,
          to: `${count}${leftIndex}${rightIndex - 1}`,
        });
      }
      if (leftIndex) {
        space.edges.push({
          from: `${count}${leftIndex}${rightIndex}`,
          to: `${count}${leftIndex - 1}${rightIndex}`,
        });
      }
    });
  });
  count++;

  return space;
};

export { radicals, generateSpace };
