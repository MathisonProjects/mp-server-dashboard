#!/bin/bash

SITENAME=${1}
URLNAME=${2}

composer install -d=/var/www/html/managed/${SITENAME}/${URLNAME}