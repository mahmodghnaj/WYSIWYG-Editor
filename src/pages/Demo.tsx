import { useState, FC } from "react";
import EditorComponent from "../components/EditorComponent";
import { EditorState } from "draft-js";

const DemoPage: FC = () => {
  const [controlledEditorState, setControlledEditorState] = useState(
    EditorState.createEmpty()
  );

  const CustomToolbar = ({
    onToggle,
  }: {
    onToggle: (style: string) => void;
  }) => (
    <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
      <button onClick={() => onToggle("BOLD")}>Bold</button>
      <button onClick={() => onToggle("ITALIC")}>Italic</button>
      <button onClick={() => onToggle("UNDERLINE")}>Underline</button>
      <button onClick={() => onToggle("STRIKETHROUGH")}>Strikethrough</button>
    </div>
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>WYSIWYG Editor Demo</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <h2>Controlled Mode</h2>
          <EditorComponent
            value={controlledEditorState}
            onChange={setControlledEditorState}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              minHeight: "200px",
            }}
          />
          <p style={{ marginTop: "10px" }}>
            <strong>Content:</strong>{" "}
            {controlledEditorState.getCurrentContent().getPlainText() ||
              "(empty)"}
          </p>
        </div>

        <div style={{ flex: 1 }}>
          <h2>Uncontrolled Mode</h2>
          <EditorComponent
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              minHeight: "200px",
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Custom Toolbar Example</h2>
        <EditorComponent
          renderToolbar={({ onToggle }) => (
            <CustomToolbar onToggle={onToggle} />
          )}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            minHeight: "200px",
          }}
        />
      </div>
    </div>
  );
};

export default DemoPage;
