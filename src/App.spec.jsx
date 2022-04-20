import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App test", () => {
  it("should render correctly", () => {
    render(<App />);

    expect(screen.getByTestId("download-button")).toBeInTheDocument();
  });
});
