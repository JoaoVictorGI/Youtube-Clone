create table videos
(
    video_id      varchar(45)  not null
        primary key,
    title         varchar(100) not null,
    description   varchar(100) null,
    users_user_id varchar(45)  not null,
    constraint videos_users_user_id_fk
        foreign key (users_user_id) references users (user_id)
)
