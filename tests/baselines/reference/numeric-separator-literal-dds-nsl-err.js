//// [tests/cases/conformance/test262/language/literals/numeric/numeric-separators/numeric-separator-literal-dds-nsl-err.ts] ////

//// [numeric-separator-literal-dds-nsl-err.ts]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  NumericLiteralSeparator may not be the last digit character of a
  DecimalLiteral
info: |
  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    DecimalIntegerLiteral . DecimalDigits_opt ExponentPart_opt

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/


10_


//// [numeric-separator-literal-dds-nsl-err.js]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-NumericLiteralSeparator
description: >
  NumericLiteralSeparator may not be the last digit character of a
  DecimalLiteral
info: |
  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    DecimalIntegerLiteral . DecimalDigits_opt ExponentPart_opt

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/
10;
