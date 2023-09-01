//// [tests/cases/conformance/test262/language/literals/numeric/legacy-octal-integery-07-strict.ts] ////

//// [legacy-octal-integery-07-strict.ts]
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.8.3-5-s
description: Strict Mode - octal extension (07) is forbidden in strict mode
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/


07;


//// [legacy-octal-integery-07-strict.js]
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es5id: 7.8.3-5-s
description: Strict Mode - octal extension (07) is forbidden in strict mode
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/
7;
