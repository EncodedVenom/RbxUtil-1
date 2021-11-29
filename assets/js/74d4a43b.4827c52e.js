"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3292],{98147:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a new timer.","params":[{"name":"interval","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Timer"}],"function_type":"static","source":{"line":67,"path":"modules/timer/init.lua"}},{"name":"Simple","desc":"Creates a simplified timer which just fires off a callback function at the given interval.","params":[{"name":"interval","desc":"","lua_type":"number"},{"name":"callback","desc":"","lua_type":"() -> nil"},{"name":"startNow","desc":"","lua_type":"boolean?"},{"name":"updateSignal","desc":"","lua_type":"RBXScriptSignal? | Signal?"},{"name":"timeFunc","desc":"","lua_type":"() -> number"}],"returns":[{"desc":"","lua_type":"RBXScriptConnection"}],"function_type":"static","source":{"line":91,"path":"modules/timer/init.lua"}},{"name":"Is","desc":"Returns `true` if the given object is a Timer.","params":[{"name":"obj","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":114,"path":"modules/timer/init.lua"}},{"name":"Start","desc":"Starts the timer.","params":[],"returns":[],"function_type":"method","source":{"line":152,"path":"modules/timer/init.lua"}},{"name":"StartNow","desc":"Starts the timer and fires off the Tick event immediately.","params":[],"returns":[],"function_type":"method","source":{"line":165,"path":"modules/timer/init.lua"}},{"name":"Stop","desc":"Stops the timer.","params":[],"returns":[],"function_type":"method","source":{"line":175,"path":"modules/timer/init.lua"}},{"name":"Destroy","desc":"Destroys the timer.","params":[],"returns":[],"function_type":"method","source":{"line":185,"path":"modules/timer/init.lua"}}],"properties":[{"name":"Interval","desc":"Interval at which the `Tick` event fires.","lua_type":"number","source":{"line":36,"path":"modules/timer/init.lua"}},{"name":"UpdateSignal","desc":"The signal which updates the timer internally.","lua_type":"RBXScriptSignal | Signal","source":{"line":41,"path":"modules/timer/init.lua"}},{"name":"TimeFunction","desc":"The function which gets the current time.","lua_type":"() -> number","source":{"line":46,"path":"modules/timer/init.lua"}},{"name":"AllowDrift","desc":"Flag which indicates if the timer is allowed to drift. This\\nis set to `true` by default. This flag must be set before\\ncalling `Start` or `StartNow`. This flag should only be set\\nto `false` if it is necessary for drift to be eliminated.","lua_type":"boolean","source":{"line":54,"path":"modules/timer/init.lua"}},{"name":"Tick","desc":"The event which is fired every time the timer hits its interval.","lua_type":"RBXScriptSignal | Signal","source":{"line":59,"path":"modules/timer/init.lua"}}],"types":[],"name":"Timer","desc":"The Timer class allows for code to run periodically at specified intervals.\\n\\n```lua\\nlocal timer = Timer.new(2)\\ntimer.Tick:Connect(function()\\n\\tprint(\\"Tock\\")\\nend)\\ntimer:Start()\\n```","source":{"line":27,"path":"modules/timer/init.lua"}}')}}]);