import React from "react";
interface InputProps {
  placeholder: string;
  name: string;
}

export default function Input(props: InputProps) {
  return <input className="rounded p-4 text-xl w-full" />;
}
