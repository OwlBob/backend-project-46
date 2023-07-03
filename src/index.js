import _ from 'lodash';
import parser from './forParsers.js';
import { getAbsPath, getExtension } from './forPathFile.js';

const genDiff = (filepath1, filepath2) => {
  const [absPath1, absPath2] = [filepath1, filepath2].map(getAbsPath);
  const [extension1, extension2] = [absPath1, absPath2].map(getExtension);

  const [data1, data2] = [parser(absPath1, extension1), parser(absPath2, extension2)];

  const [keys1, keys2] = [Object.keys(data1), Object.keys(data2)];
  const uniqueKeys = _.sortBy(_.uniq([...keys1, ...keys2]));

  const result = uniqueKeys.reduce((acc, key) => {
    const [value1, value2] = [data1[key], data2[key]];

    if (_.has(data1, key) && _.has(data2, key)) {
      if (value1 === value2) {
        return `${acc}\n    ${key}: ${value1}`;
      }
    }

    if (!_.has(data1, key) && _.has(data2, key)) { // подумать, как сделать без отрицания
      return `${acc}\n  + ${key}: ${value2}`;
    }

    if (_.has(data1, key) && !_.has(data2, key)) { // подумать, как сделать без отрицания
      return `${acc}\n  - ${key}: ${value1}`;
    }

    return `${acc}\n  - ${key}: ${value1}\n  + ${key}: ${value2}`;
  }, '');

  return `{${result}\n}`;
};

export default genDiff;
