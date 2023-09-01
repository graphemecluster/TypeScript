//// [tests/cases/conformance/test262/language/literals/numeric/numeric-separators/numeric-separator-literal-nzd-nsl-dds-leading-zero-err.ts] ////

//// [numeric-separator-literal-nzd-nsl-dds-leading-zero-err.ts]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NonZeroDigit NumericLiteralSeparator DecimalDigits
info: |
  NumericLiteralSeparator ::
    _

  DecimalIntegerLiteral ::
    ...
    NonZeroDigit NumericLiteralSeparator DecimalDigits

  NonZeroDigit :: one of
    1 2 3 4 5 6 7 8 9

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/


0_0123456789


//// [numeric-separator-literal-nzd-nsl-dds-leading-zero-err.js]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-NumericLiteralSeparator
description: NonZeroDigit NumericLiteralSeparator DecimalDigits
info: |
  NumericLiteralSeparator ::
    _

  DecimalIntegerLiteral ::
    ...
    NonZeroDigit NumericLiteralSeparator DecimalDigits

  NonZeroDigit :: one of
    1 2 3 4 5 6 7 8 9

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/
123456789;
