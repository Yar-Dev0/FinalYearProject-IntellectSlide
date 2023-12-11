

CREATE TABLE `intellectslide-db`.`user` (
  `username` VARCHAR(50) NOT NULL,
  `name` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `email` VARCHAR(255) NULL,
  PRIMARY KEY (`username`));

  
  CREATE TABLE `intellectslide-db`.`keypoint` (
  `id` INT NOT NULL AUTO_INCREMENT,
   slideId Int,
  `point` MEDIUMTEXT NULL,
   FOREIGN KEY (`slideId`) REFERENCES slide(`slideNo`),
   PRIMARY KEY (`id`));
  
  

  CREATE TABLE `intellectslide-db`.`slide` (
  `slideNo` INT NOT NULL,
  `textContent` MEDIUMTEXT NULL,
  PRIMARY KEY (`slideNo`));


  
  CREATE TABLE `intellectslide-db`.`presentation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `subject` VARCHAR(45) NULL,
  `pptFile` LONGBLOB NULL,
  `slideId` INT NOT NULL,
  `uploadDate` DATETIME NULL,
  FOREIGN KEY (`slideId`) REFERENCES slide(`slideNo`),
  PRIMARY KEY (`id`));



  

CREATE TABLE `intellectslide-db`.`presentationslide` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` VARCHAR(50) NULL,
  `presentationId` INT NOT NULL,
  `duration` TIME NULL,
  `startTime` DATETIME NULL,
  `transcription` LONGTEXT NULL,
  foreign key (userId) references user(username),
  foreign key (presentationId) references presentation(id),
  PRIMARY KEY (`id`, `presentationId`));
