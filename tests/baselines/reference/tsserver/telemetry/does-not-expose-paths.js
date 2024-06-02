currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/a.ts]


//// [/tsconfig.json]
{
  "compilerOptions": {
    "project": "",
    "outFile": "hunter2.js",
    "outDir": "hunter2",
    "rootDir": "hunter2",
    "baseUrl": "hunter2",
    "rootDirs": [
      "hunter2"
    ],
    "typeRoots": [
      "hunter2"
    ],
    "types": [
      "hunter2"
    ],
    "sourceRoot": "hunter2",
    "mapRoot": "hunter2",
    "jsxFactory": "hunter2",
    "out": "hunter2",
    "reactNamespace": "hunter2",
    "charset": "hunter2",
    "locale": "hunter2",
    "declarationDir": "hunter2",
    "paths": {
      "*": [
        "hunter2"
      ]
    },
    "declaration": true,
    "lib": [
      "es6",
      "dom",
      "hunter2"
    ],
    "checkJs": "hunter2",
    "unknownCompilerOption": "hunter2"
  },
  "files": [
    "/a.ts"
  ]
}


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /a.ts ProjectRootPath: undefined:: Result: /tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tsconfig.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/tsconfig.json",
        "reason": "Creating possible configured project for /a.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /tsconfig.json : {
 "rootNames": [
  "/a.ts"
 ],
 "options": {
  "project": "/",
  "outFile": "/hunter2.js",
  "outDir": "/hunter2",
  "rootDir": "/hunter2",
  "baseUrl": "/hunter2",
  "rootDirs": [
   "/hunter2"
  ],
  "typeRoots": [
   "/hunter2"
  ],
  "types": [
   "hunter2"
  ],
  "sourceRoot": "hunter2",
  "mapRoot": "hunter2",
  "jsxFactory": "hunter2",
  "out": "hunter2",
  "reactNamespace": "hunter2",
  "charset": "hunter2",
  "declarationDir": "/hunter2",
  "paths": {
   "*": [
    "hunter2"
   ]
  },
  "declaration": true,
  "lib": [
   "lib.es2015.d.ts",
   "lib.dom.d.ts"
  ],
  "pathsBasePath": "/",
  "configFilePath": "/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.es2015.d.ts 500 undefined Project: /tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.dom.d.ts 500 undefined Project: /tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/a.ts SVC-1-0 ""


	a.ts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "aace87d7c1572ff43c6978074161b586788b4518c7a9d06c79c03e613b6ce5a3",
          "fileStats": {
            "js": 0,
            "jsSize": 0,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 1,
            "tsSize": 0,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 0,
            "dtsSize": 0,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "project": "",
            "outFile": "",
            "outDir": "",
            "rootDir": "",
            "baseUrl": "",
            "rootDirs": [
              ""
            ],
            "typeRoots": [
              ""
            ],
            "types": [
              ""
            ],
            "sourceRoot": "",
            "mapRoot": "",
            "jsxFactory": "",
            "out": "",
            "reactNamespace": "",
            "charset": "",
            "declarationDir": "",
            "paths": "",
            "declaration": true,
            "lib": [
              "ES2015",
              "DOM"
            ]
          },
          "typeAcquisition": {
            "enable": false,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": true,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "tsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/a.ts",
        "configFile": "/tsconfig.json",
        "diagnostics": [
          {
            "text": "Cannot find type definition file for 'hunter2'.\n  The file is in the program because:\n    Entry point of type library 'hunter2' specified in compilerOptions",
            "code": 2688,
            "category": "error",
            "relatedInformation": [
              {
                "span": {
                  "start": {
                    "line": 15,
                    "offset": 7
                  },
                  "end": {
                    "line": 15,
                    "offset": 16
                  },
                  "file": "/tsconfig.json"
                },
                "message": "File is entry point of type library specified here.",
                "category": "message",
                "code": 1419
              }
            ]
          },
          {
            "text": "File '/a/lib/lib.dom.d.ts' not found.\n  The file is in the program because:\n    Library 'lib.dom.d.ts' specified in compilerOptions",
            "code": 6053,
            "category": "error"
          },
          {
            "text": "File '/a/lib/lib.es2015.d.ts' not found.\n  The file is in the program because:\n    Library 'lib.es2015.d.ts' specified in compilerOptions",
            "code": 6053,
            "category": "error"
          },
          {
            "text": "File '/a.ts' is not under 'rootDir' '/hunter2'. 'rootDir' is expected to contain all source files.\n  The file is in the program because:\n    Part of 'files' list in tsconfig.json",
            "code": 6059,
            "category": "error",
            "relatedInformation": [
              {
                "span": {
                  "start": {
                    "line": 40,
                    "offset": 5
                  },
                  "end": {
                    "line": 40,
                    "offset": 12
                  },
                  "file": "/tsconfig.json"
                },
                "message": "File is matched by 'files' list specified here.",
                "category": "message",
                "code": 1410
              }
            ]
          },
          {
            "start": {
              "line": 4,
              "offset": 5
            },
            "end": {
              "line": 4,
              "offset": 14
            },
            "text": "Option 'declarationDir' cannot be specified with option 'outFile'.",
            "code": 5053,
            "category": "error",
            "fileName": "/tsconfig.json"
          },
          {
            "start": {
              "line": 17,
              "offset": 5
            },
            "end": {
              "line": 17,
              "offset": 17
            },
            "text": "Option 'sourceRoot can only be used when either option '--inlineSourceMap' or option '--sourceMap' is provided.",
            "code": 5051,
            "category": "error",
            "fileName": "/tsconfig.json"
          },
          {
            "start": {
              "line": 18,
              "offset": 5
            },
            "end": {
              "line": 18,
              "offset": 14
            },
            "text": "Option 'mapRoot' cannot be specified without specifying option 'sourceMap' or option 'declarationMap'.",
            "code": 5069,
            "category": "error",
            "fileName": "/tsconfig.json"
          },
          {
            "start": {
              "line": 19,
              "offset": 5
            },
            "end": {
              "line": 19,
              "offset": 17
            },
            "text": "Option 'reactNamespace' cannot be specified with option 'jsxFactory'.",
            "code": 5053,
            "category": "error",
            "fileName": "/tsconfig.json"
          },
          {
            "start": {
              "line": 20,
              "offset": 5
            },
            "end": {
              "line": 20,
              "offset": 10
            },
            "text": "Option 'out' has been removed. Please remove it from your configuration.\n  Use 'outFile' instead.",
            "code": 5102,
            "category": "error",
            "fileName": "/tsconfig.json"
          },
          {
            "start": {
              "line": 21,
              "offset": 5
            },
            "end": {
              "line": 21,
              "offset": 21
            },
            "text": "Option 'reactNamespace' cannot be specified with option 'jsxFactory'.",
            "code": 5053,
            "category": "error",
            "fileName": "/tsconfig.json"
          },
          {
            "start": {
              "line": 22,
              "offset": 5
            },
            "end": {
              "line": 22,
              "offset": 14
            },
            "text": "Option 'charset' has been removed. Please remove it from your configuration.",
            "code": 5102,
            "category": "error",
            "fileName": "/tsconfig.json"
          },
          {
            "start": {
              "line": 24,
              "offset": 5
            },
            "end": {
              "line": 24,
              "offset": 21
            },
            "text": "Option 'declarationDir' cannot be specified with option 'outFile'.",
            "code": 5053,
            "category": "error",
            "fileName": "/tsconfig.json"
          },
          {
            "text": "Cannot find global type 'Array'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Boolean'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Function'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'IArguments'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Number'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Object'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'RegExp'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'String'.",
            "code": 2318,
            "category": "error"
          },
          {
            "start": {
              "line": 23,
              "offset": 5
            },
            "end": {
              "line": 23,
              "offset": 13
            },
            "text": "Option 'locale' can only be specified on command line.",
            "code": 6266,
            "category": "error",
            "fileName": "/tsconfig.json"
          },
          {
            "start": {
              "line": 34,
              "offset": 7
            },
            "end": {
              "line": 34,
              "offset": 16
            },
            "text": "Argument for '--lib' option must be: 'ES5', 'ES2015', 'ES6', 'ES2016', 'ES7', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', 'ES2022', 'ES2023', 'ESNext', 'DOM', 'DOM.Iterable', 'DOM.AsyncIterable', 'WebWorker', 'WebWorker.ImportScripts', 'WebWorker.Iterable', 'WebWorker.AsyncIterable', 'ScriptHost', 'ES2015.Core', 'ES2015.Collection', 'ES2015.Generator', 'ES2015.Iterable', 'ES2015.Promise', 'ES2015.Proxy', 'ES2015.Reflect', 'ES2015.Symbol', 'ES2015.Symbol.WellKnown', 'ES2016.Array.Includes', 'ES2016.Array.Include', 'ES2016.Intl', 'ES2017.Date', 'ES2017.Object', 'ES2017.SharedMemory', 'ES2017.String', 'ES2017.Intl', 'ES2017.TypedArrays', 'ES2017.TypedArray', 'ES2018.AsyncGenerator', 'ES2018.AsyncIterable', 'ES2018.Intl', 'ES2018.Promise', 'ES2018.RegExp', 'ES2019.Array', 'ES2019.Object', 'ES2019.String', 'ES2019.Symbol', 'ES2019.Intl', 'ES2020.BigInt', 'ES2020.Date', 'ES2020.Promise', 'ES2020.SharedMemory', 'ES2020.String', 'ES2020.Symbol.WellKnown', 'ES2020.Intl', 'ES2020.Number', 'ES2021.Promise', 'ES2021.String', 'ES2021.WeakRef', 'ES2021.Intl', 'ES2022.Array', 'ES2022.Error', 'ES2022.Intl', 'ES2022.Object', 'ES2022.SharedMemory', 'ES2022.String', 'ES2022.RegExp', 'ES2023.Array', 'ES2023.Collection', 'ES2023.Intl', 'ESNext.Array', 'ESNext.Collection', 'ESNext.Symbol', 'ESNext.AsyncIterable', 'ESNext.Intl', 'ESNext.Disposable', 'ESNext.BigInt', 'ESNext.String', 'ESNext.Promise', 'ESNext.WeakRef', 'ESNext.Decorators', 'ESNext.Object', 'ESNext.RegExp', 'Decorators', 'Decorators.Legacy'.",
            "code": 6046,
            "category": "error",
            "fileName": "/tsconfig.json"
          },
          {
            "start": {
              "line": 36,
              "offset": 16
            },
            "end": {
              "line": 36,
              "offset": 25
            },
            "text": "Compiler option 'checkJs' requires a value of type boolean.",
            "code": 5024,
            "category": "error",
            "fileName": "/tsconfig.json"
          },
          {
            "start": {
              "line": 37,
              "offset": 5
            },
            "end": {
              "line": 37,
              "offset": 28
            },
            "text": "Unknown compiler option 'unknownCompilerOption'.",
            "code": 5023,
            "category": "error",
            "fileName": "/tsconfig.json"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/lib/lib.dom.d.ts: *new*
  {"pollingInterval":500}
/a/lib/lib.es2015.d.ts: *new*
  {"pollingInterval":500}

FsWatches::
/tsconfig.json: *new*
  {}

Projects::
/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /tsconfig.json *default*
