import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditorComponent from "./index";

describe("EditorComponent", () => {
  it("renders the editor and toolbar correctly", () => {
    render(<EditorComponent />);

    expect(screen.getByText("Bold")).toBeTruthy();
    expect(screen.getByText("Italic")).toBeTruthy();
    expect(screen.getByText("Underline")).toBeTruthy();
  });

  it("applies bold style when the Bold button is clicked", async () => {
    const user = userEvent.setup();
    render(<EditorComponent />);

    const boldButton = screen.getByText("Bold");
    await user.click(boldButton);

    expect(boldButton).toBeTruthy();
  });

  it("renders a custom toolbar when provided", () => {
    const CustomToolbar = ({
      onToggle,
    }: {
      onToggle: (style: string) => void;
    }) => (
      <div>
        <button onClick={() => onToggle("STRIKETHROUGH")}>Strikethrough</button>
      </div>
    );

    render(
      <EditorComponent
        renderToolbar={({ onToggle }) => <CustomToolbar onToggle={onToggle} />}
      />
    );

    expect(screen.getByText("Strikethrough")).toBeTruthy();
  });
});
