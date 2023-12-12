CREATE TABLE `temppresentationslide` (
  `id` int NOT NULL AUTO_INCREMENT,
  `transcription` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 



CREATE TABLE `tempslides` (
  `id` int NOT NULL AUTO_INCREMENT,
  `slideText` longtext,
  PRIMARY KEY (`id`)
) ;