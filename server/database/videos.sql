create table if not exists videos
(
    video_id      varchar(45)  not null
        primary key,
    title         varchar(100) not null,
    description   varchar(100) null,
    user_id varchar(45)  not null,
    constraint videos_user_id_fk
        foreign key (user_id) references users (user_id)
)
