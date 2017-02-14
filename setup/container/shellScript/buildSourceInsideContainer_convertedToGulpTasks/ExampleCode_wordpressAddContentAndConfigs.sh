#!/bin/bash

source $(dirname -- "$0")/directoryExistAndHasContent.sh

changeAppPermissions(){
    #⭐ Give corrent permissions: 
    # It appears that data in volumes get "staff" as group, and changing permissions needs a workaround.
    chown -R www-data:www-data /app/;
    find /app/ -type f -exec chown -R www-data:www-data {} \;
    find /app/ -type f -exec chmod -R 644 {} \;
    find /app/ -type d -exec chmod -R 755 {} \;
    # https://github.com/boot2docker/boot2docker/issues/587 - change permissions and ownership from docker "staff" to "www-data"
    # There is staff, 1000, www-data groups and users when using volumes. (Should read more about them)
    usermod -u 1000 www-data
}

# ☕
# if ! directoryExistAndHasContent "/etc/apache2/sites-available" || ! directoryExistAndHasContent "/etc/apache2/ssl"; then 
#     # Apache
#     # Apache configs, SSL certificates, apache2.conf
#     mkdir -p /etc/apache2/ssl/; cp -pr /tmp/content/sslCertificate/* /etc/apache2/ssl/
#     cp -p /tmp/distribution/serverSide/apacheServer/apache2.conf /etc/apache2/
#     cp -pr /tmp/distribution/serverSide/apacheServer/virtualHostsConfigurations/* /etc/apache2/sites-available/
#     a2ensite configurationsLoader.conf;
#     # Reloading apache2 causes all subsequent commands to be ignored, as it stops the container and restarts.
#     # service apache2 reload;
# else echo 'SZN - Skipping Apache.';
# fi

# ☕ php.ini
# if [[ ! -f "/usr/local/etc/php/php.ini" ]]; then     
#     if [ "$DEPLOYMENT" = "development" ]; then
#         ln -s /tmp/distribution/serverSide/phpConfiguration/php.ini /usr/local/etc/php/
#     elif [ "$DEPLOYMENT" = "production" ]; then 
#         cp -p /tmp/distribution/serverSide/phpConfiguration/php.ini /usr/local/etc/php/
#     fi  
# else echo 'SZN - Skipping php.ini .';
# fi

# ☕ Wordpress Config 
# if ! directoryExistAndHasContent "/app/wordpressConfiguration/"; then 
#     if [ "$DEPLOYMENT" = "development" ]; then
#             mkdir -p /app/wordpressConfiguration/; ln -s /tmp/content/wordpressConfiguration/* /app/wordpressConfiguration/
#     elif [ "$DEPLOYMENT" = "production" ]; then 
#             mkdir -p /app/wordpressConfiguration/; cp -pr /tmp/content/wordpressConfiguration/* /app/wordpressConfiguration/
#     fi
# else echo 'SZN - Skipping wordpressConfiguration.';
# fi

# if ! directoryExistAndHasContent "/app/root/"; then 
#     # # ☕ Copy content to desired destination:
#     # # Root
#     # # Directory must not exist (in order to copy hidden files).
#     # # mkdir -p /app/root/; 
#     # cp -pr /tmp/distribution/clientSide/root/ /app/root/
#     # # SZN COMPATIBILITY - changing "app" to "assets" throws an error 500 in "/mcq" page. (if folder doesn't exist, its created and teh contents of the source are copied into it)
#     # mkdir -p /app/root/app/; cp -pr /tmp/distribution/clientSide/assets/* /app/root/app/
#     # # wp-content
#     # mkdir -p /app/root/content/; # cp -pr /tmp/content/wp-content/* /app/root/content/
#     # # Must-Use Plugins
#     # mkdir -p /app/root/content/mu-plugins; cp -pr /tmp/distribution/serverSide/wordpressPlugins_mustUsePlugins/* /app/root/content/mu-plugins/
#     # # Automatically updated plugins
#     # mkdir -p /app/root/content/plugins/; cp -pr /tmp/distribution/serverSide/wordpressPlugins_composer_dependencyManager/plugins/* /app/root/content/plugins/
#     # # Uploads
#     # mkdir -p /app/root/content/uploads; cp -pr /tmp/content/wordpressUploads/* /app/root/content/uploads/
#     # # Routing
#     # mkdir -p /app/root/content/themes/routing/; cp -pr /tmp/distribution/clientSide/routing/* /app/root/content/themes/routing/
#     # # Plugins Manaually updated
#     # mkdir -p /app/root/content/plugins/; cp -pr /tmp/content/wordpressPlugins_manuallyUpdated/* /app/root/content/plugins/
    
#     # # JSPM move to desired location: 
#     # mkdir -p /app/root/app/sharedApp/javascripts/jspm_packages/;
#     # cp -pr /tmp/distribution/clientSide/jspm_packages_modules/jspm_packages/* /app/root/app/sharedApp/javascripts/jspm_packages/
    
#     # # Bower 
#     # mkdir -p /app/root/app/sharedApp/elements/bower_components/; 
#     # cp -pr /tmp/distribution/clientSide/bower_packageManager/bower_components/* /app/root/app/sharedApp/elements/bower_components/

#     # # "mv" to volume doesn't work !!! BECAUSE IT IS A VOLUME, WHICH I CANNOT CONTROL. RUN cp -pr /var/www/html/* /app/root/site/;

#     # changeAppPermissions;
# else echo 'SZN - Skipping /app/root folder.';
# fi


# if [[ "$(ls -A '/app/root')" ]] || [[ "$(ls -A '/app/wordpressConfiguration')" ]]; then
#     echo "SZN - folders not empty. Preventing recopying to volumes."
# else
#     echo "SZN - folders are empty"

#     set -ex; 
    
# fi


