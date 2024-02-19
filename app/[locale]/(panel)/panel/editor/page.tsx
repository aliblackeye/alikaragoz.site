"use client";
import { useEffect, useState } from "react";

import MDEditor, { commands } from "@uiw/react-md-editor";

import rehypeSanitize from "rehype-sanitize";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { EditorAPI } from "@apis/EditorAPI";
import axios from "axios";

export default function Editor() {
  // States
  const [value, setValue] = useState("");
  const [works, setWorks] = useState([]);

  // Functions

  // Effects
  useEffect(() => {
    EditorAPI.getAll().then((works) => setWorks(works?.data?.data));
  }, []);

  return (
    <div className="editor-section">
      <div>
        {works?.map((work, index) => (
          <div key={index}>
            <h3>{work.title}</h3>
            <textarea value={work.content} />
          </div>
        ))}
      </div>
      <MDEditor
        value={value}
        onChange={setValue}
        previewOptions={{
          remarkPlugins: [[remarkGfm]],
          rehypePlugins: [[rehypeSanitize, rehypeRaw]],
        }}
      />
      <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />

      <button onClick={() => {}}>Kaydet</button>
    </div>
  );
}
