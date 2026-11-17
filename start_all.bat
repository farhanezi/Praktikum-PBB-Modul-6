@echo off
title Start All Services - Modul 6 PPB
echo Menjalankan Backend, Sensor Simulator, dan Expo App...
start "Backend" cmd /k "%~dp0start_backend.bat"
timeout /t 3 /nobreak >nul
start "Sensor Simulator" cmd /k "%~dp0start_simulator.bat"
start "Expo App" cmd /k "%~dp0start_app.bat"
echo Semua service telah dibuka pada terminal masing-masing.
pause
