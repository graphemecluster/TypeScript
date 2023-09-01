//// [tests/cases/conformance/test262/language/literals/regexp/named-groups/invalid-dangling-groupname-3.ts] ////

//// [invalid-dangling-groupname-3.ts]
// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Group reference must have corresponding group.
info: |
  It is a Syntax Error if the enclosing Pattern does not contain a
  GroupSpecifier with an enclosed RegExpIdentifierName whose StringValue
  equals the StringValue of the RegExpIdentifierName of this production's
  GroupName.
esid: sec-patterns-static-semantics-early-errors
negative:
  phase: parse
  type: SyntaxError
features: [regexp-named-groups]
---*/


/(?<ab>a)\k<a>/;


//// [invalid-dangling-groupname-3.js]
// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Group reference must have corresponding group.
info: |
  It is a Syntax Error if the enclosing Pattern does not contain a
  GroupSpecifier with an enclosed RegExpIdentifierName whose StringValue
  equals the StringValue of the RegExpIdentifierName of this production's
  GroupName.
esid: sec-patterns-static-semantics-early-errors
negative:
  phase: parse
  type: SyntaxError
features: [regexp-named-groups]
---*/
/(?<ab>a)\k<a>/;
