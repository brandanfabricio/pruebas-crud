create datadase crudnodejsmsql;


create table customer(

    id int(6) usigned auto_increment primary key,
    name varchar(50) not null,
    address varchar(100) not null,
    phone varchar(15)

)