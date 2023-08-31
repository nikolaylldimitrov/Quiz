import Link from "next/link";
import Quizz from "./quiz";
export default function Admin() {
  return (
    <div>
      <nav className="flex justify-between items-center bg-cyan-500 px-8 py-3">
        <Link href={"/"} className="text-white font-bold text-xl">
          {" "}
          Reactisimo
        </Link>
        <Link href={"/addQuiz"} className="bg-white p-2">
          Add New Quiz
        </Link>
      </nav>
      <Quizz />
    </div>
  );
}
