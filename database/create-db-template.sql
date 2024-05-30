create database sports;
show databases;
use employees
;
create table employee(E_Id int AUTO_INCREMENT PRIMARY KEY, E_Name varchar(50), E_Age int, E_Salary int , E_Gender varchar(50));
insert into employee values
    (1, 'Ahmad', 35, 30000, 'M');

select * from employee;
delete from employee where E_Age IS NULL;
drop table employee;

