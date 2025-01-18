import { EditorState } from "draft-js";
import { CSSProperties, ReactNode } from "react";

export interface ToolbarButton {
  label: string;
  style: string;
}

export interface EditorComponentProps {
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
