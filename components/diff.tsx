import React from "react";
import ReactDiffViewer from "react-diff-viewer";
export default function Diff() {
  const [oldText, setOldText] = React.useState("");
  const [newText, setNewText] = React.useState("");
  return (
    <div className="w-full h-full flex flex-col p-4 justify-start items-start gap-4">
      <div className="w-full h-1/2 flex flex-row gap-4 justify-evenly items-center">
        <div className="w-full h-full flex flex-col gap-4 justify-start items-start">
          <p className="text-2xl font-light">New Text</p>
          <textarea
            className="w-full h-full bg-stone-900 rounded-lg p-2"
            value={oldText}
            onChange={(e) => setOldText(e.target.value)}
          />
        </div>
        <div className="w-full h-full flex flex-col gap-4 justify-start items-start">
          <p className="text-2xl font-light">Old Text</p>
          <textarea
            className="w-full h-full bg-stone-900 rounded-lg p-2"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        </div>
      </div>
      <ReactDiffViewer
        newValue={newText}
        oldValue={oldText}
        splitView={true}
        useDarkTheme={true}
      />
    </div>
  );
}
