@echo off
:: Zmienna pomocnicza, która ma status czy parametr jest numerem czy nie
SET "var="&for /f "delims=0123456789" %%i in ("%1") do set var=%%i
if defined var (git checkout %1 origin/%1) else (git checkout ticket/%1 origin/ticket/%1)

