Input::
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

//// [/src/src/index.ts]
export const x = 10;

//// [/src/tsconfig.json]
{"compilerOptions":{"outDir":"dist","composite":true}}



Output::
/lib/tsc --b /src/tsconfig.json -v
[[90m12:00:09 AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90m12:00:10 AM[0m] Project 'src/tsconfig.json' is out of date because output file 'src/dist/src/index.js' does not exist

[[90m12:00:11 AM[0m] Building project '/src/tsconfig.json'...

exitCode:: ExitStatus.Success

getModifiedTime:: {
 "/src/src/index.ts": 1,
 "/src/dist/src/index.js": 1,
 "/src/dist/src/index.d.ts": 1
}

setModifiedTime:: {}

fileExists:: {}

directoryExists:: {
 "/src/node_modules/@types": 1,
 "/node_modules/@types": 1
}


//// [/src/dist/src/index.d.ts]
export declare const x = 10;


//// [/src/dist/src/index.js]
"use strict";
exports.__esModule = true;
exports.x = void 0;
exports.x = 10;


//// [/src/dist/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../src/index.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-10726455937-export const x = 10;","signature":"-6057683066-export declare const x = 10;\r\n"}],"options":{"composite":true,"outDir":"./"},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2]},"version":"FakeTSVersion"}

//// [/src/dist/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../src/index.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../src/index.ts": {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../src/index.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 813
}



Change:: no-change-run
Input::


Output::
/lib/tsc --b /src/tsconfig.json -v
[[90m12:00:18 AM[0m] Projects in this build: 
    * src/tsconfig.json

[[90m12:00:19 AM[0m] Project 'src/tsconfig.json' is up to date because newest input 'src/src/index.ts' is older than oldest output 'src/dist/src/index.js'

exitCode:: ExitStatus.Success

getModifiedTime:: {
 "/src/src/index.ts": 1,
 "/src/dist/src/index.js": 1,
 "/src/dist/src/index.d.ts": 2,
 "/src/dist/tsconfig.tsbuildinfo": 1,
 "/src/tsconfig.json": 1
}

setModifiedTime:: {}

fileExists:: {}

directoryExists:: {}




Change:: Normal build without change, that does not block emit on error to show files that get emitted
Input::


Output::
/lib/tsc -p /src/tsconfig.json
exitCode:: ExitStatus.Success

getModifiedTime:: {}

setModifiedTime:: {}

fileExists:: {
 "/src/tsconfig.json": 1
}

directoryExists:: {
 "/src/tsconfig.json": 1,
 "/src/node_modules/@types": 1,
 "/node_modules/@types": 1
}


