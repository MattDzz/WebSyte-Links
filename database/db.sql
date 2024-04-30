create database database_links;

use database_links;

create table users(
    id int(11) not null,
    username varchar(16) not null,
    password varchar (60) not null,
    fullname varchar (100) not null
);

ALTER table users
    add primary key (id);

ALTER table users
    modify id int (11) not null auto_increment, auto_increment = 2;

describe users;

-- links table
create table links (
    id int (11) not null,
    title varchar (150) not null,
    url varchar (255) not null,
    description TEXT,
    user_id int(11),
    created_at timestamp not null default current_timestamp,
    constraint fk_user FOREIGN key (user_id) references users(id)
);

ALTER table links
    add primary key (id);


ALTER table links
    modify id int (11) not null auto_increment, auto_increment = 2;

ALTER table links
    change descripcion description TEXT;

    delete from links where id = '4';