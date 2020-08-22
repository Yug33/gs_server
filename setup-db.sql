create user gs_user with password 'gs_password';
drop database IF EXISTS gs_user;
drop database IF EXISTS gs_user_test;
create database gs_app owner gs_user;
create database gs_test owner gs_user;
