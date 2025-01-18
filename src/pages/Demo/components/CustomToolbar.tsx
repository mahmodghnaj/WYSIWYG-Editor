import { FC } from "react";

const buttonStyle = {
  padding: "8px 12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#f5f5f5",
  cursor: "pointer",
  transition: "background-color 0.3s, transform 0.2s",
  fontSize: "14px",
};

const buttonHoverStyle = {
  backgroundColor: "#e0e0e0",
  transform: "scale(1.05)",
};

const CustomToolbar: FC<{ onToggle: (style: string) => void }> = ({
  onToggle,
}) => (
  <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
    {[
      { label: "Bold", style: "BOLD" },
      { label: "Italic", style: "ITALIC" },
      { label: "Underline", style: "UNDERLINE" },
      { label: "Strikethrough", style: "STRIKETHROUGH" },
    ].map((button) => (
      <button
        key={button.style}
        onClick={() => onToggle(button.style)}
        style={buttonStyle}
        onMouseEnter={(e) =>
          Object.assign(e.currentTarget.style, buttonHoverStyle)
        }
        onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
      >
        {button.label}
      </button>
    ))}
  </div>
);

export default CustomToolbar;
