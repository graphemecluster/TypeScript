/// <reference lib="es2015.symbol" />

interface SymbolConstructor {
    /**
     * A method that returns the default iterator for an object. Called by the semantics of the
     * for-of statement.
     */
    readonly iterator: unique symbol;
}

interface IteratorYieldResult<TYield> {
    done?: false;
    value: TYield;
}

interface IteratorReturnResult<TReturn> {
    done: true;
    value: TReturn;
}

type IteratorResult<T, TReturn = any> = IteratorYieldResult<T> | IteratorReturnResult<TReturn>;

interface Iterator<T, TReturn = any, TNext = undefined> {
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return?(value?: TReturn): IteratorResult<T, TReturn>;
    throw?(e?: any): IteratorResult<T, TReturn>;
}

interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
}

interface IterableIterator<T> extends Iterator<T> {
    [Symbol.iterator](): IterableIterator<T>;
}

interface ArrayLikeOrIterableTypes<T> {
    iterable: Iterable<T>;
}

interface Array<T> {
    /** Iterator */
    [Symbol.iterator](): IterableIterator<T>;

    /**
     * Returns an iterable of key, value pairs for every entry in the array
     */
    entries(): IterableIterator<[number, T]>;

    /**
     * Returns an iterable of keys in the array
     */
    keys(): IterableIterator<number>;

    /**
     * Returns an iterable of values in the array
     */
    values(): IterableIterator<T>;
}

interface ReadonlyArray<T> {
    /** Iterator of values in the array. */
    [Symbol.iterator](): IterableIterator<T>;

    /**
     * Returns an iterable of key, value pairs for every entry in the array
     */
    entries(): IterableIterator<[number, T]>;

    /**
     * Returns an iterable of keys in the array
     */
    keys(): IterableIterator<number>;

    /**
     * Returns an iterable of values in the array
     */
    values(): IterableIterator<T>;
}

interface IArguments {
    /** Iterator */
    [Symbol.iterator](): IterableIterator<any>;
}

interface Map<K, V> {
    /** Returns an iterable of entries in the map. */
    [Symbol.iterator](): IterableIterator<[K, V]>;

    /**
     * Returns an iterable of key, value pairs for every entry in the map.
     */
    entries(): IterableIterator<[K, V]>;

    /**
     * Returns an iterable of keys in the map
     */
    keys(): IterableIterator<K>;

    /**
     * Returns an iterable of values in the map
     */
    values(): IterableIterator<V>;
}

interface ReadonlyMap<K, V> {
    /** Returns an iterable of entries in the map. */
    [Symbol.iterator](): IterableIterator<[K, V]>;

    /**
     * Returns an iterable of key, value pairs for every entry in the map.
     */
    entries(): IterableIterator<[K, V]>;

    /**
     * Returns an iterable of keys in the map
     */
    keys(): IterableIterator<K>;

    /**
     * Returns an iterable of values in the map
     */
    values(): IterableIterator<V>;
}

interface MapConstructor {
    new(): Map<any, any>;
    new <K, V>(iterable?: Iterable<readonly [K, V]> | null): Map<K, V>;
}

interface WeakMap<K extends object, V> { }

interface WeakMapConstructor {
    new <K extends object, V>(iterable: Iterable<readonly [K, V]>): WeakMap<K, V>;
}

interface Set<T> {
    /** Iterates over values in the set. */
    [Symbol.iterator](): IterableIterator<T>;
    /**
     * Returns an iterable of [v, v] pairs for every value `v` in the set.
     */
    entries(): IterableIterator<[T, T]>;
    /**
     * Despite its name, returns an iterable of the values in the set.
     */
    keys(): IterableIterator<T>;

    /**
     * Returns an iterable of values in the set.
     */
    values(): IterableIterator<T>;
}

interface ReadonlySet<T> {
    /** Iterates over values in the set. */
    [Symbol.iterator](): IterableIterator<T>;

    /**
     * Returns an iterable of [v, v] pairs for every value `v` in the set.
     */
    entries(): IterableIterator<[T, T]>;

    /**
     * Despite its name, returns an iterable of the values in the set.
     */
    keys(): IterableIterator<T>;

    /**
     * Returns an iterable of values in the set.
     */
    values(): IterableIterator<T>;
}

interface SetConstructor {
    new <T>(iterable?: Iterable<T> | null): Set<T>;
}

interface WeakSet<T extends object> { }

interface WeakSetConstructor {
    new <T extends object = object>(iterable: Iterable<T>): WeakSet<T>;
}

interface Promise<T> { }

interface PromiseConstructor {
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An iterable of Promises.
     * @returns A new Promise.
     */
    all<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An iterable of Promises.
     * @returns A new Promise.
     */
    race<T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>>;
}

interface String {
    /** Iterator */
    [Symbol.iterator](): IterableIterator<string>;
}

interface Int8Array {
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Yields index, value pairs for every entry in the array.
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Yields each index in the array.
     */
    keys(): IterableIterator<number>;
    /**
     * Yields each value in the array.
     */
    values(): IterableIterator<number>;
}

interface Uint8Array {
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Yields index, value pairs for every entry in the array.
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Yields each index in the array.
     */
    keys(): IterableIterator<number>;
    /**
     * Yields each value in the array.
     */
    values(): IterableIterator<number>;
}

interface Uint8ClampedArray {
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Yields index, value pairs for every entry in the array.
     */
    entries(): IterableIterator<[number, number]>;

    /**
     * Yields each index in the array.
     */
    keys(): IterableIterator<number>;

    /**
     * Yields each value in the array.
     */
    values(): IterableIterator<number>;
}

interface Int16Array {
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Yields index, value pairs for every entry in the array.
     */
    entries(): IterableIterator<[number, number]>;

    /**
     * Yields each index in the array.
     */
    keys(): IterableIterator<number>;

    /**
     * Yields each value in the array.
     */
    values(): IterableIterator<number>;
}

interface Uint16Array {
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Yields index, value pairs for every entry in the array.
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Yields each index in the array.
     */
    keys(): IterableIterator<number>;
    /**
     * Yields each value in the array.
     */
    values(): IterableIterator<number>;
}

interface Int32Array {
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Yields index, value pairs for every entry in the array.
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Yields each index in the array.
     */
    keys(): IterableIterator<number>;
    /**
     * Yields each value in the array.
     */
    values(): IterableIterator<number>;
}

interface Uint32Array {
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Yields index, value pairs for every entry in the array.
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Yields each index in the array.
     */
    keys(): IterableIterator<number>;
    /**
     * Yields each value in the array.
     */
    values(): IterableIterator<number>;
}

interface Float32Array {
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Yields index, value pairs for every entry in the array.
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Yields each index in the array.
     */
    keys(): IterableIterator<number>;
    /**
     * Yields each value in the array.
     */
    values(): IterableIterator<number>;
}

interface Float64Array {
    [Symbol.iterator](): IterableIterator<number>;
    /**
     * Yields index, value pairs for every entry in the array.
     */
    entries(): IterableIterator<[number, number]>;
    /**
     * Yields each index in the array.
     */
    keys(): IterableIterator<number>;
    /**
     * Yields each value in the array.
     */
    values(): IterableIterator<number>;
}
