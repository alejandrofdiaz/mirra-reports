import csvParseSync from 'csv-parse/lib/sync';
import { readFile } from 'fs';
import { Report } from 'models/Report';
import moment from 'moment';
import path from 'path';
import { promisify } from 'util';

import { mapObject } from './csvMapFile';

const FILE_PATH = path.join(process.cwd(), 'data/test.csv');

function readCsvFile(filePath: string) {
  return promisify(readFile)(filePath, { encoding: 'utf8' });
}

function parseCsv(csvFile: string) {
  return csvParseSync(csvFile, { columns: true, skip_empty_lines: true });
}

async function testFile() {
  const testfile = await readCsvFile(FILE_PATH);
  const csvFormed = parseCsv(testfile);
  const objectMapped = csvFormed.map(mapObject) as Report[];
  console.log(objectMapped);
  console.log(objectMapped[0].timeAdded);
  console.log(objectMapped[0].eventTime);
  console.log(moment(objectMapped[0].timeAdded).toISOString());
  console.log(moment(objectMapped[0].eventTime).toISOString());
}

testFile();
