//// [tests/cases/conformance/test262/language/literals/string/legacy-non-octal-escape-sequence-1-strict-explicit-pragma.ts] ////

//// [legacy-non-octal-escape-sequence-1-strict-explicit-pragma.ts]
// Copyright (C) 2020 Rick Waldron Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-literals-string-literals
description: >
  String Literals extensions disallowed in strict mode; ZeroToThree 1
info: |
  It is possible for string literals to precede a Use Strict Directive that places the enclosing
  code in strict mode, and implementations must take care to not use this extended definition of
  EscapeSequence with such literals. For example, attempting to parse the following source text
  must fail.

  Strict mode is entered via the explicit Use Strict Directive.

  ZeroToThree::one of
    0 1 2 3

flags: [noStrict]
negative:
  phase: parse
  type: SyntaxError
---*/


function invalid() { "\1"; "use strict"; }


//// [legacy-non-octal-escape-sequence-1-strict-explicit-pragma.js]
// Copyright (C) 2020 Rick Waldron Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-literals-string-literals
description: >
  String Literals extensions disallowed in strict mode; ZeroToThree 1
info: |
  It is possible for string literals to precede a Use Strict Directive that places the enclosing
  code in strict mode, and implementations must take care to not use this extended definition of
  EscapeSequence with such literals. For example, attempting to parse the following source text
  must fail.

  Strict mode is entered via the explicit Use Strict Directive.

  ZeroToThree::one of
    0 1 2 3

flags: [noStrict]
negative:
  phase: parse
  type: SyntaxError
---*/
function invalid() {
    "\1";
    "use strict";
}
