# ubuntu
sudo apt-get install mysql-server
sudo apt-get install mysql-client-8.0

mysql -h mysql.crkdbqcnwjyi.us-east-1.rds.amazonaws.com -P 3306 -u admin -p
use wordpress;
select * from wp_posts;
update wp_posts set post_content =replace(post_content, 'http://ec2-3-83-247-115.compute-1.amazonaws.com','http://wp.match-cloud.com.br');


show databases;
create database xxx;
use xxx;
show tables;
create table tb (id integer);
insert into tb (id) values (4);
select * from tb;
