//// [tests/cases/conformance/test262/language/literals/regexp/S7.8.5_A1.2_T3.ts] ////

//// [S7.8.5_A1.2_T3.ts]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-literals-regular-expression-literals
info: |
  RegularExpressionBody ::
    RegularExpressionFirstChar RegularExpressionChars

  RegularExpressionChars ::
    [empty]
    RegularExpressionChars RegularExpressionChar

  RegularExpressionFirstChar ::
    RegularExpressionNonTerminator but not one of * or \ or / or [

description: >
  The first character of a regular expression may not be "/"
negative:
  phase: parse
  type: SyntaxError
---*/


///
.source;


//// [S7.8.5_A1.2_T3.js]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
source;
