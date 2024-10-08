interface StringReplaceCallbackOptions extends StringReplaceCallbackIncludeNamedCapturingGroups {}

interface RegExpExecArray<
    CapturingGroups extends CapturingGroupsArray = CapturingGroupsArray,
    NamedCapturingGroups extends NamedCapturingGroupsObject = NamedCapturingGroupsObject,
> {
    groups: NamedCapturingGroups;
}

interface RegExp<
    CapturingGroups extends CapturingGroupsArray = CapturingGroupsArray,
    NamedCapturingGroups extends NamedCapturingGroupsObject = NamedCapturingGroupsObject,
> {
    /**
     * Returns a Boolean value indicating the state of the dotAll flag (s) used with a regular expression.
     * Default is false. Read-only.
     */
    readonly dotAll: boolean;
}
