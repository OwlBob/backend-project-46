import _ from 'lodash';

const indent = (depth) => ' '.repeat((depth * 4) - 2);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }

  const keys = Object.keys(value);
  const getKeys = keys.map((key) => `${indent(depth + 1)}  ${key}: ${stringify(value[key], depth + 1)}`);
  return `{\n${getKeys.join('\n')}\n  ${indent(depth)}}`;
};

const formatStylish = (odjTree) => {
  const step = (tree, depth) => tree.map((node) => {
    const getValue = (value, sign) => `${indent(depth)}${sign} ${node.key}: ${stringify(value, depth)}\n`;
    switch (node.status) {
      case 'nested':
        return `${indent(depth)}  ${node.key}: {\n${step(node.children, depth + 1).join('')}${indent(depth)}  }\n`;
      case 'updated':
        return `${getValue(node.value1, '-')}${getValue(node.value2, '+')}`;
      case 'unchanged':
        return getValue(node.value, ' ');
      case 'added':
        return getValue(node.value, '+');
      case 'deleted':
        return getValue(node.value, '-');
      default:
        throw new Error(`This type does not exist: ${node.status}`);
    }
  });
  return `{\n${step(odjTree, 1).join('')}}`;
};
export default formatStylish;
