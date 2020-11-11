DROP DATABASE IF EXISTS notable;

CREATE DATABASE notable;

USE notable;

CREATE TABLE physicians(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100),
  last_name VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE patients(
  id INT NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(200),
  time_stamp VARCHAR(50),
  kind VARCHAR(100),
  doctorId INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(doctorId) REFERENCES physicians(id)
);

INSERT INTO physicians(first_name, last_name) VALUES ('Julius', 'Hibbert');
INSERT INTO physicians(first_name, last_name) VALUES ('Algernop', 'Krieger');
INSERT INTO physicians(first_name, last_name) VALUES ('Nick', 'Riviera');

INSERT INTO patients(full_name, time_stamp, kind, doctorId) VALUES ('Sterling Archer', '8:00AM', 'New Patient', 1);
INSERT INTO patients(full_name, time_stamp, kind, doctorId) VALUES ('Cyril Figis', '8:30AM', 'Follow-up', 1);
INSERT INTO patients(full_name, time_stamp, kind, doctorId) VALUES ('Ray Gilette', '9:00AM', 'Follow-up', 1);
INSERT INTO patients(full_name, time_stamp, kind, doctorId) VALUES ('Lana Kane', '9:30AM', 'New Patient', 1);
INSERT INTO patients(full_name, time_stamp, kind, doctorId) VALUES ('Pam Poovey', '10:00AM', 'New Patient', 1);

INSERT INTO patients(full_name, time_stamp, kind, doctorId) VALUES ('J Z', '8:00AM', 'New Patient', 2);
INSERT INTO patients(full_name, time_stamp, kind, doctorId) VALUES ('Beyonce', '8:30AM', 'Follow-up', 2);
INSERT INTO patients(full_name, time_stamp, kind, doctorId) VALUES ('Ronald McDonald', '9:00AM', 'Follow-up', 2);

INSERT INTO patients(full_name, time_stamp, kind, doctorId) VALUES ('Sonic', '8:00AM', 'New Patient', 3);