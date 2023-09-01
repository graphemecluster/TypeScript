//// [tests/cases/conformance/test262/language/literals/numeric/numeric-separators/numeric-separator-literal-nzd-nsl-dds-dunder-err.ts] ////

//// [numeric-separator-literal-nzd-nsl-dds-dunder-err.ts]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  NumericLiteralSeparator may not appear adjacent to another
  NumericLiteralSeparator in DecimalIntegerLiteral
info: |
  NumericLiteralSeparator ::
    _

  DecimalIntegerLiteral ::
    ...
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits

  NonZeroDigit :: one of
    1 2 3 4 5 6 7 8 9

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/


0__0123456789


//// [numeric-separator-literal-nzd-nsl-dds-dunder-err.js]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-NumericLiteralSeparator
description: >
  NumericLiteralSeparator may not appear adjacent to another
  NumericLiteralSeparator in DecimalIntegerLiteral
info: |
  NumericLiteralSeparator ::
    _

  DecimalIntegerLiteral ::
    ...
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits

  NonZeroDigit :: one of
    1 2 3 4 5 6 7 8 9

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/
123456789;
