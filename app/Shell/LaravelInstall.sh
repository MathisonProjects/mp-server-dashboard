#!/bin/bash

SITENAME=${1}
URLNAME=${2}

cp /var/www/html/managed/${SITENAME}/${URLNAME}/.env.example /var/www/html/managed/${SITENAME}/${URLNAME}/.env

composer install -d /var/www/html/managed/${SITENAME}/${URLNAME}

chmod -R 755 /var/www/html/managed/${SITENAME}/${URLNAME}
chmod -R 777 /var/www/html/managed/${SITENAME}/${URLNAME}/bootstrap/ /var/www/html/managed/${SITENAME}/${URLNAME}/storage/
setfacl -m "u:root:rwx" /var/www/html/managed/${SITENAME}/${URLNAME}/storage/


php /var/www/html/managed/${SITENAME}/${URLNAME}/artisan key:generate --path=/var/www/html/managed/${SITENAME}/${URLNAME}