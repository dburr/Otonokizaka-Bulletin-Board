#!/bin/sh
# -a
#exec rsync -vPh ./ dburr@borg-cube.com:/var/www/calendar.llsif.net/public_html/ --no-perms --exclude '.git' --exclude 'tools' --delete --recursive --dirs
exec rsync \
  -avh --delete --no-perms \
  --exclude '.git' \
  --exclude 'tools' \
  ./ dburr@borg-cube.com:/var/www/calendar.llsif.net/public_html/ 2>/dev/null
