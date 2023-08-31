import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient, Prisma } from "@prisma/client";
import { promises } from "dns";
import { Exception } from "@prisma/client/runtime/library";

const prisma = new PrismaClient({
  log: ["query"],
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(444);
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const quizz: Prisma.QuizzCreateInput = JSON.parse(req.body);
    console.log(quizz);

    const savedQuizz = await prisma.quizz.create({ data: quizz });
    console.log(savedQuizz);
    res.status(200).json(savedQuizz);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
