"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8988],{31482:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new TaskQueue.","params":[{"name":"onFlush","desc":"","lua_type":"({T}) -> nil"}],"returns":[{"desc":"","lua_type":"TaskQueue<T>"}],"function_type":"static","source":{"line":41,"path":"modules/task-queue/init.lua"}},{"name":"Add","desc":"Add an object to the queue.","params":[{"name":"object","desc":"","lua_type":"T"}],"returns":[],"function_type":"method","source":{"line":55,"path":"modules/task-queue/init.lua"}},{"name":"Clear","desc":"Clears the TaskQueue. This will clear any tasks\\nthat were scheduled to be flushed on the current\\nexecution frame.\\n\\n```lua\\nqueue:Add(something1)\\nqueue:Add(something2)\\nqueue:Clear()\\n```","params":[],"returns":[],"function_type":"method","source":{"line":84,"path":"modules/task-queue/init.lua"}},{"name":"Destroy","desc":"Destroys the TaskQueue. Just an alias for `Clear()`.","params":[],"returns":[],"function_type":"method","source":{"line":94,"path":"modules/task-queue/init.lua"}}],"properties":[],"types":[],"name":"TaskQueue","desc":"A queue that flushes all objects at the end of the current\\nexecution step. This works by scheduling all tasks with\\n`task.defer`.\\n\\nA possible use-case is to batch all requests being sent through\\na RemoteEvent to help prevent calling it too many times on\\nthe same frame.\\n\\n```lua\\nlocal bulletQueue = TaskQueue.new(function(bullets)\\n\\tbulletRemoteEvent:FireAllClients(bullets)\\nend)\\n\\n-- Add 3 bullets. Because they\'re all added on the same\\n-- execution step, they will all be grouped together on\\n-- the next queue flush, which the above function will\\n-- handle.\\nbulletQueue:Add(someBullet)\\nbulletQueue:Add(someBullet)\\nbulletQueue:Add(someBullet)\\n```","source":{"line":32,"path":"modules/task-queue/init.lua"}}')}}]);