//// [tests/cases/conformance/test262/language/literals/regexp/regexp-first-char-no-paragraph-separator.ts] ////

//// [regexp-first-char-no-paragraph-separator.ts]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-RegularExpressionNonTerminator
info: |
  RegularExpressionBody ::
    RegularExpressionFirstChar RegularExpressionChars

  RegularExpressionChars ::
    [empty]
    RegularExpressionChars RegularExpressionChar

  RegularExpressionFirstChar ::
    RegularExpressionNonTerminator but not one of * or \ or / or [

  RegularExpressionNonTerminator ::
    SourceCharacter but not LineTerminator

description: >
  The first character of a regular expression may not be a <PS>
negative:
  phase: parse
  type: SyntaxError
---*/


/ /

/*
There is a <PS> between the two / characters
*/


//// [regexp-first-char-no-paragraph-separator.js]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-RegularExpressionNonTerminator
info: |
  RegularExpressionBody ::
    RegularExpressionFirstChar RegularExpressionChars

  RegularExpressionChars ::
    [empty]
    RegularExpressionChars RegularExpressionChar

  RegularExpressionFirstChar ::
    RegularExpressionNonTerminator but not one of * or \ or / or [

  RegularExpressionNonTerminator ::
    SourceCharacter but not LineTerminator

description: >
  The first character of a regular expression may not be a <PS>
negative:
  phase: parse
  type: SyntaxError
---*/
/
    /
;
/*
There is a <PS> between the two / characters
*/
