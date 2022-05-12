-- CREATE DATABASE database_ssc;

CREATE TABLE Student (
    Id INT NOT NULL AUTO_INCREMENT,
    Rga VARCHAR(15) NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Course VARCHAR(255) NOT NULL,
    Situation VARCHAR(8) NOT NULL,
    CreatedIn TIME(hh:mm:ss),
    PRIMARY KEY (id)
);

INSERT INTO Student (Rga,Name,Course,Situation,CreatedIn)
VALUES ('2018.1902.060-6','Gilson Jose dos Santos','TADS','Ativo','09:02:04');

SELECT * FROM Student;

-- SELECT * FROM Student
-- WHERE Name LIKE ${nome};

-- SELECT *
-- INTO Student
-- FROM oldtable
-- WHERE condition;

