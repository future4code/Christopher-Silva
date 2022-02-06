CREATE TABLE user (
		id VARCHAR(255) PRIMARY KEY ,
		name VARCHAR(255),
    nickName VARCHAR(255),
    email VARCHAR(255)
);

SELECT * FROM user;
SELECT * FROM task;

INSERT INTO user (id,name,nickName,email)
 VALUES ("001", "testando","teste","teste@gmail.com");
 
 SELECT user.id, user.nickName FROM user WHERE id="001";
 
 CREATE TABLE task (
		id_Task VARCHAR(255) PRIMARY KEY ,
		title VARCHAR(255),
        description text,
    limitDate VARCHAR(255),
    creatorUserId VARCHAR(255),
    FOREIGN KEY (creatorUserId) REFERENCES user(id)
);