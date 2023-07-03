import path from 'path';

const extensions = {
  '.json': 'json',
  '.yml': 'yaml',
  '.yaml': 'yaml',
};
// формирование абсолютного пути
const getAbsPath = (filepath) => path.resolve(`__fixtures__/${filepath}`);
// определение расширения файла
const getExtension = (filepath) => extensions[path.extname(filepath)];

export { getAbsPath, getExtension };
