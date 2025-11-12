import { render, screen } from "@testing-library/react";
import LinkButton from "../components/LinkButton";

test("renderiza botão de link com rótulo e link correto", () => {
  render(
    <LinkButton
      href="https://example.com"
      label="Exemplo"
      ariaLabel="Abrir Exemplo"
    />
  );
  const button = screen.getByRole("link", { name: /Abrir Exemplo/i });
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("href", "https://example.com");
});
