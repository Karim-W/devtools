import React from "react";
import { generateRandomString } from "../utils/generators";
import CopiedTextBox from "./copiedTextBox";
export default function StringGenerator() {
  const [st, setString] = React.useState<string>("");
  const [length, setLength] = React.useState<number>(10);
  React.useEffect(() => {
    setString(generateRandomString(length));
  }, [length]);
  return (
    <div className="w-full h-full flex flex-col gap-4 p-4 px-8 justify-start items-center">
      <h2 className="text-white text-5xl mt-32 font-light">String Generator</h2>
      <input
        className="w-3/4 p-8 h-24 bg-stone-900 text-white rounded-lg"
        type="range"
        min="1"
        max="50"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
      <p className="text-white text-2xl font-light bg-stone-900 p-4 rounded-lg ">
        {length}
      </p>
      <CopiedTextBox text={st} className="text-3xl flex-wrap" />
    </div>
  );
}
