import { FC } from "react";

const DefaultToolbar: FC<{ onToggle: (style: string) => void }> = ({
  onToggle,
}) => (
  <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
    <button onClick={() => onToggle("BOLD")}>Bold</button>
    <button onClick={() => onToggle("ITALIC")}>Italic</button>
    <button onClick={() => onToggle("UNDERLINE")}>Underline</button>
    <button onClick={() => onToggle("CODE")}>Code</button>
  </div>
);

export default DefaultToolbar;
