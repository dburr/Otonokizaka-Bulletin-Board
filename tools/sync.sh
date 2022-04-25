#!/bin/sh
# -a
exec rsync -vh ./ dburr@borg-cube.com:/var/www/calendar.llsif.net/public_html --no-perms -O --exclude '.git' --exclude 'tools' --delete --recursive --dirs