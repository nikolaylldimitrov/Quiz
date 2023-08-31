/*
  Warnings:

  - You are about to drop the `Quizzes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Quizzes";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Quizz" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "lastUpdated" TEXT NOT NULL,
    "participants" TEXT NOT NULL,
    "winners" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "isActive" TEXT NOT NULL
);
