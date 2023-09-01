//// [tests/cases/conformance/test262/language/literals/regexp/S7.8.5_A1.2_T4.ts] ////

//// [S7.8.5_A1.2_T4.ts]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-literals-regular-expression-literals
info: |
  RegularExpressionLiteral::
    / RegularExpressionBody / RegularExpressionFlags

  RegularExpressionBody ::
    RegularExpressionFirstChar RegularExpressionChars

  RegularExpressionChars::
    [empty]

  MemberExpression . IdentifierName

description: A regular expression may not be empty.
negative:
  phase: parse
  type: SyntaxError
---*/


//
.source;


//// [S7.8.5_A1.2_T4.js]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
source;
