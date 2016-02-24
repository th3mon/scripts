@echo off
:: %1 name of current work branch

fe && co develop && git-clear && rbd && co %1 && git-clear && st

