//// [tests/cases/conformance/test262/language/literals/numeric/numeric-separators/numeric-separator-literal-unicode-err.ts] ////

//// [numeric-separator-literal-unicode-err.ts]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  NonZeroDigit NumericLiteralSeparator DecimalDigits sequence expressed with
  unicode escape sequence
info: |
  NumericLiteralSeparator::
    _

  DecimalIntegerLiteral::
    ...
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/


1\u005F0123456789


//// [numeric-separator-literal-unicode-err.js]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-NumericLiteralSeparator
description: >
  NonZeroDigit NumericLiteralSeparator DecimalDigits sequence expressed with
  unicode escape sequence
info: |
  NumericLiteralSeparator::
    _

  DecimalIntegerLiteral::
    ...
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/
1;
\u005F0123456789;
