Input::
//// [/user/username/projects/noEmitOnError/shared/types/db.ts]
export interface A {
    name: string;
}

//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
;

//// [/user/username/projects/noEmitOnError/src/other.ts]
console.log("hi");
export { }

//// [/user/username/projects/noEmitOnError/tsconfig.json]
{
    "compilerOptions": {
        "outDir": "./dev-build",
        "noEmitOnError": true
    }
}


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


/a/lib/tsc.js --w
Output::
>> Screen clear
[[90m12:00:31 AM[0m] Starting compilation in watch mode...

[96msrc/main.ts[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m4[0m ;
[7m [0m [91m~[0m

[[90m12:00:32 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/noemitonerror/shared/types/db.ts (used version)
/user/username/projects/noemitonerror/src/main.ts (used version)
/user/username/projects/noemitonerror/src/other.ts (used version)

WatchedFiles::
/user/username/projects/noemitonerror/tsconfig.json:
  {"fileName":"/user/username/projects/noEmitOnError/tsconfig.json","pollingInterval":250}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {"fileName":"/user/username/projects/noEmitOnError/shared/types/db.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/main.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/main.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/other.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/other.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/noemitonerror/node_modules/@types:
  {"fileName":"/user/username/projects/noEmitOnError/node_modules/@types","pollingInterval":500}

FsWatches::

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {"directoryName":"/user/username/projects/noemitonerror"}

exitCode:: ExitStatus.undefined


Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Output::
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: src/main.ts

>> Screen clear
[[90m12:00:36 AM[0m] File change detected. Starting incremental compilation...

[96msrc/main.ts[0m:[93m4[0m:[93m1[0m - [91merror[0m[90m TS1005: [0m',' expected.

[7m4[0m ;
[7m [0m [91m~[0m

[[90m12:00:37 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

WatchedFiles::
/user/username/projects/noemitonerror/tsconfig.json:
  {"fileName":"/user/username/projects/noEmitOnError/tsconfig.json","pollingInterval":250}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {"fileName":"/user/username/projects/noEmitOnError/shared/types/db.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/main.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/main.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/other.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/other.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/noemitonerror/node_modules/@types:
  {"fileName":"/user/username/projects/noEmitOnError/node_modules/@types","pollingInterval":500}

FsWatches::

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {"directoryName":"/user/username/projects/noemitonerror"}

exitCode:: ExitStatus.undefined


Change:: Fix Syntax error

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a = {
    lastName: 'sdsd'
};


Output::
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: src/main.ts

>> Screen clear
[[90m12:00:41 AM[0m] File change detected. Starting incremental compilation...

sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 rename:: dev-build
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: 
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 rename:: dev-build/shared
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: dev-build
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 rename:: dev-build/shared/types
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: dev-build/shared
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 rename:: dev-build/shared/types/db.js
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: dev-build/shared/types
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 rename:: dev-build/src
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: dev-build
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 rename:: dev-build/src/main.js
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: dev-build/src
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 rename:: dev-build/src/other.js
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: dev-build/src
[[90m12:00:58 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

WatchedFiles::
/user/username/projects/noemitonerror/tsconfig.json:
  {"fileName":"/user/username/projects/noEmitOnError/tsconfig.json","pollingInterval":250}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {"fileName":"/user/username/projects/noEmitOnError/shared/types/db.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/main.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/main.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/other.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/other.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/noemitonerror/node_modules/@types:
  {"fileName":"/user/username/projects/noEmitOnError/node_modules/@types","pollingInterval":500}

FsWatches::

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {"directoryName":"/user/username/projects/noemitonerror"}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/noEmitOnError/dev-build/shared/types/db.js]
"use strict";
exports.__esModule = true;


//// [/user/username/projects/noEmitOnError/dev-build/src/main.js]
"use strict";
exports.__esModule = true;
var a = {
    lastName: 'sdsd'
};


//// [/user/username/projects/noEmitOnError/dev-build/src/other.js]
"use strict";
exports.__esModule = true;
console.log("hi");



Change:: Semantic Error

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a: string = 10;


Output::
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: src/main.ts

>> Screen clear
[[90m12:01:02 AM[0m] File change detected. Starting incremental compilation...

[96msrc/main.ts[0m:[93m2[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'number' is not assignable to type 'string'.

[7m2[0m const a: string = 10;
[7m [0m [91m      ~[0m

[[90m12:01:03 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

WatchedFiles::
/user/username/projects/noemitonerror/tsconfig.json:
  {"fileName":"/user/username/projects/noEmitOnError/tsconfig.json","pollingInterval":250}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {"fileName":"/user/username/projects/noEmitOnError/shared/types/db.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/main.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/main.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/other.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/other.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/noemitonerror/node_modules/@types:
  {"fileName":"/user/username/projects/noEmitOnError/node_modules/@types","pollingInterval":500}

FsWatches::

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {"directoryName":"/user/username/projects/noemitonerror"}

exitCode:: ExitStatus.undefined


Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Output::
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: src/main.ts

>> Screen clear
[[90m12:01:08 AM[0m] File change detected. Starting incremental compilation...

[96msrc/main.ts[0m:[93m2[0m:[93m7[0m - [91merror[0m[90m TS2322: [0mType 'number' is not assignable to type 'string'.

[7m2[0m const a: string = 10;
[7m [0m [91m      ~[0m

[[90m12:01:09 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

WatchedFiles::
/user/username/projects/noemitonerror/tsconfig.json:
  {"fileName":"/user/username/projects/noEmitOnError/tsconfig.json","pollingInterval":250}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {"fileName":"/user/username/projects/noEmitOnError/shared/types/db.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/main.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/main.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/other.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/other.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/noemitonerror/node_modules/@types:
  {"fileName":"/user/username/projects/noEmitOnError/node_modules/@types","pollingInterval":500}

FsWatches::

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {"directoryName":"/user/username/projects/noemitonerror"}

exitCode:: ExitStatus.undefined


Change:: Fix Semantic Error

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts]
import { A } from "../shared/types/db";
const a: string = "hello";


Output::
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: src/main.ts

>> Screen clear
[[90m12:01:13 AM[0m] File change detected. Starting incremental compilation...

sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: dev-build/src/main.js
[[90m12:01:17 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/noEmitOnError/src/main.ts

Shape signatures in builder refreshed for::
/user/username/projects/noemitonerror/src/main.ts (computed .d.ts)

WatchedFiles::
/user/username/projects/noemitonerror/tsconfig.json:
  {"fileName":"/user/username/projects/noEmitOnError/tsconfig.json","pollingInterval":250}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {"fileName":"/user/username/projects/noEmitOnError/shared/types/db.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/main.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/main.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/other.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/other.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/noemitonerror/node_modules/@types:
  {"fileName":"/user/username/projects/noEmitOnError/node_modules/@types","pollingInterval":500}

FsWatches::

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {"directoryName":"/user/username/projects/noemitonerror"}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/noEmitOnError/dev-build/src/main.js]
"use strict";
exports.__esModule = true;
var a = "hello";



Change:: No change

Input::
//// [/user/username/projects/noEmitOnError/src/main.ts] file written with same contents

Output::
sysLog:: watchPresentFileSystemEntry:: /user/username/projects/noemitonerror 1 change:: src/main.ts

>> Screen clear
[[90m12:01:21 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:22 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/noEmitOnError/shared/types/db.ts","/user/username/projects/noEmitOnError/src/main.ts","/user/username/projects/noEmitOnError/src/other.ts"]
Program options: {"outDir":"/user/username/projects/noEmitOnError/dev-build","noEmitOnError":true,"watch":true,"configFilePath":"/user/username/projects/noEmitOnError/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/noEmitOnError/shared/types/db.ts
/user/username/projects/noEmitOnError/src/main.ts
/user/username/projects/noEmitOnError/src/other.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

WatchedFiles::
/user/username/projects/noemitonerror/tsconfig.json:
  {"fileName":"/user/username/projects/noEmitOnError/tsconfig.json","pollingInterval":250}
/user/username/projects/noemitonerror/shared/types/db.ts:
  {"fileName":"/user/username/projects/noEmitOnError/shared/types/db.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/main.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/main.ts","pollingInterval":250}
/user/username/projects/noemitonerror/src/other.ts:
  {"fileName":"/user/username/projects/noEmitOnError/src/other.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/noemitonerror/node_modules/@types:
  {"fileName":"/user/username/projects/noEmitOnError/node_modules/@types","pollingInterval":500}

FsWatches::

FsWatchesRecursive::
/user/username/projects/noemitonerror:
  {"directoryName":"/user/username/projects/noemitonerror"}

exitCode:: ExitStatus.undefined

