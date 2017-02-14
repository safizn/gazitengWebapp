#!/bin/bash

# ⭐ Copy Wordpress from downloaded directory. Change Wordpress default directory. $_ = last argument passed to last command. Copy from downloaded wordpress (forked from official docker image - https://github.com/docker-library/wordpress/blob/master/docker-entrypoint.sh)
mkdir -p /app/root/site;
tar cf - --one-file-system -C /usr/src/wordpress . | tar xf - -C /app/root/site;
rm -r /usr/src/wordpress;
