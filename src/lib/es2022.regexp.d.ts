type RegExpGroupsValueToIndices<T> = { [K in keyof T]: T[K] extends string ? [number, number] : T[K]; };

interface RegExpIndices<
    CapturingGroups extends CapturingGroupsArray = CapturingGroupsArray,
    NamedCapturingGroups extends NamedCapturingGroupsObject = NamedCapturingGroupsObject,
> {
    indices: RegExpGroupsValueToIndices<CapturingGroups> & { groups: RegExpGroupsValueToIndices<NamedCapturingGroups>; };
}

interface RegExpFlags {
    /** A Boolean value indicating the state of the hasIndices flag (d) used with a regular expression. Read-only. */
    readonly hasIndices: boolean;
}
