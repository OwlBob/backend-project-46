#!/usr/bin/env node
import { program } from 'commander';

const { Command } = require('commander');
const program = new Command();

program
  .name('file-util')
  .description('Tool that compares two files')
  .version('1.0.0');

program.command('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .argument('filepath1', 'first file and path to it')
  .argument('filepath2', 'second file and path to it')
  .option('-h, --help', 'display help for command')
  .action((filepath1, filepath2, options) => {
    console.log(genDiffFiles(filepath1, filepath2, options.format));
});

program.parse();