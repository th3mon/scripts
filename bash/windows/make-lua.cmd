::https://youtu.be/X5D_h2X8LCk
cl /MD /O2 /c /DLUA_BUILD_AS_DLL *.c
link /DLL /IMPLIB:lua5.3.lib /OUT:lua5.3.dll *.obj
link /OUT:lua.exe lua.o lua5.3.lib
lib /OUT:lua5.3-static.lib *.obj
link /OUT:luac.exe luac.o lua5.3-static.lib
::LUA_DIR = C:\Program Files\Lua\5.3
::LUA_CPATH = ?.dll;%LUA_DIR%\?.dll
::LUA_PATH = ?.lua;%LUA_DIR%\lua\?.lua
