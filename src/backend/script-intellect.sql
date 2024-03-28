CREATE TABLE "user" (
  "username" VARCHAR(50) NOT NULL,
  "name" VARCHAR(45),
  "password" VARCHAR(45),
  "email" VARCHAR(255),
  PRIMARY KEY ("username")
);

CREATE TABLE "presentation" (
  "presentationId" SERIAL PRIMARY KEY,
  "title" VARCHAR(45),
  "subject" VARCHAR(45),
  "username" VARCHAR(50),
  "pptxFile" BYTEA,
  "uploadDate" TIMESTAMP,
  -- FOREIGN KEY ("username") REFERENCES "user"("username")
  
);

CREATE TABLE "presentationslide" (
  -- "sessionNo" INT,
  "sessionNo" SERIAL,
  "username" VARCHAR(50),
  "presentationId" INT,
  "duration" INTERVAL,
  "startTime" TIMESTAMP,
  "transcription" TEXT,
  -- PRIMARY KEY("username", "presentationId", "sessionNo")
  -- FOREIGN KEY ("username") REFERENCES "user"("username"),
  -- FOREIGN KEY ("presentationId") REFERENCES "presentation"("presentationId")
);





CREATE TABLE "slide" (
  -- "slideNo" INT,
  "slideNo" SERIAL,
  "textContent" TEXT,
  "presentationId" INT,
  -- PRIMARY KEY("presentationId", "slideNo")
  -- FOREIGN KEY ("presentationId") REFERENCES "presentation"("presentationId")
);


CREATE TABLE "keypoint" (
  -- "keypointNo" INT,
  "keypointNo" SERIAL,
  "slideNo" INT,
  "presentationId" INT,
  "point" TEXT,
   -- PRIMARY KEY("presentationId", "slideNo, keypointNo")
  -- FOREIGN KEY ("slideNo") REFERENCES "slide"("slideNo")
  -- FOREIGN KEY ("presentationId") REFERENCES "presentation"("presentationId")
);



