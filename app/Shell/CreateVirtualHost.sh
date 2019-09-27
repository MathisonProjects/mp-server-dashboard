#!/bin/bash

SITENAME=${1}
URLNAME=${2}
PORTNUM=${3}

SetDocRoot()
{
	echo "	DocumentRoot /var/www/html/managed/${SITENAME}/${URLNAME}/public" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	ErrorLog /var/www/html/managed/${SITENAME}/${URLNAME}/storage/logs/apache-log.error.log" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	CustomLog /var/www/html/managed/${SITENAME}/${URLNAME}/storage/logs/apache-log.access.log combined" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	<Directory /var/www/html/managed/${SITENAME}/${URLNAME}/public>" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	    Options Indexes FollowSymLinks" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	    AllowOverride All" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	    Require all granted" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	</Directory>" >> /etc/apache2/sites-available/${URLNAME}.conf
}

echo 'Creating Virtualhost...'

echo > /etc/apache2/sites-available/${URLNAME}.conf

echo "<VirtualHost *:80>" >> /etc/apache2/sites-available/${URLNAME}.conf
echo "	ServerName ${SITENAME}" >> /etc/apache2/sites-available/${URLNAME}.conf
echo "	ServerAdmin jacob@mathisonprojects.com" >> /etc/apache2/sites-available/${URLNAME}.conf

if [ "$VHOSTTYPE" == 0 ]; then # Laravel Only
	SetDocRoot

elif [ "$VHOSTTYPE" == 1 ]; then # Laravel + NodeJs
	SetDocRoot

	echo "	RewriteEngine On" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	RewriteCond %{QUERY_STRING} transport=polling       [NC]" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	RewriteRule /socket.io/(.*)           http://localhost:${3}/socket.io/$1 [P]" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	RewriteCond %{HTTP:Upgrade} websocket               [NC]" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	RewriteRule /(.*)           ws://localhost:${3}/$1  [P]" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	ProxyRequests Off" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	ProxyPass /socket.io/ http://localhost:${3}/socket.io/" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "	ProxyPassReverse /socket.io/ http://localhost:${3}/socket.io/" >> /etc/apache2/sites-available/${URLNAME}.conf

elif [ "$VHOSTTYPE" == 2 ]; then # VueJs Only
	echo "DocumentRoot /var/www/html/managed/${SITENAME}/${URLNAME}/dist/public" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "ErrorLog /var/log/apache2/sites/error/${URLNAME}-error.log" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "CustomLog /var/log/apache2/sites/access/${URLNAME}-access.log combined" >> /etc/apache2/sites-available/${URLNAME}.conf
elif [ "$VHOSTTYPE" == 3 ]; then # VueJs + NodeJs
	# Needs exploration
elif [ "$VHOSTTYPE" == 4 ]; then # NodeJs Only
	echo "        DocumentRoot /var/www/html/managed/${SITENAME}/${URLNAME}" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "        ErrorLog /var/log/apache2/sites/error/${URLNAME}-error.log" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "        CustomLog /var/log/apache2/sites/access/${URLNAME}-access.log combined" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "        ProxyRequests Off" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "        ProxyPreserveHost On" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "        ProxyPass / http://localhost:${3}/" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "        ProxyPassReverse / http://localhost:${3}/" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "        RewriteEngine On" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "        RewriteCond %{REQUEST_URI}  ^/socket.io            [NC]" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "        RewriteCond %{QUERY_STRING} transport=websocket    [NC]" >> /etc/apache2/sites-available/${URLNAME}.conf
	echo "        RewriteRule /(.*)           ws://localhost:${3}/$1 [P,L]" >> /etc/apache2/sites-available/${URLNAME}.conf
fi


echo "</VirtualHost>" >> /etc/apache2/sites-available/${URLNAME}.conf

# Makes Site Enabled
ln -s /etc/apache2/sites-available/$1.conf /etc/apache2/sites-enabled/$1.conf

echo 'Virtualhost Set...'