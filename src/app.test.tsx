import userEvent from "@testing-library/user-event";
import { RenderOptions, render, screen } from "@testing-library/react";
import App from "./app";

export const setupAndRender = (
  jsxElement: React.ReactElement,
  renderOptions: RenderOptions = {}
) => {
  return {
    user: userEvent.setup(),
    ...render(jsxElement, renderOptions),
  };
};

describe("Lorem", () => {
  describe("Ipsum", () => {
    it("displays the content", async () => {
      setupAndRender(<App />);

      expect(screen.getByText(/hello world/i)).toBeInTheDocument();
    });
  });
});
