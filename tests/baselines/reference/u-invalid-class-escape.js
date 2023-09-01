//// [tests/cases/conformance/test262/language/literals/regexp/u-invalid-class-escape.ts] ////

//// [u-invalid-class-escape.ts]
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-patterns
es6id: 21.2.1
description: >
    ClassEscape does not recognize "class control" patterns
info: |
    ClassEscape[U] ::
        b
        [+U] -
        CharacterClassEscape
        CharacterEscape[?U]

    The `u` flag precludes the Annex B extension that enables this pattern.
negative:
  phase: parse
  type: SyntaxError
---*/


/\c0/u;


//// [u-invalid-class-escape.js]
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-patterns
es6id: 21.2.1
description: >
    ClassEscape does not recognize "class control" patterns
info: |
    ClassEscape[U] ::
        b
        [+U] -
        CharacterClassEscape
        CharacterEscape[?U]

    The `u` flag precludes the Annex B extension that enables this pattern.
negative:
  phase: parse
  type: SyntaxError
---*/
/\c0/u;
