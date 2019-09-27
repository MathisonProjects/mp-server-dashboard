#!/bin/bash

GITNEWREPO=${1}
SITEDIR=${2}

# Removes previous git information
rm -rf ${SITEDIR}/.git

echo "# ${GITNEWREPO}" >> ${SITEDIR}/README.md

git init
git add README.md
git commit -m "Mathison Projects - first init"
git remote add origin ${GITNEWREPO}
git push -u origin master