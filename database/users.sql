create table users
(
    user_id  varchar(45)  not null
        primary key,
    name     varchar(100) not null,
    email    varchar(100) not null,
    password varchar(100) not null,
    constraint email_UNIQUE
        unique (email)
)


