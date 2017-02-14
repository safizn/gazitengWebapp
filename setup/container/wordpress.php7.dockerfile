# Forked from https://github.com/docker-library/wordpress/tree/master/php7.0/apache
FROM php:7.0-apache

# PHP Extensions - install the PHP extensions we need
RUN set -ex; \
	\
	apt-get update; \
	apt-get install -y \
		libjpeg-dev \
		libpng12-dev \
	; \
	rm -rf /var/lib/apt/lists/*; \
	\
	docker-php-ext-configure gd --with-png-dir=/usr --with-jpeg-dir=/usr; \
	docker-php-ext-install gd mysqli opcache
# TODO consider removing the *-dev deps and only keeping the necessary lib* packages

# PHP.ini - set recommended PHP.ini settings
# see https://secure.php.net/manual/en/opcache.installation.php
RUN { \
		echo 'opcache.memory_consumption=128'; \
		echo 'opcache.interned_strings_buffer=8'; \
		echo 'opcache.max_accelerated_files=4000'; \
		echo 'opcache.revalidate_freq=2'; \
		echo 'opcache.fast_shutdown=1'; \
		echo 'opcache.enable_cli=1'; \
	} > /usr/local/etc/php/conf.d/opcache-recommended.ini

# Apache
# RUN apt-get install libapache2-mod-macro;
# Apache mods to enable: Reverse proxy, macro, ssl, vhost_alias
RUN a2enmod rewrite expires xml2enc proxy proxy_ajp proxy_http deflate headers proxy_balancer proxy_connect proxy_html macro ssl vhost_alias headers;

# Environment Variables
ENV WORDPRESS_VERSION 4.7
ENV WORDPRESS_SHA1 1e14144c4db71421dc4ed22f94c3914dfc3b7020

# Wordpress download:
RUN set -ex; \
	curl -o wordpress.tar.gz -fSL "https://wordpress.org/wordpress-${WORDPRESS_VERSION}.tar.gz"; \
	echo "$WORDPRESS_SHA1 *wordpress.tar.gz" | sha1sum -c -; \
	# upstream tarballs include ./wordpress/ so this gives us /usr/src/wordpress
	tar -xzf wordpress.tar.gz -C /usr/src/; \
	rm wordpress.tar.gz; \
	chown -R www-data:www-data /usr/src/wordpress

# update and install essentials:
RUN apt-get -y update && apt-get -y upgrade && apt-get -y install vim;
RUN apt-get -y install nano

# Volumes:
VOLUME /app/
VOLUME /etc/apache2/sites-available/

# Apache enable sites configuration and remove default.
RUN rm -r /etc/apache2/sites-enabled/*;

# Copy content to container:
COPY ./content/ /tmp/content/

COPY ./setup/container/shellScript/wordpressContainer.entrypoint.sh /usr/local/bin/
COPY ./setup/container/shellScript/addContentAndConfigs.sh /usr/local/bin/
# Apparently when copied from windows, execution permissions should be granted.
RUN chmod +x /usr/local/bin/wordpressContainer.entrypoint.sh
RUN chmod +x /usr/local/bin/addContentAndConfigs.sh

# RUN echo 'ServerName localhost' >> /etc/apache2/conf-available/000-default.conf

ENTRYPOINT ["wordpressContainer.entrypoint.sh"]
CMD ["apache2-foreground"]
