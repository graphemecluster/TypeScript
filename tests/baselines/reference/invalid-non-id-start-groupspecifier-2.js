//// [tests/cases/conformance/test262/language/literals/regexp/named-groups/invalid-non-id-start-groupspecifier-2.ts] ////

//// [invalid-non-id-start-groupspecifier-2.ts]
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


/(?<𐒤>a)/;


//// [invalid-non-id-start-groupspecifier-2.js]
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
/(?<𐒤>a)/;
