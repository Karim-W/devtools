import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import CopiedTextArea from "./copiedTextArea";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
export default function MarkdownPreview() {
  const [markdownText, setMarkdownText] = useState(`
  ## Markdown Previewer
  ### This is a sub-heading...
  ### And here's some other cool stuff:
  Heres some code, \`<div></div>\`, between 2 backticks.
  #### <u>for code blocks:</u>
  \`\`\`rust
const STARTING_MISSILES: i32 = 8;
const READY_AMOUNT: i32 = 2;

fn main() {
    let mut missiles: i32 = STARTING_MISSILES;
    let ready: i32 = READY_AMOUNT;
    println!("Firing {} of my {} missiles...", ready, missiles);
    missiles = missiles - ready;
    println!("{} missiles left", missiles);
}
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://karim-w.com), and
> Block Quotes!

And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
- And of course there are lists.
- Some are bulleted.
 - With different indentation levels.
 - That look like this.
 1. And there are numbererd lists too.
 1. Use just 1s if you want!
 1. And last but not least, let's not forget embedded images:
 ![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png)

To-Dos can be done like this:
- [x] This is a complete item
- [ ] This is an incomplete item

you can even add mermaid diagrams:
\`\`\`mermaid
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
\`\`\`



 you can also check out my [github](https://github.com/karim-w)

     
  
  `);
  return (
    <div className="w-full flex flex-row p-8 gap-4 h-[calc(100vh-8rem)]">
      <CopiedTextArea
        state={markdownText}
        setState={setMarkdownText}
        className="w-full"
      />
      <div className="w-full h-full bg-stone-900 p-4 rounded-xl prose prose-invert prose-xl overflow-scroll">
        <ReactMarkdown
          className="w-full rounded-xl"
          rehypePlugins={[gfm, rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  className="w-full bg-black"
                  style={atomDark}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdownText}
        </ReactMarkdown>
      </div>
    </div>
  );
}
