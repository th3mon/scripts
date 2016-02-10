::File: c:\terminal\cmd-scripts\st.cmd
@echo off
:: Zmienna pomocnicza, która ma status czy parametr jest numerem czy nie
SET "var="&for /f "delims=0123456789" %%i in ("%1") do set var=%%i
if defined var (git push --force origin %1) else (git push --force origin ticket/%1)

