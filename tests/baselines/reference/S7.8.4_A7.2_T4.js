//// [tests/cases/conformance/test262/language/literals/string/S7.8.4_A7.2_T4.ts] ////

//// [S7.8.4_A7.2_T4.ts]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "UnicodeEscapeSequence :: u HexDigit (one, two or three time) is incorrect"
es5id: 7.8.4_A7.2_T4
description: ":: HexDigit :: A"
negative:
  phase: parse
  type: SyntaxError
---*/


//CHECK#1
"\uAA"


//// [S7.8.4_A7.2_T4.js]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
info: "UnicodeEscapeSequence :: u HexDigit (one, two or three time) is incorrect"
es5id: 7.8.4_A7.2_T4
description: ":: HexDigit :: A"
negative:
  phase: parse
  type: SyntaxError
---*/
//CHECK#1
"\uAA";
