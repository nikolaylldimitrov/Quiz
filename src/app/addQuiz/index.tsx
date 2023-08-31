"use client";
import React, { useState } from "react";

import Head from "next/head";
import AddQuizzForm from "./AddQuizzForm";
import { PrismaClient, Quizz, Prisma } from "@prisma/client";

const prisma = new PrismaClient();
export type AddQuizProps = {
  initialQuizz: Quizz[];
};

export async function getServerSideProps() {
  const quizz: Quizz[] = await prisma.quizz.findMany();
  return {
    props: {
      initialQuizz: quizz,
    },
  };
}

async function savedQuizz(quizz: Prisma.QuizzCreateInput) {
  const response = await fetch("/api/quizzes", {
    method: "POST",
    body: JSON.stringify(quizz),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export default function AddQuiz() {
  return (
    <>
      <Head>
        <title>Quizz Editor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="flex">
        <section className="w-1/3 bg-gray-800 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-white"> Add Quizz</h2>
          </div>
          <AddQuizzForm
            onSubmit={async (data: any) => {
              try {
                await savedQuizz(data);
                // setQuizz([...quizz, data]);
                // e.target && (e.target as FormElement).reset();
              } catch (err) {
                console.log(err);
              }
            }}
          />
        </section>
      </div>
    </>
  );
}
