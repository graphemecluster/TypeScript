//// [tests/cases/conformance/test262/language/literals/numeric/numeric-separators/numeric-separator-literal-hil-nsl-hd-dunder-err.ts] ////

//// [numeric-separator-literal-hil-nsl-hd-dunder-err.ts]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  NumericLiteralSeparator may not appear adjacent to another
  NumericLiteralSeparator in a HexIntegerLiteral
info: |
  NumericLiteralSeparator ::
    _

  HexIntegerLiteral ::
    0x HexDigits
    0X HexDigits

  HexDigits ::
    HexDigit
    HexDigits HexDigit
    HexDigits NumericLiteralSeparator HexDigit

  HexDigit::one of
    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/


0x0__0


//// [numeric-separator-literal-hil-nsl-hd-dunder-err.js]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-NumericLiteralSeparator
description: >
  NumericLiteralSeparator may not appear adjacent to another
  NumericLiteralSeparator in a HexIntegerLiteral
info: |
  NumericLiteralSeparator ::
    _

  HexIntegerLiteral ::
    0x HexDigits
    0X HexDigits

  HexDigits ::
    HexDigit
    HexDigits HexDigit
    HexDigits NumericLiteralSeparator HexDigit

  HexDigit::one of
    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/
0;
