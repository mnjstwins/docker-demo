# Docker Version 1.10.2
# ArchLinux base container
FROM pritunl/archlinux

# install git and nginx
RUN pacman -S sudo git nginx --noconfirm

# copy over source
ADD dist/* /srv/http/docker-demo
RUN chown -R http:http /srv/http

# copy over nginx.conf
RUN rm /etc/nginx/nginx.conf
ADD nginx.conf /etc/nginx/nginx.conf

# create container by running the nginx executable
CMD /usr/bin/nginx
