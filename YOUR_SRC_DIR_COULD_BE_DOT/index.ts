import * as fs from 'node:fs';
import path from 'node:path';

export function f(a: number, b: number): number {
  return a + b;
}

export async function g(): Promise<string> {
  return fs.promises.readFile(path.join(__dirname, 'static', 'styles.css'), 'utf8');
}
