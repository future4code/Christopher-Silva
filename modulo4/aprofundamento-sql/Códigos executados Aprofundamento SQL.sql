CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Carla Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary,birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Cláudio Afonso",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

SELECT * FROM Actor;
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";
SELECT * from Actor WHERE gender = "female";
SELECT salary from Actor WHERE name = "Tony Ramos";
SELECT * from Actor WHERE gender = "invalid";
SELECT id, name from Actor WHERE salary > 500000;
SELECT id, name from Actor WHERE id = "002";
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
SELECT * FROM Actor
WHERE name NOT LIKE "A%"  AND salary > 350000;
SELECT * FROM Actor
WHERE name LIKE "%A%" OR name LIKE "%a%";
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") 
AND  (salary BETWEEN 350000 AND 900000
);

CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, name, sinopse, release_Date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  "7"
);

INSERT INTO Movie (id, name, sinopse, release_Date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  "10"
);

INSERT INTO Movie (id, name, sinopse, release_Date, rating)
VALUES(
  "004", 
  "Alto da Compadecida",
  "Zé grilo e Tinhó são dois cabra safado de inteligente que tem que dar um jeito de ganhar dinheiro pra não morrer de fome",
  "2017-11-02", 
  "10"
);

SELECT id, name, sinopse from Movie WHERE id = "004";
SELECT * from Movie WHERE name = "Alto da Compadecida";
SELECT id, name, sinopse from Movie WHERE rating > "6";
SELECT * FROM Movie
WHERE name LIKE "%Alto%";
SELECT * from Movie WHERE name LIKE "%Doce%" OR sinopse LIKE "%Zé%";

SELECT * FROM Movie
WHERE release_date < "2022-01-31" AND 
      (name LIKE "%de%" OR
      sinopse LIKE "%de%") AND rating > 7;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE Actor ADD director VARCHAR(255) DEFAULT "NotDirector";
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "Moacyr Franco", birth_date = "2020-02-10"
WHERE id = "123";

SET SQL_SAFE_UPDATES = 0;


UPDATE Actor
SET name = "Fernanda Montenegro"
WHERE name = "Fernanda Monteclaro";

UPDATE Actor
SET name = "Burgão", salary = "400000", birth_date = "1963-08-23", gender = "indefinido"
WHERE id = "005";

UPDATE Actor
SET name = "Nome Novo"
WHERE id = "010";
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor WHERE gender = "male" and salary > 1000000;

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT MIN(salary) FROM Actor WHERE gender = "female";
SELECT * FROM Actor;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT * from Actor ORDER BY salary;

SELECT id, name from Actor ORDER BY name DESC;

SELECT * from Actor ORDER BY salary DESC LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

