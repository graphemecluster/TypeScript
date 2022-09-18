Info 0    [00:00:29.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Info 1    [00:00:30.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/rootfolder/otherfolder/a/b/project/file1.ts"
      },
      "seq": 1,
      "type": "request"
    }
Before request
//// [/user/username/rootfolder/otherfolder/a/b/project/file1.ts]
import a from "file2"

//// [/user/username/rootfolder/otherfolder/a/b/project/file3.ts]
export class c { }

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

//// [/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json]
{"compilerOptions":{"typeRoots":[]}}


PolledWatches::

FsWatches::

FsWatchesRecursive::

Info 2    [00:00:31.000] Search path: /user/username/rootfolder/otherfolder/a/b/project
Info 3    [00:00:32.000] For info: /user/username/rootfolder/otherfolder/a/b/project/file1.ts :: Config file name: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
Info 4    [00:00:33.000] Creating configuration project /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
Info 5    [00:00:34.000] FileWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json 2000 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Config file
Info 6    [00:00:35.000] Config: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json : {
 "rootNames": [
  "/user/username/rootfolder/otherfolder/a/b/project/file1.ts",
  "/user/username/rootfolder/otherfolder/a/b/project/file3.ts"
 ],
 "options": {
  "typeRoots": [],
  "configFilePath": "/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json"
 }
}
Info 7    [00:00:36.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/a/b/project 1 undefined Config: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Wild card directory
Info 8    [00:00:37.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/a/b/project 1 undefined Config: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Wild card directory
Info 9    [00:00:38.000] Plugins were requested but not running in environment that supports 'require'. Nothing will be loaded
Info 10   [00:00:39.000] FileWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/a/b/project/file3.ts 500 undefined WatchType: Closed Script info
Info 11   [00:00:40.000] Starting updateGraphWorker: Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
Info 12   [00:00:41.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 13   [00:00:42.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/a/b/project/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 14   [00:00:43.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/a/b/project/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 15   [00:00:44.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/a/b/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 16   [00:00:45.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/a/b/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 17   [00:00:46.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/a/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 18   [00:00:47.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/a/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 19   [00:00:48.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 20   [00:00:49.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 21   [00:00:50.000] Finishing updateGraphWorker: Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 22   [00:00:51.000] Project '/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json' (Configured)
Info 23   [00:00:52.000] 	Files (3)
	/a/lib/lib.d.ts
	/user/username/rootfolder/otherfolder/a/b/project/file1.ts
	/user/username/rootfolder/otherfolder/a/b/project/file3.ts


	../../../../../../../a/lib/lib.d.ts
	  Default library for target 'es3'
	file1.ts
	  Matched by default include pattern '**/*'
	file3.ts
	  Matched by default include pattern '**/*'

Info 24   [00:00:53.000] -----------------------------------------------
Info 25   [00:00:54.000] Project '/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json' (Configured)
Info 25   [00:00:55.000] 	Files (3)

Info 25   [00:00:56.000] -----------------------------------------------
Info 25   [00:00:57.000] Open files: 
Info 25   [00:00:58.000] 	FileName: /user/username/rootfolder/otherfolder/a/b/project/file1.ts ProjectRootPath: undefined
Info 25   [00:00:59.000] 		Projects: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
After request

PolledWatches::
/user/username/rootfolder/otherfolder/a/b/project/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/a/b/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/a/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/node_modules:
  {"pollingInterval":500}

FsWatches::
/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json:
  {}
/user/username/rootfolder/otherfolder/a/b/project/file3.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/rootfolder/otherfolder/a/b/project:
  {}

Info 25   [00:01:00.000] response:
    {
      "responseRequired": false
    }
Info 26   [00:01:04.000] FileWatcher:: Triggered with /user/username/rootfolder/otherfolder/a/b/project/file3.ts 1:: WatchInfo: /user/username/rootfolder/otherfolder/a/b/project/file3.ts 500 undefined WatchType: Closed Script info
Info 27   [00:01:05.000] Scheduled: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
Info 28   [00:01:06.000] Scheduled: *ensureProjectForOpenFiles*
Info 29   [00:01:07.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/rootfolder/otherfolder/a/b/project/file3.ts 1:: WatchInfo: /user/username/rootfolder/otherfolder/a/b/project/file3.ts 500 undefined WatchType: Closed Script info
Before checking timeout queue length (2) and running
//// [/user/username/rootfolder/otherfolder/a/b/project/file3.ts]
export class c { }export class d {}


PolledWatches::
/user/username/rootfolder/otherfolder/a/b/project/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/a/b/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/a/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/node_modules:
  {"pollingInterval":500}

FsWatches::
/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json:
  {}
/user/username/rootfolder/otherfolder/a/b/project/file3.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/rootfolder/otherfolder/a/b/project:
  {}

Info 30   [00:01:08.000] Running: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
Info 31   [00:01:09.000] Starting updateGraphWorker: Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
Info 32   [00:01:10.000] Finishing updateGraphWorker: Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json Version: 2 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info 33   [00:01:11.000] Different program with same set of files
Info 34   [00:01:12.000] Running: *ensureProjectForOpenFiles*
Info 35   [00:01:13.000] Before ensureProjectForOpenFiles:
Info 36   [00:01:14.000] Project '/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json' (Configured)
Info 36   [00:01:15.000] 	Files (3)

Info 36   [00:01:16.000] -----------------------------------------------
Info 36   [00:01:17.000] Open files: 
Info 36   [00:01:18.000] 	FileName: /user/username/rootfolder/otherfolder/a/b/project/file1.ts ProjectRootPath: undefined
Info 36   [00:01:19.000] 		Projects: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
Info 36   [00:01:20.000] After ensureProjectForOpenFiles:
Info 37   [00:01:21.000] Project '/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json' (Configured)
Info 37   [00:01:22.000] 	Files (3)

Info 37   [00:01:23.000] -----------------------------------------------
Info 37   [00:01:24.000] Open files: 
Info 37   [00:01:25.000] 	FileName: /user/username/rootfolder/otherfolder/a/b/project/file1.ts ProjectRootPath: undefined
Info 37   [00:01:26.000] 		Projects: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
After checking timeout queue length (2) and running

PolledWatches::
/user/username/rootfolder/otherfolder/a/b/project/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/a/b/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/a/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/node_modules:
  {"pollingInterval":500}

FsWatches::
/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json:
  {}
/user/username/rootfolder/otherfolder/a/b/project/file3.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/rootfolder/otherfolder/a/b/project:
  {}

Info 37   [00:01:30.000] DirectoryWatcher:: Triggered with /user/username/rootfolder/otherfolder/a/b/node_modules :: WatchInfo: /user/username/rootfolder/otherfolder/a/b/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 38   [00:01:31.000] Scheduled: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.jsonFailedLookupInvalidation
Info 39   [00:01:32.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/rootfolder/otherfolder/a/b/node_modules :: WatchInfo: /user/username/rootfolder/otherfolder/a/b/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 40   [00:01:33.000] DirectoryWatcher:: Triggered with /user/username/rootfolder/otherfolder/a/b/node_modules :: WatchInfo: /user/username/rootfolder/otherfolder/a/b/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 41   [00:01:34.000] Scheduled: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.jsonFailedLookupInvalidation, Cancelled earlier one
Info 42   [00:01:35.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/rootfolder/otherfolder/a/b/node_modules :: WatchInfo: /user/username/rootfolder/otherfolder/a/b/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 43   [00:01:38.000] DirectoryWatcher:: Triggered with /user/username/rootfolder/otherfolder/a/b/node_modules/file2.d.ts :: WatchInfo: /user/username/rootfolder/otherfolder/a/b/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 44   [00:01:39.000] Scheduled: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.jsonFailedLookupInvalidation, Cancelled earlier one
Info 45   [00:01:40.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/rootfolder/otherfolder/a/b/node_modules/file2.d.ts :: WatchInfo: /user/username/rootfolder/otherfolder/a/b/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Before running timeout callbacks
//// [/user/username/rootfolder/otherfolder/a/b/node_modules/file2.d.ts]
export class a { }


PolledWatches::
/user/username/rootfolder/otherfolder/a/b/project/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/a/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/node_modules:
  {"pollingInterval":500}

FsWatches::
/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json:
  {}
/user/username/rootfolder/otherfolder/a/b/project/file3.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/rootfolder/otherfolder/a/b/project:
  {}
/user/username/rootfolder/otherfolder/a/b/node_modules:
  {}

Info 46   [00:01:41.000] Running: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.jsonFailedLookupInvalidation
Info 47   [00:01:42.000] Scheduled: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
Info 48   [00:01:43.000] Scheduled: *ensureProjectForOpenFiles*
After running timeout callbacks

PolledWatches::
/user/username/rootfolder/otherfolder/a/b/project/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/a/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/node_modules:
  {"pollingInterval":500}

FsWatches::
/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json:
  {}
/user/username/rootfolder/otherfolder/a/b/project/file3.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/rootfolder/otherfolder/a/b/project:
  {}
/user/username/rootfolder/otherfolder/a/b/node_modules:
  {}

Before running timeout callbacks

PolledWatches::
/user/username/rootfolder/otherfolder/a/b/project/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/a/node_modules:
  {"pollingInterval":500}
/user/username/rootfolder/otherfolder/node_modules:
  {"pollingInterval":500}

FsWatches::
/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json:
  {}
/user/username/rootfolder/otherfolder/a/b/project/file3.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/rootfolder/otherfolder/a/b/project:
  {}
/user/username/rootfolder/otherfolder/a/b/node_modules:
  {}

Info 49   [00:01:44.000] Running: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
Info 50   [00:01:45.000] Starting updateGraphWorker: Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
Info 51   [00:01:46.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/a/b/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info 52   [00:01:47.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/rootfolder/otherfolder/a/b/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info 53   [00:01:48.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/rootfolder/otherfolder/a/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 54   [00:01:49.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/rootfolder/otherfolder/a/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 55   [00:01:50.000] DirectoryWatcher:: Close:: WatchInfo: /user/username/rootfolder/otherfolder/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 56   [00:01:51.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /user/username/rootfolder/otherfolder/node_modules 1 undefined Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json WatchType: Failed Lookup Locations
Info 57   [00:01:52.000] Finishing updateGraphWorker: Project: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json Version: 3 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info 58   [00:01:53.000] Project '/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json' (Configured)
Info 59   [00:01:54.000] 	Files (4)
	/a/lib/lib.d.ts
	/user/username/rootfolder/otherfolder/a/b/node_modules/file2.d.ts
	/user/username/rootfolder/otherfolder/a/b/project/file1.ts
	/user/username/rootfolder/otherfolder/a/b/project/file3.ts


	../../../../../../../a/lib/lib.d.ts
	  Default library for target 'es3'
	../node_modules/file2.d.ts
	  Imported via "file2" from file 'file1.ts'
	file1.ts
	  Matched by default include pattern '**/*'
	file3.ts
	  Matched by default include pattern '**/*'

Info 60   [00:01:55.000] -----------------------------------------------
Info 61   [00:01:56.000] Running: *ensureProjectForOpenFiles*
Info 62   [00:01:57.000] Before ensureProjectForOpenFiles:
Info 63   [00:01:58.000] Project '/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json' (Configured)
Info 63   [00:01:59.000] 	Files (4)

Info 63   [00:02:00.000] -----------------------------------------------
Info 63   [00:02:01.000] Open files: 
Info 63   [00:02:02.000] 	FileName: /user/username/rootfolder/otherfolder/a/b/project/file1.ts ProjectRootPath: undefined
Info 63   [00:02:03.000] 		Projects: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
Info 63   [00:02:04.000] After ensureProjectForOpenFiles:
Info 64   [00:02:05.000] Project '/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json' (Configured)
Info 64   [00:02:06.000] 	Files (4)

Info 64   [00:02:07.000] -----------------------------------------------
Info 64   [00:02:08.000] Open files: 
Info 64   [00:02:09.000] 	FileName: /user/username/rootfolder/otherfolder/a/b/project/file1.ts ProjectRootPath: undefined
Info 64   [00:02:10.000] 		Projects: /user/username/rootfolder/otherfolder/a/b/project/tsconfig.json
After running timeout callbacks

PolledWatches::
/user/username/rootfolder/otherfolder/a/b/project/node_modules:
  {"pollingInterval":500}

FsWatches::
/user/username/rootfolder/otherfolder/a/b/project/tsconfig.json:
  {}
/user/username/rootfolder/otherfolder/a/b/project/file3.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::
/user/username/rootfolder/otherfolder/a/b/project:
  {}
/user/username/rootfolder/otherfolder/a/b/node_modules:
  {}
