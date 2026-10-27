/**
 * Utilities to read files relative to a base directory.
 *
 * @packageDocumentation
 */

import { readFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * A function that synchronously reads a file relative to a fixed directory.
 *
 * @param filename - Path of the file, relative to the fixed directory.
 * @param format - Encoding used to decode the file. Defaults to `"utf8"`.
 * @returns The contents of the file as a string.
 */
export type SyncReader = (filename: string, format?: BufferEncoding) => string;

/**
 * A function that asynchronously reads a file relative to a fixed directory.
 *
 * @param filename - Path of the file, relative to the fixed directory.
 * @param format - Encoding used to decode the file. Defaults to `"utf8"`.
 * @returns A promise that resolves to the contents of the file as a string.
 */
export type AsyncReader = (
  filename: string,
  format?: BufferEncoding,
) => Promise<string>;

/**
 * Synchronously reads a file located inside a directory.
 *
 * @param from - Directory that contains the file.
 * @param filename - Path of the file, relative to `from`.
 * @param format - Encoding used to decode the file. Defaults to `"utf8"`.
 * @returns The contents of the file as a string.
 * @throws If the file does not exist or cannot be read.
 *
 * @example
 * ```ts
 * import { readFromSync } from "read-from-fs";
 *
 * const schema = readFromSync(__dirname, "schema.graphql");
 *
 * // With a custom encoding
 * const ascii = readFromSync(__dirname, "schema.graphql", "ascii");
 * ```
 */
export function readFromSync(
  from: string,
  filename: string,
  format: BufferEncoding = "utf8",
): string {
  return readFileSync(join(from, filename), format);
}

/**
 * Creates a function that synchronously reads files from a fixed directory.
 *
 * Handy when you need to read several files from the same place.
 *
 * @param from - Directory the returned function will read files from.
 * @returns A {@link SyncReader} bound to `from`.
 *
 * @example
 * ```ts
 * import { readFromSyncGenerator } from "read-from-fs";
 *
 * const readFromHere = readFromSyncGenerator(__dirname);
 *
 * export const userSchema = readFromHere("user.graphql");
 * export const postSchema = readFromHere("post.graphql");
 *
 * // With a custom encoding
 * export const legacySchema = readFromHere("legacy.graphql", "ascii");
 * ```
 */
export function readFromSyncGenerator(from: string): SyncReader {
  return (filename: string, format: BufferEncoding = "utf8") => {
    return readFileSync(join(from, filename), format);
  };
}

/**
 * Asynchronously reads a file located inside a directory.
 *
 * @param from - Directory that contains the file.
 * @param filename - Path of the file, relative to `from`.
 * @param format - Encoding used to decode the file. Defaults to `"utf8"`.
 * @returns A promise that resolves to the contents of the file as a string.
 * The promise rejects if the file does not exist or cannot be read.
 *
 * @example
 * ```ts
 * import { readFrom } from "read-from-fs";
 *
 * const schema = await readFrom(__dirname, "schema.graphql");
 *
 * // With a custom encoding
 * const ascii = await readFrom(__dirname, "schema.graphql", "ascii");
 * ```
 */
export function readFrom(
  from: string,
  filename: string,
  format: BufferEncoding = "utf8",
): Promise<string> {
  return readFile(join(from, filename), format);
}

/**
 * Creates a function that asynchronously reads files from a fixed directory.
 *
 * Handy when you need to read several files from the same place.
 *
 * @param from - Directory the returned function will read files from.
 * @returns An {@link AsyncReader} bound to `from`.
 *
 * @example
 * ```ts
 * import { readFromGenerator } from "read-from-fs";
 *
 * const readFromHere = readFromGenerator(__dirname);
 *
 * const [user, post] = await Promise.all([
 *   readFromHere("user.graphql"),
 *   readFromHere("post.graphql"),
 * ]);
 *
 * // With a custom encoding
 * const legacy = await readFromHere("legacy.graphql", "ascii");
 * ```
 */
export function readFromGenerator(from: string): AsyncReader {
  return (filename: string, format: BufferEncoding = "utf8") => {
    return readFile(join(from, filename), format);
  };
}
