import yaml from 'js-yaml';

const getExtension = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown parsing format '${format}'`);
  }
};
export default getExtension;
