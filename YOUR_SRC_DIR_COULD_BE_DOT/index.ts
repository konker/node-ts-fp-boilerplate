import * as fs from 'node:fs';
import path from 'node:path';

import * as lib from './lib';

export function f(a: number, b: number): number {
  return lib.add(a, b);
}

export async function g(): Promise<string> {
  return fs.promises.readFile(path.join(__dirname, 'static', 'styles.css'), 'utf8');
}
