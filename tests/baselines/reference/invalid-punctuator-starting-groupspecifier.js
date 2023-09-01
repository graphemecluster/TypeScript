//// [tests/cases/conformance/test262/language/literals/regexp/named-groups/invalid-punctuator-starting-groupspecifier.ts] ////

//// [invalid-punctuator-starting-groupspecifier.ts]
// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: GroupSpecifier must be identifier-like.
esid: prod-GroupSpecifier
negative:
  phase: parse
  type: SyntaxError
features: [regexp-named-groups]
---*/


/(?<:a>a)/;


//// [invalid-punctuator-starting-groupspecifier.js]
// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: GroupSpecifier must be identifier-like.
esid: prod-GroupSpecifier
negative:
  phase: parse
  type: SyntaxError
features: [regexp-named-groups]
---*/
/(?<:a>a)/;
