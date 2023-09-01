//// [tests/cases/conformance/test262/language/literals/regexp/regexp-source-char-no-line-separator.ts] ////

//// [regexp-source-char-no-line-separator.ts]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-RegularExpressionBackslashSequence
info: |
  RegularExpressionBackslashSequence ::
    \ RegularExpressionNonTerminator

  RegularExpressionNonTerminator ::
    SourceCharacter but not LineTerminator

  LineTerminator ::
    <LF>
    <CR>
    <LS>
    <PS>

description: >
  A regular expression may not contain a <LS> as a SourceCharacter
negative:
  phase: parse
  type: SyntaxError
---*/


/a\\ /

/*
There is a <LS> between "a\\ " and "/"
*/


//// [regexp-source-char-no-line-separator.js]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: prod-RegularExpressionBackslashSequence
info: |
  RegularExpressionBackslashSequence ::
    \ RegularExpressionNonTerminator

  RegularExpressionNonTerminator ::
    SourceCharacter but not LineTerminator

  LineTerminator ::
    <LF>
    <CR>
    <LS>
    <PS>

description: >
  A regular expression may not contain a <LS> as a SourceCharacter
negative:
  phase: parse
  type: SyntaxError
---*/
/a\\
    /
;
/*
There is a <LS> between "a\\
" and "/"
*/
