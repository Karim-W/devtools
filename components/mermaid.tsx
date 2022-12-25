import React from "react";
import mermaid from "mermaid";
import CopiedTextArea from "./copiedTextArea";

export default function Mermaid() {
  mermaid.initialize({
    startOnLoad: true,
    theme: "default",
    securityLevel: "loose",
    themeCSS: `
    g.classGroup rect {
      fill: #282a36;
      stroke: #6272a4;
    } 
    g.classGroup text {
      fill: #f8f8f2;
    }
    g.classGroup line {
      stroke: #f8f8f2;
      stroke-width: 0.5;
    }
    .classLabel .box {
      stroke: #21222c;
      stroke-width: 3;
      fill: #21222c;
      opacity: 1;
    }
    .classLabel .label {
      fill: #f1fa8c;
    }
    .relation {
      stroke: #ff79c6;
      stroke-width: 1;
    }
    #compositionStart, #compositionEnd {
      fill: #bd93f9;
      stroke: #bd93f9;
      stroke-width: 1;
    }
    #aggregationEnd, #aggregationStart {
      fill: #21222c;
      stroke: #50fa7b;
      stroke-width: 1;
    }
    #dependencyStart, #dependencyEnd {
      fill: #00bcd4;
      stroke: #00bcd4;
      stroke-width: 1;
    } 
    #extensionStart, #extensionEnd {
      fill: #f8f8f2;
      stroke: #f8f8f2;
      stroke-width: 1;
    }`,
    fontFamily: "Fira Code",
  });
  const text = `
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
    `;
  const [mdx, setMdx] = React.useState(text);
  React.useEffect(() => {
    mermaid.contentLoaded();
  }, [mdx]);
  return (
    <div className="w-full p-4 flex flex-row gap-4 items-center h-[calc(100vh-8rem)]">
      <CopiedTextArea state={mdx} setState={setMdx} className="w-full h-full" />
      <div className="w-full h-full p-4 rounded-xl prose prose-invert prose-2xl mermaid overflow-scroll">
        {mdx}
      </div>
    </div>
  );
}
