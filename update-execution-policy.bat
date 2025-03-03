@echo off
echo Updating PowerShell execution policy to allow scripts to run...

REM Update execution policy
powershell -command "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force"

echo PowerShell execution policy has been updated. You can now run npm commands.
pause
