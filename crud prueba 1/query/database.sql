create database if not exists company;

use company;

create table empleado(
    id int(11) not null primary key auto_increment ,
    nombre varchar(45) default null,
    sallario int(11) default null   
);

insert into employee values (1,'fabricio',200000), (2,'batman',30000)