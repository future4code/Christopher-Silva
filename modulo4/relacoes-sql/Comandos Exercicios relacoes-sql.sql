SELECT * FROM Actor;
SELECT * FROM Rating;
SELECT * FROM Movie;
SELECT * FROM MovieCast;

SELECT COUNT(*) FROM Actor WHERE gender = 'female';
SELECT AVG(salary) FROM Actor WHERE gender = 'male';
UPDATE Actor
SET salary = "0"
WHERE id = "001";

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating VALUES
("001", "Muito Bom",8.5,"001"),
("002", "Bom tbem",7.5, "002"),
("003", "Brega",7,"003"),
("004","Muito Bom", 9, "004") ;

INSERT INTO Rating VALUES
("006", "Muito Bom",8.5,"005");

ALTER TABLE Movie DROP COLUMN rating;

DELETE FROM Movie WHERE id = "001";

DELETE FROM Actor WHERE id = "001";

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO Actor  (id, name, salary, birth_date, gender)
 VALUES
( "001","FransciscoCuoco", 300000, "1967-03-12","male");


INSERT INTO MovieCast VALUES
("001","001" ), ("001" ,"002" ) , ("002" ,"004" ) , ("003" ,"005" ) , ("004" ,"006" ) , ("003" ,"006" );

INSERT INTO MovieCast VALUES
("001","010" );

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

SELECT Movie.id, name, Rating.rate  FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;