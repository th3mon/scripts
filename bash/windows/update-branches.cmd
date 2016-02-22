@echo off
:: %1 name of release branch
:: %2 name of current work branch

co develop && git-clear && rbd && co %1 && git-clear && rbr && co %2 && git-clear && st

