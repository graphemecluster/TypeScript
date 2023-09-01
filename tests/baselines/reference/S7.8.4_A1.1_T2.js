//// [tests/cases/conformance/test262/language/literals/string/S7.8.4_A1.1_T2.ts] ////

//// [S7.8.4_A1.1_T2.ts]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "StringLiteral :: \"DoubleStringCharacters_opt\""
es5id: 7.8.4_A1.1_T2
description: >
    DoubleStringCharacter :: SourceCharacter but not double-quote " or
    LineTerminator
negative:
  phase: parse
  type: SyntaxError
---*/


//CHECK#1
"
"


//// [S7.8.4_A1.1_T2.js]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
info: "StringLiteral :: \"DoubleStringCharacters_opt\""
es5id: 7.8.4_A1.1_T2
description: >
    DoubleStringCharacter :: SourceCharacter but not double-quote " or
    LineTerminator
negative:
  phase: parse
  type: SyntaxError
---*/
//CHECK#1
";
";
