Input::
//// [/a/foo.ts]
import {x} from "bar"

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


/a/lib/tsc.js --w /a/foo.ts
Output::
>> Screen clear
[[90m12:00:11 AM[0m] Starting compilation in watch mode...

sysLog:: watchPresentFileSystemEntry:: /a 1 rename:: foo.js
sysLog:: watchPresentFileSystemEntry::  1 change:: a
sysLog:: watchPresentFileSystemEntry:: /a 1 change:: 
[96ma/foo.ts[0m:[93m1[0m:[93m17[0m - [91merror[0m[90m TS2792: [0mCannot find module 'bar'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?

[7m1[0m import {x} from "bar"
[7m [0m [91m                ~~~~~[0m

[[90m12:00:14 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/a/foo.ts"]
Program options: {"module":2}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/a/foo.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/foo.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/a/foo.ts (used version)

WatchedFiles::
/a/foo.ts:
  {"fileName":"/a/foo.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/node_modules:
  {"fileName":"/node_modules","pollingInterval":500}

FsWatches::
/:
  {"directoryName":""}

FsWatchesRecursive::
/a:
  {"directoryName":"/a"}

exitCode:: ExitStatus.undefined

//// [/a/foo.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});



Change:: write imported file

Input::
//// [/a/foo.ts]
import {y} from "bar"

//// [/a/bar.d.ts]
export const y = 1;


Output::
sysLog:: watchPresentFileSystemEntry:: /a 1 change:: foo.ts
sysLog:: watchPresentFileSystemEntry:: /a 1 rename:: bar.d.ts
sysLog:: watchPresentFileSystemEntry::  1 change:: a
sysLog:: watchPresentFileSystemEntry:: /a 1 change:: 

>> Screen clear
[[90m12:00:20 AM[0m] File change detected. Starting incremental compilation...

sysLog:: watchPresentFileSystemEntry:: /a 1 change:: foo.js
[[90m12:00:24 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/foo.ts"]
Program options: {"module":2}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/a/bar.d.ts
/a/foo.ts

Semantic diagnostics in builder refreshed for::
/a/bar.d.ts
/a/foo.ts

Shape signatures in builder refreshed for::
/a/bar.d.ts (used version)
/a/foo.ts (computed .d.ts)

WatchedFiles::
/a/foo.ts:
  {"fileName":"/a/foo.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/a/bar.d.ts:
  {"fileName":"/a/bar.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/a:
  {"directoryName":"/a"}

exitCode:: ExitStatus.undefined

//// [/a/foo.js] file written with same contents
