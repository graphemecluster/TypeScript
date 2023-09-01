//// [tests/cases/conformance/test262/language/literals/numeric/numeric-separators/numeric-separator-literal-dd-nsl-dds-dunder-err.ts] ////

//// [numeric-separator-literal-dd-nsl-dds-dunder-err.ts]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  NumericLiteralSeparator may not appear adjacent to another
  NumericLiteralSeparator in a DecimalIntegerLiteral
info: |
  NumericLiteralSeparator ::
    _

  DecimalIntegerLiteral ::
    ...
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/


1__0123456789


//// [numeric-separator-literal-dd-nsl-dds-dunder-err.js]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-NumericLiteralSeparator
description: >
  NumericLiteralSeparator may not appear adjacent to another
  NumericLiteralSeparator in a DecimalIntegerLiteral
info: |
  NumericLiteralSeparator ::
    _

  DecimalIntegerLiteral ::
    ...
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/
10123456789;
