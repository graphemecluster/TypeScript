//// [tests/cases/conformance/test262/language/literals/numeric/numeric-separators/numeric-separator-literal-dot-dds-nsl-ep-err.ts] ////

//// [numeric-separator-literal-dot-dds-nsl-ep-err.ts]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator may not appear adjacent to ExponentPart
info: |
  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    . DecimalDigits ExponentPart_opt

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  ExponentIndicator :: one of
    e E

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/


.0_e1


//// [numeric-separator-literal-dot-dds-nsl-ep-err.js]
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator may not appear adjacent to ExponentPart
info: |
  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    . DecimalDigits ExponentPart_opt

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  ExponentIndicator :: one of
    e E

negative:
  phase: parse
  type: SyntaxError

features: [numeric-separator-literal]
---*/
0;
