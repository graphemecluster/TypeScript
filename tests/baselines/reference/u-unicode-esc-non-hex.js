//// [tests/cases/conformance/test262/language/literals/regexp/u-unicode-esc-non-hex.ts] ////

//// [u-unicode-esc-non-hex.ts]
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Non-hexadecimal value within the delimiters of a UnicodeEscapeSequence
es6id: 21.2.1
negative:
  phase: parse
  type: SyntaxError
---*/


/\u{1,}/u;


//// [u-unicode-esc-non-hex.js]
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Non-hexadecimal value within the delimiters of a UnicodeEscapeSequence
es6id: 21.2.1
negative:
  phase: parse
  type: SyntaxError
---*/
/\u{1,}/u;
