import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const makeFormat = (diffData, formatName = 'stylish') => {
  switch (formatName) {
    case 'stylish':
      return formatStylish(diffData);
    case 'plain':
      return formatPlain(diffData);
    default:
      throw new Error(`format error:'${formatName}'. Check spelling:\nstylish\nplain`);
  }
};

export default makeFormat;
