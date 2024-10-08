type RegExpGroupsValueToIndices<T> = { [K in keyof T]: T[K] extends string ? [number, number] : T[K]; };

interface RegExpExecArray<
    CapturingGroups extends CapturingGroupsArray = CapturingGroupsArray,
    NamedCapturingGroups extends NamedCapturingGroupsObject = NamedCapturingGroupsObject,
> {
    indices: RegExpGroupsValueToIndices<CapturingGroups> & { groups: RegExpGroupsValueToIndices<NamedCapturingGroups>; };
}

interface RegExp<
    CapturingGroups extends CapturingGroupsArray = CapturingGroupsArray,
    NamedCapturingGroups extends NamedCapturingGroupsObject = NamedCapturingGroupsObject,
> {
    /**
     * Returns a Boolean value indicating the state of the hasIndices flag (d) used with a regular expression.
     * Default is false. Read-only.
     */
    readonly hasIndices: boolean;
}
