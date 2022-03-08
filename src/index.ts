import { readFileSync } from "fs";
import { readFile } from "fs/promises";

export function readFromHereSync(filename: string) {
  return readFileSync(`${__dirname}/${filename}`, "utf8");
}

export function readFromHere(filename: string) {
  return readFile(`${__dirname}/${filename}`, "utf8");
}
