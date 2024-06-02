currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/home/src/projects/project/node_modules/fp-ts/lib/struct.d.ts]
export function foo(): void

//// [/home/src/projects/project/src/anotherFile.ts]
import * as xs1 from "fp-ts/lib/Struct";
import * as xs2 from "fp-ts/lib/struct";
import * as xs3 from "./Struct";
import * as xs4 from "./struct";


//// [/home/src/projects/project/src/oneMore.ts]
import * as xs1 from "fp-ts/lib/Struct";
import * as xs2 from "fp-ts/lib/struct";
import * as xs3 from "./Struct";
import * as xs4 from "./struct";


//// [/home/src/projects/project/src/struct.d.ts]
import * as xs1 from "fp-ts/lib/Struct";
import * as xs2 from "fp-ts/lib/struct";
import * as xs3 from "./Struct";
import * as xs4 from "./struct";


//// [/home/src/projects/project/tsconfig.json]
{}

//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };



Output::
/lib/tsc -p /home/src/projects/project/tsconfig.json --explainFiles
[96mhome/src/projects/project/src/anotherFile.ts[0m:[93m2[0m:[93m22[0m - [91merror[0m[90m TS1149: [0mFile name '/home/src/projects/project/node_modules/fp-ts/lib/struct.d.ts' differs from already included file name '/home/src/projects/project/node_modules/fp-ts/lib/Struct.d.ts' only in casing.
  The file is in the program because:
    Imported via "fp-ts/lib/Struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "fp-ts/lib/struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "fp-ts/lib/Struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "fp-ts/lib/struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "fp-ts/lib/Struct" from file '/home/src/projects/project/src/oneMore.ts'
    Imported via "fp-ts/lib/struct" from file '/home/src/projects/project/src/oneMore.ts'

[7m2[0m import * as xs2 from "fp-ts/lib/struct";
[7m [0m [91m                     ~~~~~~~~~~~~~~~~~~[0m

  [96mhome/src/projects/project/src/anotherFile.ts[0m:[93m1[0m:[93m22[0m
    [7m1[0m import * as xs1 from "fp-ts/lib/Struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/Struct.d.ts[0m:[93m1[0m:[93m22[0m
    [7m1[0m import * as xs1 from "fp-ts/lib/Struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/Struct.d.ts[0m:[93m2[0m:[93m22[0m
    [7m2[0m import * as xs2 from "fp-ts/lib/struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/oneMore.ts[0m:[93m1[0m:[93m22[0m
    [7m1[0m import * as xs1 from "fp-ts/lib/Struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/oneMore.ts[0m:[93m2[0m:[93m22[0m
    [7m2[0m import * as xs2 from "fp-ts/lib/struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.

[96mhome/src/projects/project/src/anotherFile.ts[0m:[93m3[0m:[93m22[0m - [91merror[0m[90m TS1261: [0mAlready included file name '/home/src/projects/project/src/Struct.d.ts' differs from file name '/home/src/projects/project/src/struct.d.ts' only in casing.
  The file is in the program because:
    Imported via "./Struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "./Struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "./struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "./struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "./Struct" from file '/home/src/projects/project/src/oneMore.ts'
    Imported via "./struct" from file '/home/src/projects/project/src/oneMore.ts'
    Matched by default include pattern '**/*'

[7m3[0m import * as xs3 from "./Struct";
[7m [0m [91m                     ~~~~~~~~~~[0m

  [96mhome/src/projects/project/src/Struct.d.ts[0m:[93m3[0m:[93m22[0m
    [7m3[0m import * as xs3 from "./Struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/Struct.d.ts[0m:[93m4[0m:[93m22[0m
    [7m4[0m import * as xs4 from "./struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/anotherFile.ts[0m:[93m4[0m:[93m22[0m
    [7m4[0m import * as xs4 from "./struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/oneMore.ts[0m:[93m3[0m:[93m22[0m
    [7m3[0m import * as xs3 from "./Struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/oneMore.ts[0m:[93m4[0m:[93m22[0m
    [7m4[0m import * as xs4 from "./struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.

[96mhome/src/projects/project/src/anotherFile.ts[0m:[93m4[0m:[93m22[0m - [91merror[0m[90m TS1149: [0mFile name '/home/src/projects/project/src/struct.d.ts' differs from already included file name '/home/src/projects/project/src/Struct.d.ts' only in casing.
  The file is in the program because:
    Imported via "./Struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "./Struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "./struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "./struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "./Struct" from file '/home/src/projects/project/src/oneMore.ts'
    Imported via "./struct" from file '/home/src/projects/project/src/oneMore.ts'
    Matched by default include pattern '**/*'

[7m4[0m import * as xs4 from "./struct";
[7m [0m [91m                     ~~~~~~~~~~[0m

  [96mhome/src/projects/project/src/anotherFile.ts[0m:[93m3[0m:[93m22[0m
    [7m3[0m import * as xs3 from "./Struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/Struct.d.ts[0m:[93m3[0m:[93m22[0m
    [7m3[0m import * as xs3 from "./Struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/Struct.d.ts[0m:[93m4[0m:[93m22[0m
    [7m4[0m import * as xs4 from "./struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/oneMore.ts[0m:[93m3[0m:[93m22[0m
    [7m3[0m import * as xs3 from "./Struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/oneMore.ts[0m:[93m4[0m:[93m22[0m
    [7m4[0m import * as xs4 from "./struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.

[96mhome/src/projects/project/src/oneMore.ts[0m:[93m2[0m:[93m22[0m - [91merror[0m[90m TS1149: [0mFile name '/home/src/projects/project/node_modules/fp-ts/lib/struct.d.ts' differs from already included file name '/home/src/projects/project/node_modules/fp-ts/lib/Struct.d.ts' only in casing.
  The file is in the program because:
    Imported via "fp-ts/lib/Struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "fp-ts/lib/struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "fp-ts/lib/Struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "fp-ts/lib/struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "fp-ts/lib/Struct" from file '/home/src/projects/project/src/oneMore.ts'
    Imported via "fp-ts/lib/struct" from file '/home/src/projects/project/src/oneMore.ts'

[7m2[0m import * as xs2 from "fp-ts/lib/struct";
[7m [0m [91m                     ~~~~~~~~~~~~~~~~~~[0m

  [96mhome/src/projects/project/src/anotherFile.ts[0m:[93m1[0m:[93m22[0m
    [7m1[0m import * as xs1 from "fp-ts/lib/Struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/anotherFile.ts[0m:[93m2[0m:[93m22[0m
    [7m2[0m import * as xs2 from "fp-ts/lib/struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/Struct.d.ts[0m:[93m1[0m:[93m22[0m
    [7m1[0m import * as xs1 from "fp-ts/lib/Struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/Struct.d.ts[0m:[93m2[0m:[93m22[0m
    [7m2[0m import * as xs2 from "fp-ts/lib/struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/oneMore.ts[0m:[93m1[0m:[93m22[0m
    [7m1[0m import * as xs1 from "fp-ts/lib/Struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.

[96mhome/src/projects/project/src/oneMore.ts[0m:[93m4[0m:[93m22[0m - [91merror[0m[90m TS1149: [0mFile name '/home/src/projects/project/src/struct.d.ts' differs from already included file name '/home/src/projects/project/src/Struct.d.ts' only in casing.
  The file is in the program because:
    Imported via "./Struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "./Struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "./struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "./struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "./Struct" from file '/home/src/projects/project/src/oneMore.ts'
    Imported via "./struct" from file '/home/src/projects/project/src/oneMore.ts'
    Matched by default include pattern '**/*'

[7m4[0m import * as xs4 from "./struct";
[7m [0m [91m                     ~~~~~~~~~~[0m

  [96mhome/src/projects/project/src/anotherFile.ts[0m:[93m3[0m:[93m22[0m
    [7m3[0m import * as xs3 from "./Struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/Struct.d.ts[0m:[93m3[0m:[93m22[0m
    [7m3[0m import * as xs3 from "./Struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/Struct.d.ts[0m:[93m4[0m:[93m22[0m
    [7m4[0m import * as xs4 from "./struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/anotherFile.ts[0m:[93m4[0m:[93m22[0m
    [7m4[0m import * as xs4 from "./struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/oneMore.ts[0m:[93m3[0m:[93m22[0m
    [7m3[0m import * as xs3 from "./Struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.

[96mhome/src/projects/project/src/Struct.d.ts[0m:[93m2[0m:[93m22[0m - [91merror[0m[90m TS1149: [0mFile name '/home/src/projects/project/node_modules/fp-ts/lib/struct.d.ts' differs from already included file name '/home/src/projects/project/node_modules/fp-ts/lib/Struct.d.ts' only in casing.
  The file is in the program because:
    Imported via "fp-ts/lib/Struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "fp-ts/lib/struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "fp-ts/lib/Struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "fp-ts/lib/struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "fp-ts/lib/Struct" from file '/home/src/projects/project/src/oneMore.ts'
    Imported via "fp-ts/lib/struct" from file '/home/src/projects/project/src/oneMore.ts'

[7m2[0m import * as xs2 from "fp-ts/lib/struct";
[7m [0m [91m                     ~~~~~~~~~~~~~~~~~~[0m

  [96mhome/src/projects/project/src/anotherFile.ts[0m:[93m1[0m:[93m22[0m
    [7m1[0m import * as xs1 from "fp-ts/lib/Struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/anotherFile.ts[0m:[93m2[0m:[93m22[0m
    [7m2[0m import * as xs2 from "fp-ts/lib/struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/Struct.d.ts[0m:[93m1[0m:[93m22[0m
    [7m1[0m import * as xs1 from "fp-ts/lib/Struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/oneMore.ts[0m:[93m1[0m:[93m22[0m
    [7m1[0m import * as xs1 from "fp-ts/lib/Struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/oneMore.ts[0m:[93m2[0m:[93m22[0m
    [7m2[0m import * as xs2 from "fp-ts/lib/struct";
    [7m [0m [96m                     ~~~~~~~~~~~~~~~~~~[0m
    File is included via import here.

[96mhome/src/projects/project/src/Struct.d.ts[0m:[93m4[0m:[93m22[0m - [91merror[0m[90m TS1149: [0mFile name '/home/src/projects/project/src/struct.d.ts' differs from already included file name '/home/src/projects/project/src/Struct.d.ts' only in casing.
  The file is in the program because:
    Imported via "./Struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "./Struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "./struct" from file '/home/src/projects/project/src/Struct.d.ts'
    Imported via "./struct" from file '/home/src/projects/project/src/anotherFile.ts'
    Imported via "./Struct" from file '/home/src/projects/project/src/oneMore.ts'
    Imported via "./struct" from file '/home/src/projects/project/src/oneMore.ts'
    Matched by default include pattern '**/*'

[7m4[0m import * as xs4 from "./struct";
[7m [0m [91m                     ~~~~~~~~~~[0m

  [96mhome/src/projects/project/src/anotherFile.ts[0m:[93m3[0m:[93m22[0m
    [7m3[0m import * as xs3 from "./Struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/Struct.d.ts[0m:[93m3[0m:[93m22[0m
    [7m3[0m import * as xs3 from "./Struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/anotherFile.ts[0m:[93m4[0m:[93m22[0m
    [7m4[0m import * as xs4 from "./struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/oneMore.ts[0m:[93m3[0m:[93m22[0m
    [7m3[0m import * as xs3 from "./Struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.
  [96mhome/src/projects/project/src/oneMore.ts[0m:[93m4[0m:[93m22[0m
    [7m4[0m import * as xs4 from "./struct";
    [7m [0m [96m                     ~~~~~~~~~~[0m
    File is included via import here.

lib/lib.d.ts
  Default library for target 'ES5'
home/src/projects/project/node_modules/fp-ts/lib/Struct.d.ts
  Imported via "fp-ts/lib/Struct" from file 'home/src/projects/project/src/anotherFile.ts'
  Imported via "fp-ts/lib/struct" from file 'home/src/projects/project/src/anotherFile.ts'
  Imported via "fp-ts/lib/Struct" from file 'home/src/projects/project/src/Struct.d.ts'
  Imported via "fp-ts/lib/struct" from file 'home/src/projects/project/src/Struct.d.ts'
  Imported via "fp-ts/lib/Struct" from file 'home/src/projects/project/src/oneMore.ts'
  Imported via "fp-ts/lib/struct" from file 'home/src/projects/project/src/oneMore.ts'
home/src/projects/project/src/Struct.d.ts
  Imported via "./Struct" from file 'home/src/projects/project/src/anotherFile.ts'
  Imported via "./Struct" from file 'home/src/projects/project/src/Struct.d.ts'
  Imported via "./struct" from file 'home/src/projects/project/src/Struct.d.ts'
  Imported via "./struct" from file 'home/src/projects/project/src/anotherFile.ts'
  Imported via "./Struct" from file 'home/src/projects/project/src/oneMore.ts'
  Imported via "./struct" from file 'home/src/projects/project/src/oneMore.ts'
  Matched by default include pattern '**/*'
home/src/projects/project/src/anotherFile.ts
  Matched by default include pattern '**/*'
home/src/projects/project/src/oneMore.ts
  Matched by default include pattern '**/*'

Found 7 errors in 3 files.

Errors  Files
     3  home/src/projects/project/src/anotherFile.ts[90m:2[0m
     2  home/src/projects/project/src/oneMore.ts[90m:2[0m
     2  home/src/projects/project/src/Struct.d.ts[90m:2[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/home/src/projects/project/src/anotherFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/home/src/projects/project/src/oneMore.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


