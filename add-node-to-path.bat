@echo off
echo Adding Node.js to PATH...

REM Set the path to the Node.js installation directory
SET NODEJS_PATH=C:\Program Files\nodejs

REM Add Node.js to PATH for the current session
SET PATH=%NODEJS_PATH%;%PATH%

REM Verify Node.js and npm installation
echo Verifying Node.js and npm installation...
node -v
npm -v

pause
