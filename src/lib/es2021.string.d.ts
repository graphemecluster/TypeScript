interface String {
    /**
     * Replace all instances of a substring in a string, using a regular expression or search string.
     * @param searchValue A string to search for.
     * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string,
     * or a function that returns the replacement text.
     */
    replaceAll<
        CapturingGroups extends CapturingGroupsArray = CapturingGroupsArray,
        NamedCapturingGroups extends NamedCapturingGroupsObject = NamedCapturingGroupsObject,
    >(
        searchValue: string | RegExp<CapturingGroups, NamedCapturingGroups>,
        replacer: string | StringReplaceCallbackSignature<CapturingGroups, NamedCapturingGroups>,
    ): string;

    /**
     * Passes a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.
     * @param searchValue An object that supports searching for and replacing matches within a string.
     * @param replaceValue The replacement text.
     */
    replaceAll<T>(searchValue: { [Symbol.replace](string: string, replaceValue: T): string; }, replaceValue: T): string;
}
