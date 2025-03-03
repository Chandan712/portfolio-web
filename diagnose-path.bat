@echo off
echo Diagnosing PATH and Node.js/npm installation...

REM Print the current PATH
echo Current PATH:
echo %PATH%

REM Check if node is in PATH
where node
if %ERRORLEVEL% NEQ 0 (
    echo Node.js is not in the PATH.
) else (
    echo Node.js is in the PATH.
    "C:\Program Files\nodejs\node.exe" -v
)

REM Check if npm is in PATH
where npm
if %ERRORLEVEL% NEQ 0 (
    echo npm is not in the PATH.
) else (
    echo npm is in the PATH.
    "C:\Program Files\nodejs\npm.cmd" -v
)

pause
