import { useState, FC } from "react";
import { EditorState } from "draft-js";
import EditorComponent from "../../components/EditorComponent";
import CustomToolbar from "./components/CustomToolbar";

const editorStyles = {
  border: "1px solid #ccc",
  padding: "10px",
  minHeight: "200px",
};

const DemoPage: FC = () => {
  const [controlledEditorState, setControlledEditorState] = useState(
    EditorState.createEmpty()
  );

  const renderContent = (editorState: EditorState) => {
    const content = editorState.getCurrentContent();
    return content.getPlainText() || "(empty)";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>WYSIWYG Editor Demo</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <h2>Controlled Mode</h2>
          <EditorComponent
            value={controlledEditorState}
            onChange={setControlledEditorState}
            style={editorStyles}
          />
          <p style={{ marginTop: "10px" }}>
            <strong>Content:</strong> {renderContent(controlledEditorState)}
          </p>
        </div>

        <div style={{ flex: 1 }}>
          <h2>Uncontrolled Mode</h2>
          <EditorComponent style={editorStyles} />
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Custom Toolbar Example</h2>
        <EditorComponent
          renderToolbar={({ onToggle }) => (
            <CustomToolbar onToggle={onToggle} />
          )}
          style={editorStyles}
        />
      </div>
    </div>
  );
};

export default DemoPage;
