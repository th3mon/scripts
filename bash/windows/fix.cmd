:: %1 - id of fixing commit
:: %2 - id of commit from which you want do rebase
@echo off
git commit --fixup %1
::if [%2]==[] goto :eof
git rebase -i --autosquash
