//// [tests/cases/conformance/test262/language/literals/string/S7.8.4_A7.2_T6.ts] ////

//// [S7.8.4_A7.2_T6.ts]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "UnicodeEscapeSequence :: u HexDigit (one, two or three time) is incorrect"
es5id: 7.8.4_A7.2_T6
description: ":: HexDigit :: A"
negative:
  phase: parse
  type: SyntaxError
---*/


//CHECK#1
"\uAAA"


//// [S7.8.4_A7.2_T6.js]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
info: "UnicodeEscapeSequence :: u HexDigit (one, two or three time) is incorrect"
es5id: 7.8.4_A7.2_T6
description: ":: HexDigit :: A"
negative:
  phase: parse
  type: SyntaxError
---*/
//CHECK#1
"\uAAA";
