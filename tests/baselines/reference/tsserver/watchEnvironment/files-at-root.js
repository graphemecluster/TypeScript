Provided types map file "/typesMap.json" doesn't exist
Search path: c:/project
For info: c:/project/file1.ts :: Config file name: c:/project/tsconfig.json
Creating configuration project c:/project/tsconfig.json
FileWatcher:: Added:: WatchInfo: c:/project/tsconfig.json 2000 undefined Project: c:/project/tsconfig.json WatchType: Config file
Config: c:/project/tsconfig.json : {
 "rootNames": [
  "c:/project/file1.ts",
  "c:/project/file2.ts"
 ],
 "options": {
  "configFilePath": "c:/project/tsconfig.json"
 }
}
DirectoryWatcher:: Added:: WatchInfo: c:/project 1 undefined Config: c:/project/tsconfig.json WatchType: Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: c:/project 1 undefined Config: c:/project/tsconfig.json WatchType: Wild card directory
Plugins were requested but not running in environment that supports 'require'. Nothing will be loaded
FileWatcher:: Added:: WatchInfo: c:/project/file2.ts 500 undefined WatchType: Closed Script info
Starting updateGraphWorker: Project: c:/project/tsconfig.json
FileWatcher:: Added:: WatchInfo: c:/a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
DirectoryWatcher:: Added:: WatchInfo: c:/project/node_modules/@types 1 undefined Project: c:/project/tsconfig.json WatchType: Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: c:/project/node_modules/@types 1 undefined Project: c:/project/tsconfig.json WatchType: Type roots
Finishing updateGraphWorker: Project: c:/project/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Project 'c:/project/tsconfig.json' (Configured)
	Files (3)
	c:/a/lib/lib.d.ts
	c:/project/file1.ts
	c:/project/file2.ts


	../a/lib/lib.d.ts
	  Default library for target 'es3'
	file1.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'
	file2.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'

-----------------------------------------------
Project 'c:/project/tsconfig.json' (Configured)
	Files (3)

-----------------------------------------------
Open files: 
	FileName: c:/project/file1.ts ProjectRootPath: undefined
		Projects: c:/project/tsconfig.json
WatchedFiles::
c:/project/tsconfig.json:
  {"fileName":"c:/project/tsconfig.json","pollingInterval":250}
c:/project/file2.ts:
  {"fileName":"c:/project/file2.ts","pollingInterval":250}
c:/a/lib/lib.d.ts:
  {"fileName":"c:/a/lib/lib.d.ts","pollingInterval":250}
c:/project/node_modules/@types:
  {"fileName":"c:/project/node_modules/@types","pollingInterval":500}

FsWatches::

FsWatchesRecursive::
c:/project:
  {"directoryName":"c:/project"}
