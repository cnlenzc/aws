# ubuntu
sudo apt-get install mysql-server
sudo apt-get install mysql-client-8.0

mysql -h mysql.crkdbqcnwjyi.us-east-1.rds.amazonaws.com -P 3306 -u admin -p

show databases;
create database xxx;
use xxx;
show tables;
create table tb (id integer);
insert into tb (id) values (4);
select * from tb;
