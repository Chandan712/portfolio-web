@echo off
echo Adding Node.js to system PATH...

REM Set the path to the Node.js installation directory
SET NODEJS_PATH=C:\Program Files\nodejs

REM Get the current system PATH
FOR /F "tokens=*" %%i IN ('powershell -command "[System.Environment]::GetEnvironmentVariable('Path', 'Machine')"') DO SET CURRENT_PATH=%%i

REM Add Node.js to system PATH if it's not already present
echo %CURRENT_PATH% | findstr /C:"%NODEJS_PATH%" >nul
if %ERRORLEVEL% NEQ 0 (
    setx /M PATH "%CURRENT_PATH%;%NODEJS_PATH%"
    echo Node.js has been added to the system PATH.
) else (
    echo Node.js is already in the system PATH.
)

REM Force refresh of environment variables
powershell -command "[System.Environment]::SetEnvironmentVariable('Path', [System.Environment]::GetEnvironmentVariable('Path', 'Machine'), 'Machine')"

echo Please restart your computer to apply the changes.

pause
