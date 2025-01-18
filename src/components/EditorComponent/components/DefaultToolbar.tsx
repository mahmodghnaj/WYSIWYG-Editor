import { FC } from "react";
import { ToolbarButton } from "../types";

const BUTTONS: ToolbarButton[] = [
  { label: "Bold", style: "BOLD" },
  { label: "Italic", style: "ITALIC" },
  { label: "Underline", style: "UNDERLINE" },
];

const DefaultToolbar: FC<{ onToggle: (style: string) => void }> = ({
  onToggle,
}) => (
  <div
    style={{
      display: "flex",
      gap: "10px",
      marginBottom: "10px",
      padding: "5px",
      backgroundColor: "#f8f9fa",
      border: "1px solid #ddd",
      borderRadius: "5px",
    }}
  >
    {BUTTONS.map((button) => (
      <button
        key={button.style}
        onClick={() => onToggle(button.style)}
        style={{
          padding: "8px 12px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          transition: "background-color 0.3s, transform 0.2s",
          fontSize: "14px",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#e9ecef")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#ffffff")
        }
      >
        {button.label}
      </button>
    ))}
  </div>
);

export default DefaultToolbar;
