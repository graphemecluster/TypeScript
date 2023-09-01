//// [tests/cases/conformance/test262/language/literals/bigint/exponent-part.ts] ////

//// [exponent-part.ts]
// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  It is a Syntax Error if the NumericLiteralBase contains an ExponentPart.
esid: sec-numeric-literal-static-semantics-early-errors
features: [BigInt]
negative:
  phase: parse
  type: SyntaxError
---*/


0e0n;


//// [exponent-part.js]
// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  It is a Syntax Error if the NumericLiteralBase contains an ExponentPart.
esid: sec-numeric-literal-static-semantics-early-errors
features: [BigInt]
negative:
  phase: parse
  type: SyntaxError
---*/
0e0n;
