import React from "react";
import { convertBase64ToString, convertStringToBase64 } from "../utils/base64";
export default function Base64() {
  const [base64, setBase64] = React.useState<string>("");
  const [decoded, setDecoded] = React.useState<string>("");
  return (
    <div className="w-full flex flex-col p-8 gap-8 justify-evenly">
      <div className="w-full h-full flex flex-col gap-4">
        <h2 className="text-white text-2xl">Base64 Encoded:</h2>
        <textarea
          className="w-full h-96 bg-stone-900 text-white p-4 rounded-lg"
          placeholder="Paste your base64 here"
          onChange={(e) => {
            setBase64(e.target.value);
            setDecoded(convertBase64ToString(e.target.value));
          }}
          value={base64}
        />
      </div>
      <div className="w-full h-full flex flex-col gap-4">
        <h2 className="text-white text-2xl">Base64 Decoded:</h2>
        <textarea
          className="w-full h-96 bg-stone-900 text-white p-4 rounded-lg"
          placeholder="Paste your string here"
          onChange={(e) => {
            setDecoded(e.target.value);
            setBase64(convertStringToBase64(e.target.value));
          }}
          value={decoded}
        />
      </div>
    </div>
  );
}
