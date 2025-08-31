/* tslint:disable */
/* eslint-disable */
export class GraphemeClusterSegmenter {
  free(): void;
  constructor();
  segment(text: string): Uint32Array;
}
export class LineSegmenter {
  free(): void;
  constructor();
  segment(text: string): Uint32Array;
}
export class SentenceSegmenter {
  free(): void;
  constructor();
  segment(text: string): Uint32Array;
}
export class WordSegmenter {
  free(): void;
  constructor();
  segment(text: string): Uint32Array;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_sentencesegmenter_free: (a: number, b: number) => void;
  readonly sentencesegmenter_new: () => number;
  readonly sentencesegmenter_segment: (a: number, b: number, c: number) => [number, number];
  readonly __wbg_graphemeclustersegmenter_free: (a: number, b: number) => void;
  readonly graphemeclustersegmenter_new: () => number;
  readonly graphemeclustersegmenter_segment: (a: number, b: number, c: number) => [number, number];
  readonly __wbg_wordsegmenter_free: (a: number, b: number) => void;
  readonly wordsegmenter_new: () => number;
  readonly wordsegmenter_segment: (a: number, b: number, c: number) => [number, number];
  readonly __wbg_linesegmenter_free: (a: number, b: number) => void;
  readonly linesegmenter_new: () => number;
  readonly linesegmenter_segment: (a: number, b: number, c: number) => [number, number];
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
