/*
  Warnings:

  - You are about to alter the column `isActive` on the `Quizz` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.
  - You are about to alter the column `lastUpdated` on the `Quizz` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.
  - You are about to alter the column `participants` on the `Quizz` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `winners` on the `Quizz` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Quizz" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "lastUpdated" DATETIME NOT NULL,
    "participants" INTEGER NOT NULL DEFAULT 0,
    "winners" INTEGER NOT NULL DEFAULT 0,
    "slug" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Quizz" ("id", "isActive", "lastUpdated", "participants", "slug", "title", "winners") SELECT "id", "isActive", "lastUpdated", "participants", "slug", "title", "winners" FROM "Quizz";
DROP TABLE "Quizz";
ALTER TABLE "new_Quizz" RENAME TO "Quizz";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
