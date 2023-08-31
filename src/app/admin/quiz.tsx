import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function Quizz() {
  return (
    <div className="p-4 border border-slade-300 my-3 flex justify-between gap-5 items-start">
      <div>
        <h2 className="font-bold text-2xl">Name Quiz</h2>
        <div>Modified On</div>
      </div>
      <div className="flex gap-2">
        <HiPencilAlt size={24} />
        <RemoveBtn />
      </div>
    </div>
  );
}
