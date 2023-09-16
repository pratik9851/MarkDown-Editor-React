import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import breaks from "remark-breaks";
import "./markdown.css";

const MarkDownEditor = () => {
  const [markDown, setMarkDown] = useState("");

  const handelChange = (e) => {
    setMarkDown(e.target.value);
  };
  return (
    <div className="container">
      <div className="textarea-container">
        <h1>Markdown Editor</h1>
        <textarea onChange={handelChange} value={markDown} />
      </div>
      <div className="preview-container">
        <h1>Preview</h1>
        <div className="preview">
          <ReactMarkdown remarkPlugins={[breaks]}>{markDown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkDownEditor;
