2:: with declaration should not emit anything
Clean build tsbuildinfo will have compilerOptions with composite and declaration
Incremental build will detect that it doesnt need to rebuild so tsbuild info is from before which has option composite only
TsBuild info text without affectedFilesPendingEmit:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "CommonJS"
      },
      "./a.ts": {
        "version": "-18487752940-export const a = 10;const aLocal = 10;",
        "impliedFormat": "CommonJS"
      },
      "./b.ts": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "impliedFormat": "CommonJS"
      },
      "./c.ts": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "impliedFormat": "CommonJS"
      },
      "./d.ts": {
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
          "./a.ts",
          "./b.ts",
          "./c.ts",
          "./d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
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
        "affectsGlobalScope": true,
        "impliedFormat": "CommonJS"
      },
      "./a.ts": {
        "version": "-18487752940-export const a = 10;const aLocal = 10;",
        "impliedFormat": "CommonJS"
      },
      "./b.ts": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "impliedFormat": "CommonJS"
      },
      "./c.ts": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "impliedFormat": "CommonJS"
      },
      "./d.ts": {
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
          "./a.ts",
          "./b.ts",
          "./c.ts",
          "./d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "latestChangedDtsFile": "FakeFileName"
  },
  "version": "FakeTSVersion"
}
6:: with emitDeclarationOnly should not emit anything
Clean build tsbuildinfo will have compilerOptions with composite and emitDeclarationOnly
Incremental build will detect that it doesnt need to rebuild so tsbuild info is from before which has option composite only
TsBuild info text without affectedFilesPendingEmit:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "CommonJS"
      },
      "./a.ts": {
        "version": "-18487752940-export const a = 10;const aLocal = 10;",
        "impliedFormat": "CommonJS"
      },
      "./b.ts": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "impliedFormat": "CommonJS"
      },
      "./c.ts": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "impliedFormat": "CommonJS"
      },
      "./d.ts": {
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
          "./a.ts",
          "./b.ts",
          "./c.ts",
          "./d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "emitDeclarationOnly": true
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
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
        "affectsGlobalScope": true,
        "impliedFormat": "CommonJS"
      },
      "./a.ts": {
        "version": "-18487752940-export const a = 10;const aLocal = 10;",
        "impliedFormat": "CommonJS"
      },
      "./b.ts": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "impliedFormat": "CommonJS"
      },
      "./c.ts": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "impliedFormat": "CommonJS"
      },
      "./d.ts": {
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
          "./a.ts",
          "./b.ts",
          "./c.ts",
          "./d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "latestChangedDtsFile": "FakeFileName"
  },
  "version": "FakeTSVersion"
}
9:: with declaration should not emit anything
Clean build tsbuildinfo will have compilerOptions with composite and declaration
Incremental build will detect that it doesnt need to rebuild so tsbuild info is from before which has option composite only
TsBuild info text without affectedFilesPendingEmit:: /src/project/tsconfig.tsbuildinfo.readable.baseline.txt::
CleanBuild:
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": "CommonJS"
      },
      "./a.ts": {
        "version": "-17390360476-export const a = 10;const aLocal = 100;",
        "impliedFormat": "CommonJS"
      },
      "./b.ts": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "impliedFormat": "CommonJS"
      },
      "./c.ts": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "impliedFormat": "CommonJS"
      },
      "./d.ts": {
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
          "./a.ts",
          "./b.ts",
          "./c.ts",
          "./d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true,
      "declaration": true
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
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
        "affectsGlobalScope": true,
        "impliedFormat": "CommonJS"
      },
      "./a.ts": {
        "version": "-17390360476-export const a = 10;const aLocal = 100;",
        "impliedFormat": "CommonJS"
      },
      "./b.ts": {
        "version": "-6189287562-export const b = 10;const bLocal = 10;",
        "impliedFormat": "CommonJS"
      },
      "./c.ts": {
        "version": "3248317647-import { a } from \"./a\";export const c = a;",
        "impliedFormat": "CommonJS"
      },
      "./d.ts": {
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
          "./a.ts",
          "./b.ts",
          "./c.ts",
          "./d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {
      "./c.ts": [
        "./a.ts"
      ],
      "./d.ts": [
        "./b.ts"
      ]
    },
    "latestChangedDtsFile": "FakeFileName"
  },
  "version": "FakeTSVersion"
}