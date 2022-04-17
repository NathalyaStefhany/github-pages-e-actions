import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button test", () => {
  it("should render correctly", () => {
    render(<Button data-testid="download-button">Download</Button>);

    expect(screen.getByTestId("download-button")).toBeInTheDocument();
  });
});
