/* tslint:disable */
/* eslint-disable */

export function wasm_main(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly wasm_main: () => void;
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___wasm_bindgen_74106a9305c5565c___JsValue__core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_74106a9305c5565c___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___js_sys_a5f87ee2f693dba7___Array__web_sys_1a7c0dab76b97b7d___features__gen_ResizeObserver__ResizeObserver______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___wasm_bindgen_74106a9305c5565c___sys__JsOption_wgpu_11e95afce86270f5___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_74106a9305c5565c___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___wasm_bindgen_74106a9305c5565c___sys__JsOption_wgpu_11e95afce86270f5___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_74106a9305c5565c___JsError___true__11: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___wasm_bindgen_74106a9305c5565c___sys__JsOption_wgpu_11e95afce86270f5___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_9b3796e30d99ddb7___result__Result_____wasm_bindgen_74106a9305c5565c___JsError___true__12: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___wasm_bindgen_74106a9305c5565c___JsValue______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___wasm_bindgen_74106a9305c5565c___JsValue______true__3: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___wasm_bindgen_74106a9305c5565c___JsValue______true__4: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___wasm_bindgen_74106a9305c5565c___JsValue______true__5: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___wasm_bindgen_74106a9305c5565c___JsValue______true__7: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___wasm_bindgen_74106a9305c5565c___JsValue______true__8: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___wasm_bindgen_74106a9305c5565c___JsValue______true__9: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___wasm_bindgen_74106a9305c5565c___JsValue______true__10: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke___core_9b3796e30d99ddb7___option__Option_web_sys_1a7c0dab76b97b7d___features__gen_Blob__Blob_______true_: (a: number, b: number, c: number) => void;
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly wasm_bindgen_74106a9305c5565c___convert__closures_____invoke_______true__1_: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
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
