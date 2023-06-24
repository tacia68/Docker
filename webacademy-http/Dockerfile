FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get install -y nginx


COPY default /etc/nginx/sites-available/default
COPY index.html /usr/share/nginx/html

EXPOSE 7000

CMD ["/usr/sbin/nginx", "-g" ,"daemon off;"]

#docker run -d --name srvmysql2 -p 3307:3306 -e MYSQL_ROOT_PASSWORD=pass2023 -v /home/ubuntu-docker/webacademy/webacademy-mysql:/var/lib/mysql mysql 


#foi

#docker run -d --name srvmysql4 -p 3309:3306 -e MYSQL_ROOT_PASSWORD=pass2023 -v /home/webacademy/webacademy-node/webacademy-mysql:/var/lib/mysql mysql 
