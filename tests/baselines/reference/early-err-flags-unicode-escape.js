//// [tests/cases/conformance/test262/language/literals/regexp/early-err-flags-unicode-escape.ts] ////

//// [early-err-flags-unicode-escape.ts]
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-literals-regular-expression-literals-static-semantics-early-errors
info: |
  RegularExpressionFlags ::
    RegularExpressionFlags IdentifierPart

description: >
  It is a Syntax Error if IdentifierPart contains a Unicode escape sequence.
negative:
  phase: parse
  type: SyntaxError
---*/


/./\u0067;


//// [early-err-flags-unicode-escape.js]
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-literals-regular-expression-literals-static-semantics-early-errors
info: |
  RegularExpressionFlags ::
    RegularExpressionFlags IdentifierPart

description: >
  It is a Syntax Error if IdentifierPart contains a Unicode escape sequence.
negative:
  phase: parse
  type: SyntaxError
---*/
/./;
\u0067;
