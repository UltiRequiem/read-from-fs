import { readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export function readFromSync(
  from: string,
  filename: string,
  format: BufferEncoding = "utf8"
) {
  return readFileSync(join(from, filename), format);
}

export function readFromSyncGenerator(from: string) {
  return (filename: string, format: BufferEncoding = "utf8") => {
    return readFileSync(join(from, filename), format);
  };
}

export function readFrom(
  from: string,
  filename: string,
  format: BufferEncoding = "utf8"
) {
  return readFile(join(from, filename), format);
}

export function readFromGenerator(from: string) {
  return (filename: string, format: BufferEncoding = "utf8") => {
    return readFile(join(from, filename), format);
  };
}
