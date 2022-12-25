import React from "react";
import { BASE_CSS_PROPERTIES } from "../models/constants";
import { MD5Gen, SHA1Gen, SHA256Gen, SHA512Gen } from "../utils/hasher";
import CopiedTextBox from "./copiedTextBox";

export default function Hash() {
  const [hash, setHash] = React.useState("");
  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <h1 className="text-4xl font-bold">Hash</h1>
      <h3 className="text-2xl font-bold">Input:</h3>
      <input
        className={BASE_CSS_PROPERTIES.INPUT_BOX + " w-full"}
        type="text"
        value={hash}
        onChange={(e) => {
          setHash(e.target.value);
        }}
      />
      <div className="w-full h-1 bg-stone-500 mt-4 rounded-lg" />
      <div className="w-full grid grid-cols-2 gap-4">
        <p className="text-xl">MD5</p>
        <CopiedTextBox text={MD5Gen(hash)} />
        <p className="text-xl">SHA1</p>
        <CopiedTextBox text={SHA1Gen(hash)} />
        <p className="text-xl">SHA256</p>
        <CopiedTextBox text={SHA256Gen(hash)} />
        <p className="text-xl">SHA512</p>
        <CopiedTextBox text={SHA512Gen(hash)} />
      </div>
    </div>
  );
}
