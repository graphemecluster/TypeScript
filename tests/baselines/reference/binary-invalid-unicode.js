//// [tests/cases/conformance/test262/language/literals/numeric/binary-invalid-unicode.ts] ////

//// [binary-invalid-unicode.ts]
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 11.8.3
description: Binary-integer-literal-like sequence expressed with unicode escape sequence
info: |
    BinaryIntegerLiteral ::
      0b BinaryDigits
      0B BinaryDigits
    BinaryDigits ::
      BinaryDigit
      BinaryDigits BinaryDigit
    BinaryDigit :: one of
      0 1
negative:
  phase: parse
  type: SyntaxError
---*/


0\u00620;


//// [binary-invalid-unicode.js]
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 11.8.3
description: Binary-integer-literal-like sequence expressed with unicode escape sequence
info: |
    BinaryIntegerLiteral ::
      0b BinaryDigits
      0B BinaryDigits
    BinaryDigits ::
      BinaryDigit
      BinaryDigits BinaryDigit
    BinaryDigit :: one of
      0 1
negative:
  phase: parse
  type: SyntaxError
---*/
0;
\u00620;
