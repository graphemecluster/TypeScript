interface RegExp<
    CapturingGroups extends CapturingGroupsArray = CapturingGroupsArray,
    NamedCapturingGroups extends NamedCapturingGroupsObject = NamedCapturingGroupsObject,
> {
    /**
     * Returns a Boolean value indicating the state of the unicodeSets flag (v) used with a regular expression.
     * Default is false. Read-only.
     */
    readonly unicodeSets: boolean;
}
