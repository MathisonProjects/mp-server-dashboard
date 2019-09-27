#!/bin/bash

GITREPO=${1}
SITENAME=${2}
URLNAME=${3}

echo 'Cloning repos...'
git clone ${GITREPO} /var/www/html/managed/${SITENAME}/${URLNAME}
echo 'Repos cloned...'