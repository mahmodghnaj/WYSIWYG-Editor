import { FC, useState, useCallback } from "react";
import { Editor, EditorState, convertToRaw, RichUtils } from "draft-js";
import DefaultToolbar from "./components/DefaultToolbar";
import { EditorComponentProps } from "./types";
import "./MyEditor.css";
const EditorComponent: FC<EditorComponentProps> = ({
  value,
  onChange,
  className,
  style,
  renderToolbar,
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const isControlled = value !== undefined && onChange !== undefined;

  const handleChange = useCallback(
    (state: EditorState) => {
      if (isControlled && onChange) onChange(state);
      else setEditorState(state);
    },
    [isControlled, onChange]
  );

  const applyStyle = useCallback(
    (style: string) => {
      const currentState = isControlled ? value! : editorState;
      const newState = RichUtils.toggleInlineStyle(currentState, style);
      handleChange(newState);
    },
    [isControlled, value, editorState, handleChange]
  );

  const handleSave = async () => {
    const content = convertToRaw(
      (isControlled ? value! : editorState).getCurrentContent()
    );
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
    console.log("Saved content:", JSON.stringify(content, null, 2));
  };

  return (
    <div className={className} style={style}>
      {renderToolbar ? (
        renderToolbar({ onToggle: applyStyle })
      ) : (
        <DefaultToolbar onToggle={applyStyle} />
      )}
      <Editor
        editorState={isControlled ? value! : editorState}
        onChange={handleChange}
        spellCheck={true}
        blockStyleFn={() => {
          return "custom-block";
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <button
          onClick={handleSave}
          style={{
            padding: "8px 16px",
            borderRadius: "5px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            transition: "background-color 0.3s, transform 0.2s",
          }}
        >
          Save Content
        </button>
      </div>
    </div>
  );
};

export default EditorComponent;
