//// [tests/cases/conformance/test262/language/literals/bigint/non-octal-like-invalid-09n.ts] ////

//// [non-octal-like-invalid-09n.ts]
// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteral
description: >
  The BigInt suffix is disallowed in NonOctalDecimalIntegerLiteral
info: |
  NumericLiteral ::
    DecimalIntegerLiteral BigIntLiteralSuffix

  https://github.com/tc39/proposal-bigint/issues/208

  NumericLiteral ::
    DecimalBigIntegerLiteral

  DecimalBigIntegerLiteral ::
    0 BigIntLiteralSuffix
    NonZeroDigit DecimalDigits_opt BigIntLiteralSuffix
features: [BigInt]
negative:
  phase: parse
  type: SyntaxError
---*/


09n;


//// [non-octal-like-invalid-09n.js]
// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-NumericLiteral
description: >
  The BigInt suffix is disallowed in NonOctalDecimalIntegerLiteral
info: |
  NumericLiteral ::
    DecimalIntegerLiteral BigIntLiteralSuffix

  https://github.com/tc39/proposal-bigint/issues/208

  NumericLiteral ::
    DecimalBigIntegerLiteral

  DecimalBigIntegerLiteral ::
    0 BigIntLiteralSuffix
    NonZeroDigit DecimalDigits_opt BigIntLiteralSuffix
features: [BigInt]
negative:
  phase: parse
  type: SyntaxError
---*/
9;
n;
