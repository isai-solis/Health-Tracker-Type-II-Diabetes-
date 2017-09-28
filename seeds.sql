USE healthTracker_db;

INSERT INTO A1C (level, testDate, userNameId) VALUES (8.5, 2017-07-10, 1);
INSERT INTO A1C (level, testDate, userNameId) VALUES (7.2, 2017-08-15, 2);
INSERT INTO A1C (level, testDate, userNameId) VALUES (7.6, 2017-09-03, 3);
INSERT INTO A1C (level, testDate, userNameId) VALUES (8.2, 2017-07-21, 4);
INSERT INTO A1C (level, testDate, userNameId) VALUES (7.9, 2017-08-04, 5);

INSERT INTO activity (level, timeDuration, howFeel, activityTime, userNameId) VALUES ("Strenuous Exercise", 35, "high", 2017-09-20 16:20:00, 1);
INSERT INTO activity (level, timeDuration, howFeel, activityTime, userNameId) VALUES ("Light Exercise", 30, "Low", 2017-09-21 16:15:00, 1);
INSERT INTO activity (level, timeDuration, howFeel, activityTime, userNameId) VALUES ("Light Exercise", 15, "Medium", 2017-09-22 15:30:00, 1);
INSERT INTO activity (level, timeDuration, howFeel, activityTime, userNameId) VALUES ("Active", 40, "Low", 2017-09-23 17:00:00, 1);
INSERT INTO activity (level, timeDuration, howFeel, activityTime, userNameId) VALUES ("Rest", 60, "Low", 2017-09-24 17:15:00, 1);
INSERT INTO activity (level, timeDuration, howFeel, activityTime, userNameId) VALUES ("Light Exercise", 15, "high", 2017-09-20 18:05:00, 2);
INSERT INTO activity (level, timeDuration, howFeel, activityTime, userNameId) VALUES ("Active", 20, "Low", 2017-09-21 16:45:00, 2);
INSERT INTO activity (level, timeDuration, howFeel, activityTime, userNameId) VALUES ("Rest", 15, "Medium", 2017-09-22 17:35:00, 2);
INSERT INTO activity (level, timeDuration, howFeel, activityTime, userNameId) VALUES ("Strenuous Exercise", 40, "Medium", 2017-09-23 18:00:00, 2);
INSERT INTO activity (level, timeDuration, howFeel, activityTime, userNameId) VALUES ("Active", 45, "Low", 2017-09-24 17:55:00, 2);

INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (75, 2017-09-27, 1);
INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (155, 2017-09-27, 1);
INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (90, 2017-09-27, 1);

INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (82, 2017-08-04, 1);
INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (132, 2017-08-15, 1);
INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (93, 2017-08-22, 1);
INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (87, 2017-08-29, 1);

INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (71, 2017-07-03, 1);
INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (139, 2017-07-16, 1);
INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (92, 2017-07-23 1);
INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (89, 2017-07-28, 1);

INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (79, 2017-06-05, 1);
INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (142, 2017-06-13, 1);
INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (91, 2017-06-24, 1);
INSERT INTO bloodSugarM (mgDl, timeOfM, userNameId) VALUES (88, 2017-06-30, 1);

INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-09-27 07:00:00, 1, "Novolog", 1);
INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-09-27 12:20:00, 2, "Novolog", 1);
INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-09-27 17:15:00, 3, "Novolog", 1);
INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-09-27 21:30:00, 16, "Lantus", 1);

INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-08-04 07:15:00, 1, "Novolog", 1);
INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-08-15 12:30:00, 3, "Novolog", 1);
INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-08-22 17:30:00, 2, "Novolog", 1);
INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-08-29 21:30:00, 16, "Lantus", 1);

INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-07-03 07:10:00, 1, "Novolog", 1);
INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-07-16 12:10:00, 2, "Novolog", 1);
INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-07-23 17:10:00, 2, "Novolog", 1);
INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-07-28 21:30:00, 16, "Lantus", 1);

INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-06-05 07:05:00, 2, "Novolog", 1);
INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-06-13 12:30:00, 2, "Novolog", 1);
INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-06-24 17:45:00, 4, "Novolog", 1);
INSERT INTO insulin (timeTaken, units, kind, userNameId) VALUES (2017-06-30 21:30:00, 16, "Lantus", 1);

INSERT INTO meals (timeEaten, meal, carbs, userNameId) VALUES (2017-09-27, "Eggs, Bacon, and English Muffin", 25, 1);
INSERT INTO meals (timeEaten, meal, carbs, userNameId) VALUES (2017-09-27, "Turkey Breast, Pasta, and peas", 50, 1);
INSERT INTO meals (timeEaten, meal, carbs, userNameId) VALUES (2017-09-27, "Pork Chop, Green Beans, and Roll", 30, 1);
INSERT INTO meals (timeEaten, meal, carbs, userNameId) VALUES (2017-09-27, "Yogurt and Granola", 20, 1);

INSERT INTO medications (brand, frequency, dose, userNameId) VALUES ("Metformin", 3, 850, 1);
INSERT INTO medications (brand, frequency, dose, userNameId) VALUES ("Metformin", 3, 700, 2);
INSERT INTO medications (brand, frequency, dose, userNameId) VALUES ("Metformin", 3, 800, 3);
INSERT INTO medications (brand, frequency, dose, userNameId) VALUES ("Metformin", 3, 900, 4);
INSERT INTO medications (brand, frequency, dose, userNameId) VALUES ("Metformin", 3, 850, 5);

INSERT INTO userInfo (name, email, gender, birthDate, weight, height, userName, password) VALUES ("Joe Smith", "js@gmail.com", "male", 1970-07-02, 200, 68, "jsmith", "googleyeyes");
INSERT INTO userInfo (name, email, gender, birthDate, weight, height, userName, password) VALUES ("Susan Jones", "susjones@gmail.com", "female", 1967-06-12, 180, 64, "susjones15", "droopeyeyes");
INSERT INTO userInfo (name, email, gender, birthDate, weight, height, userName, password) VALUES ("Aaron Rudd", "aarudd@gmail.com", "male", 1974-05-21, 195, 64, "aaronrud19", "hungryeyes");
INSERT INTO userInfo (name, email, gender, birthDate, weight, height, userName, password) VALUES ("Paul Garcia", "paulgar734@gmail.com", "male", 1963-09-29, 210, 69, "pauleyg", "twobootsworn");
INSERT INTO userInfo (name, email, gender, birthDate, weight, height, userName, password) VALUES ("Beatrice Rutherford", "beabea@gmail.com", "female", 1971-08-12, 205, 68, "beabeababy", "mindyobidness");