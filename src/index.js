import path from 'path';
import { readFileSync } from 'fs';
import getExtension from './parsers.js';
import makeAstTree from './makeAstTree.js';

// проблема с process.cwd(), не попадает в папку __fixtures__
const getPath = (filepath) => path.resolve(process.cwd(), filepath);
const getAbsPath = (filepath) => readFileSync(getPath(filepath), 'utf8');
const genDiff = (pathToFile1, pathToFile2) => {
  // формирование расширения
  const extension1 = path.extname(pathToFile1).slice(1);
  const extension2 = path.extname(pathToFile2).slice(1);

  // формирование абсолютного пути
  const obj1 = getAbsPath(pathToFile1);
  const obj2 = getAbsPath(pathToFile2);

  // сборка объектов
  const parsedObj1 = getExtension(obj1, extension1);
  const parsedObj2 = getExtension(obj2, extension2);

  // создание единого объекта, запись изменений через добавления свойства status
  const obj = makeAstTree(parsedObj1, parsedObj2);

  // итоговая сборка
  const result = obj.map((node) => {
    if (node.status === 'unchanged') {
      return (`    ${node.key}: ${node.value}`);
    }

    if (node.status === 'updated') {
      return (`  - ${node.key}: ${node.value1}\n  + ${node.key}: ${node.value2}`);
    }

    return (`${node.status === 'deleted' ? '  -' : '  +'} ${node.key}: ${node.value}`);
  }).join('\n');

  return `{\n${result}\n}`;
};

export default genDiff;
