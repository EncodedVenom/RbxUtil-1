"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9833],{31800:function(e){e.exports=JSON.parse('{"functions":[],"properties":[{"name":"Changed","desc":"Fired when the preferred InputType changes.","lua_type":"Signal<InputType>","tags":["Event"],"source":{"line":58,"path":"modules/input/PreferredInput.lua"}},{"name":"InputType","desc":"A table containing the InputType enum, e.g. `Preferred.InputType.Gamepad`.","lua_type":"InputType","tags":["Enums"],"readonly":true,"source":{"line":65,"path":"modules/input/PreferredInput.lua"}},{"name":"Current","desc":"The current preferred InputType.","lua_type":"InputType","readonly":true,"source":{"line":71,"path":"modules/input/PreferredInput.lua"}}],"types":[{"name":"InputType","desc":"","fields":[{"name":"MouseKeyboard","lua_type":"\\"MouseKeyboard\\"","desc":"Prefer mouse and keyboard input"},{"name":"Touch","lua_type":"\\"MouseKeyboard\\"","desc":"Prefer touch input"},{"name":"Gamepad","lua_type":"\\"Gamepad\\"","desc":"Prefer gamepad input"}],"tags":["Enum"],"source":{"line":52,"path":"modules/input/PreferredInput.lua"}}],"name":"PreferredInput","desc":"A helper library for observing the preferred user input of the\\nplayer. This is useful for determining what input schemes\\nto use during gameplay. A player might switch from using\\na mouse to a gamepad mid-game, and it is important for the\\ngame to respond to this change.\\n\\nThe Preferred class is part of the Input package.\\n\\n```lua\\nlocal Preferred = require(packages.Input).Preferred\\n```","realm":["Client"],"source":{"line":42,"path":"modules/input/PreferredInput.lua"}}')}}]);