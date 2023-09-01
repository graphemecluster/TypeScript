//// [tests/cases/conformance/test262/language/literals/bigint/legacy-octal-like-invalid-01n.ts] ////

//// [legacy-octal-like-invalid-01n.ts]
// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteral
description: >
  The BigInt suffix is disallowed in LegacyOctalIntegerLiteral
info: |
  NumericLiteral ::
    DecimalIntegerLiteral BigIntLiteralSuffix
    NumericLiteralBase BigIntLiteralSuffix
    LegacyOctalIntegerLiteral

  NumericLiteralBase ::
    BinaryIntegerLiteral
    OctalIntegerLiteral
    HexIntegerLiteral

  BigIntLiteralSuffix :: n
features: [BigInt]
negative:
  phase: parse
  type: SyntaxError
---*/


01n;


//// [legacy-octal-like-invalid-01n.js]
// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-NumericLiteral
description: >
  The BigInt suffix is disallowed in LegacyOctalIntegerLiteral
info: |
  NumericLiteral ::
    DecimalIntegerLiteral BigIntLiteralSuffix
    NumericLiteralBase BigIntLiteralSuffix
    LegacyOctalIntegerLiteral

  NumericLiteralBase ::
    BinaryIntegerLiteral
    OctalIntegerLiteral
    HexIntegerLiteral

  BigIntLiteralSuffix :: n
features: [BigInt]
negative:
  phase: parse
  type: SyntaxError
---*/
1;
n;
