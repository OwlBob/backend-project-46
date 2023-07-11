import url from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8');

const testJsonFile= readFile('result.txt');
const fileJson1 = './__fixtures__/file1.json';
const fileJson2 = './__fixtures__/file2.json';

const testYmlFile= readFile('result.txt');
const fileYml1 = './__fixtures__/file1.yml';
const fileYml2 = './__fixtures__/file2.yml';


test('genDiff JSON', () => {
  expect(genDiff(fileJson1, fileJson2)).toEqual(testJsonFile);
});

test('genDiff YML', () => {
  expect(genDiff(fileYml1, fileYml2)).toEqual(testYmlFile);
});

test('genDiff JSON & YML', () => {
  expect(genDiff(fileJson1, fileYml2)).toEqual(testYmlFile);
});
