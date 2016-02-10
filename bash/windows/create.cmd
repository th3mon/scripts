@echo off
:: Zmienna pomocnicza, która ma status czy parametr jest numerem czy nie
SET "var="&for /f "delims=0123456789" %%i in ("%1") do set var=%%i
if defined var (git checkout -b %1 origin/develop) else (git checkout -b ticket/%1 origin/develop)

