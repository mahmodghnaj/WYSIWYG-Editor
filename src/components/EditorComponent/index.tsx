import { CSSProperties, FC, ReactNode, useState } from "react";
import { Editor, EditorState, convertToRaw, RichUtils } from "draft-js";
import DefaultToolbar from "./components/DefaultToolbar";

interface EditorComponentProps {
  value?: EditorState;
  onChange?: (state: EditorState) => void;
  className?: string;
  style?: CSSProperties;
  renderToolbar?: ({
    onToggle,
  }: {
    onToggle: (style: string) => void;
  }) => ReactNode;
}

const EditorComponent: FC<EditorComponentProps> = ({
  value,
  onChange,
  className,
  style,
  renderToolbar,
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const isControlled = value !== undefined && onChange !== undefined;

  const handleChange = (state: EditorState) => {
    if (isControlled && onChange) {
      onChange(state);
    } else {
      setEditorState(state);
    }
  };

  const applyStyle = (style: string) => {
    const currentState = isControlled ? value! : editorState;
    const newState = RichUtils.toggleInlineStyle(currentState, style);
    handleChange(newState);
  };

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
      />
      <button onClick={handleSave} style={{ marginTop: "10px" }}>
        Save Content
      </button>
    </div>
  );
};

export default EditorComponent;
