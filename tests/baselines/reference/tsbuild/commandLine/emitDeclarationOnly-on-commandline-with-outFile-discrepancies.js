4:: no-change-run
Clean build tsbuildinfo for both projects will have compilerOptions with composite and emitDeclarationOnly
Incremental build will detect that it doesnt need to rebuild so tsbuild info for projects is from before which has option composite only
TsBuild info text without affectedFilesPendingEmit:: /src/project1/outfile.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "CommonJS"
      },
      "./src/a.ts": {
        "version": "-6435489413-export const a = 10;const aLocal = 10;const aa = 10;export const aaa = 10;",
        "impliedFormat": "CommonJS"
      },
      "./src/b.ts": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "impliedFormat": "CommonJS"
      },
      "./src/c.ts": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "impliedFormat": "CommonJS"
      },
      "./src/d.ts": {
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "impliedFormat": "CommonJS"
      }
    },
    "root": [
      [
        [
          2,
          5
        ],
        [
          "./src/a.ts",
          "./src/b.ts",
          "./src/c.ts",
          "./src/d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "emitDeclarationOnly": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "outSignature": "106974224-declare module \"a\" {\n    export const a = 10;\n    export const aaa = 10;\n}\ndeclare module \"b\" {\n    export const b = 10;\n}\ndeclare module \"c\" {\n    export const c = 10;\n}\ndeclare module \"d\" {\n    export const d = 10;\n}\n",
    "latestChangedDtsFile": "FakeFileName"
  },
  "version": "FakeTSVersion"
}
IncrementalBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "CommonJS"
      },
      "./src/a.ts": {
        "version": "-6435489413-export const a = 10;const aLocal = 10;const aa = 10;export const aaa = 10;",
        "impliedFormat": "CommonJS"
      },
      "./src/b.ts": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "impliedFormat": "CommonJS"
      },
      "./src/c.ts": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "impliedFormat": "CommonJS"
      },
      "./src/d.ts": {
        "version": "-19615769517-import { b } from \"./b\";export const d = b;",
        "impliedFormat": "CommonJS"
      }
    },
    "root": [
      [
        [
          2,
          5
        ],
        [
          "./src/a.ts",
          "./src/b.ts",
          "./src/c.ts",
          "./src/d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "outSignature": "106974224-declare module \"a\" {\n    export const a = 10;\n    export const aaa = 10;\n}\ndeclare module \"b\" {\n    export const b = 10;\n}\ndeclare module \"c\" {\n    export const c = 10;\n}\ndeclare module \"d\" {\n    export const d = 10;\n}\n",
    "latestChangedDtsFile": "FakeFileName"
  },
  "version": "FakeTSVersion"
}
TsBuild info text without affectedFilesPendingEmit:: /src/project2/outfile.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "CommonJS"
      },
      "../project1/outfile.d.ts": {
        "version": "106974224-declare module \"a\" {\n    export const a = 10;\n    export const aaa = 10;\n}\ndeclare module \"b\" {\n    export const b = 10;\n}\ndeclare module \"c\" {\n    export const c = 10;\n}\ndeclare module \"d\" {\n    export const d = 10;\n}\n",
        "impliedFormat": "CommonJS"
      },
      "./src/e.ts": {
        "version": "-13789510868-export const e = 10;",
        "impliedFormat": "CommonJS"
      },
      "./src/f.ts": {
        "version": "-4849089835-import { a } from \"a\"; export const f = a;",
        "impliedFormat": "CommonJS"
      },
      "./src/g.ts": {
        "version": "-18341999015-import { b } from \"b\"; export const g = b;",
        "impliedFormat": "CommonJS"
      }
    },
    "root": [
      [
        [
          3,
          5
        ],
        [
          "./src/e.ts",
          "./src/f.ts",
          "./src/g.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "emitDeclarationOnly": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "outSignature": "-12964815745-declare module \"e\" {\n    export const e = 10;\n}\ndeclare module \"f\" {\n    export const f = 10;\n}\ndeclare module \"g\" {\n    export const g = 10;\n}\n",
    "latestChangedDtsFile": "FakeFileName"
  },
  "version": "FakeTSVersion"
}
IncrementalBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "CommonJS"
      },
      "../project1/outfile.d.ts": {
        "version": "106974224-declare module \"a\" {\n    export const a = 10;\n    export const aaa = 10;\n}\ndeclare module \"b\" {\n    export const b = 10;\n}\ndeclare module \"c\" {\n    export const c = 10;\n}\ndeclare module \"d\" {\n    export const d = 10;\n}\n",
        "impliedFormat": "CommonJS"
      },
      "./src/e.ts": {
        "version": "-13789510868-export const e = 10;",
        "impliedFormat": "CommonJS"
      },
      "./src/f.ts": {
        "version": "-4849089835-import { a } from \"a\"; export const f = a;",
        "impliedFormat": "CommonJS"
      },
      "./src/g.ts": {
        "version": "-18341999015-import { b } from \"b\"; export const g = b;",
        "impliedFormat": "CommonJS"
      }
    },
    "root": [
      [
        [
          3,
          5
        ],
        [
          "./src/e.ts",
          "./src/f.ts",
          "./src/g.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "outSignature": "-12964815745-declare module \"e\" {\n    export const e = 10;\n}\ndeclare module \"f\" {\n    export const f = 10;\n}\ndeclare module \"g\" {\n    export const g = 10;\n}\n",
    "latestChangedDtsFile": "FakeFileName"
  },
  "version": "FakeTSVersion"
}
6:: local change
Clean build tsbuildinfo for project2 will have compilerOptions with composite and emitDeclarationOnly
Incremental build will detect that it doesnt need to rebuild project2 so tsbuildinfo for it is from before which has option composite only
TsBuild info text without affectedFilesPendingEmit:: /src/project2/outfile.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "CommonJS"
      },
      "../project1/outfile.d.ts": {
        "version": "106974224-declare module \"a\" {\n    export const a = 10;\n    export const aaa = 10;\n}\ndeclare module \"b\" {\n    export const b = 10;\n}\ndeclare module \"c\" {\n    export const c = 10;\n}\ndeclare module \"d\" {\n    export const d = 10;\n}\n",
        "impliedFormat": "CommonJS"
      },
      "./src/e.ts": {
        "version": "-13789510868-export const e = 10;",
        "impliedFormat": "CommonJS"
      },
      "./src/f.ts": {
        "version": "-4849089835-import { a } from \"a\"; export const f = a;",
        "impliedFormat": "CommonJS"
      },
      "./src/g.ts": {
        "version": "-18341999015-import { b } from \"b\"; export const g = b;",
        "impliedFormat": "CommonJS"
      }
    },
    "root": [
      [
        [
          3,
          5
        ],
        [
          "./src/e.ts",
          "./src/f.ts",
          "./src/g.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "emitDeclarationOnly": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "outSignature": "-12964815745-declare module \"e\" {\n    export const e = 10;\n}\ndeclare module \"f\" {\n    export const f = 10;\n}\ndeclare module \"g\" {\n    export const g = 10;\n}\n",
    "latestChangedDtsFile": "FakeFileName"
  },
  "version": "FakeTSVersion"
}
IncrementalBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "impliedFormat": "CommonJS"
      },
      "../project1/outfile.d.ts": {
        "version": "106974224-declare module \"a\" {\n    export const a = 10;\n    export const aaa = 10;\n}\ndeclare module \"b\" {\n    export const b = 10;\n}\ndeclare module \"c\" {\n    export const c = 10;\n}\ndeclare module \"d\" {\n    export const d = 10;\n}\n",
        "impliedFormat": "CommonJS"
      },
      "./src/e.ts": {
        "version": "-13789510868-export const e = 10;",
        "impliedFormat": "CommonJS"
      },
      "./src/f.ts": {
        "version": "-4849089835-import { a } from \"a\"; export const f = a;",
        "impliedFormat": "CommonJS"
      },
      "./src/g.ts": {
        "version": "-18341999015-import { b } from \"b\"; export const g = b;",
        "impliedFormat": "CommonJS"
      }
    },
    "root": [
      [
        [
          3,
          5
        ],
        [
          "./src/e.ts",
          "./src/f.ts",
          "./src/g.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "module": 2,
      "outFile": "./outFile.js"
    },
    "outSignature": "-12964815745-declare module \"e\" {\n    export const e = 10;\n}\ndeclare module \"f\" {\n    export const f = 10;\n}\ndeclare module \"g\" {\n    export const g = 10;\n}\n",
    "latestChangedDtsFile": "FakeFileName"
  },
  "version": "FakeTSVersion"
}