let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}


const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}
/**
*/
export const Cell = Object.freeze({ Dead:0,"0":"Dead",Alive:1,"1":"Alive", });

const UniverseFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_universe_free(ptr >>> 0));
/**
*/
export class Universe {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Universe.prototype);
        obj.__wbg_ptr = ptr;
        UniverseFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        UniverseFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_universe_free(ptr);
    }
    /**
    * @param {number} row
    * @param {number} column
    */
    toggle_cell(row, column) {
        wasm.universe_toggle_cell(this.__wbg_ptr, row, column);
    }
    /**
    * @returns {number}
    */
    width() {
        const ret = wasm.universe_width(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    height() {
        const ret = wasm.universe_height(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    cells() {
        const ret = wasm.universe_cells(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    */
    tick() {
        wasm.universe_tick(this.__wbg_ptr);
    }
    /**
    * @returns {Universe}
    */
    static new() {
        const ret = wasm.universe_new();
        return Universe.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    render() {
        let deferred1_0;
        let deferred1_1;
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.universe_render(retptr, this.__wbg_ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            deferred1_0 = r0;
            deferred1_1 = r1;
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
}

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

