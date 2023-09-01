//// [tests/cases/conformance/test262/language/literals/string/S7.8.4_A7.1_T4.ts] ////

//// [S7.8.4_A7.1_T4.ts]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    EscapeSequence :: UnicodeEscapeSequence :: u HexDigit HexDigit HexDigit
    HexDigit
es5id: 7.8.4_A7.1_T4
description: "UnicodeEscapeSequence :: u000G is incorrect"
negative:
  phase: parse
  type: SyntaxError
---*/


//CHECK#
"\u000G"


//// [S7.8.4_A7.1_T4.js]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
info: |
    EscapeSequence :: UnicodeEscapeSequence :: u HexDigit HexDigit HexDigit
    HexDigit
es5id: 7.8.4_A7.1_T4
description: "UnicodeEscapeSequence :: u000G is incorrect"
negative:
  phase: parse
  type: SyntaxError
---*/
//CHECK#
"\u000G";
