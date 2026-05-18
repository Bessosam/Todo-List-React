@echo off
title Aether Tasks - Launcher
echo ========================================================
echo               ⚡ AETHER TASKS LAUNCHER ⚡
echo ========================================================
echo.
echo [1/2] Installing package dependencies...
echo.
call npm install
if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] npm install failed. Please make sure Node.js is installed on your PC.
    pause
    exit /b %ERRORLEVEL%
)
echo.
echo [2/2] Launching React Development Server...
echo.
call npm run dev
pause
