import AddQuiz, { AddQuizProps } from ".";
import { PrismaClient, Quizz, Prisma } from "@prisma/client";

export default function PageQuizz() {
  return (
    <div>
      <AddQuiz />
      <h1 className="text-3xl underline">Hello World</h1>
    </div>
  );
}
