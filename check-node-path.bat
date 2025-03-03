@echo off
echo Checking Node.js and npm installation...

:: Check if node is in PATH
where node
if %ERRORLEVEL% NEQ 0 (
    echo Node.js is not in the PATH.
) else (
    echo Node.js is in the PATH.
    node -v
)

:: Check if npm is in PATH
where npm
if %ERRORLEVEL% NEQ 0 (
    echo npm is not in the PATH.
) else (
    echo npm is in the PATH.
    npm -v
)

pause
