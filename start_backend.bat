@echo off
title Backend Server (Port 5002)
cd /d "%~dp0backend"
echo Menjalankan Backend Server...
npm run dev
pause
