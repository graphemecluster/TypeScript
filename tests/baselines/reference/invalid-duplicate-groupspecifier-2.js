//// [tests/cases/conformance/test262/language/literals/regexp/named-groups/invalid-duplicate-groupspecifier-2.ts] ////

//// [invalid-duplicate-groupspecifier-2.ts]
// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: GroupSpecifiers within one alternative must be unique.
info: |
  It is a Syntax Error if |Pattern| contains two distinct |GroupSpecifier|s
  _x_ and _y_ for which CapturingGroupName(_x_) is the same as
  CapturingGroupName(_y_) and such that CanBothParticipate(_x_, _y_) is *true*.
esid: sec-patterns-static-semantics-early-errors
negative:
  phase: parse
  type: SyntaxError
features: [regexp-named-groups]
---*/


/(?<a>a)(?<b>b)(?<a>a)/;


//// [invalid-duplicate-groupspecifier-2.js]
// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: GroupSpecifiers within one alternative must be unique.
info: |
  It is a Syntax Error if |Pattern| contains two distinct |GroupSpecifier|s
  _x_ and _y_ for which CapturingGroupName(_x_) is the same as
  CapturingGroupName(_y_) and such that CanBothParticipate(_x_, _y_) is *true*.
esid: sec-patterns-static-semantics-early-errors
negative:
  phase: parse
  type: SyntaxError
features: [regexp-named-groups]
---*/
/(?<a>a)(?<b>b)(?<a>a)/;
