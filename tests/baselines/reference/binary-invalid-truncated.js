//// [tests/cases/conformance/test262/language/literals/numeric/binary-invalid-truncated.ts] ////

//// [binary-invalid-truncated.ts]
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 11.8.3
description: Binary-integer-literal-like sequence without any digits
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


0b;


//// [binary-invalid-truncated.js]
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 11.8.3
description: Binary-integer-literal-like sequence without any digits
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
