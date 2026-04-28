import { render, screen } from "@testing-library/react";
import { Typography, H1, H2, Paragraph, Small } from "./Typography";
import { UiTestsSuite } from "@/tests/utils/UiTestsSuite";

describe("Typography", () => {
  UiTestsSuite({
    component: Typography,
    displayName: "Typography",
    defaultTag: "p",
    text: "paragraph",
  });
});

describe("Typography Variants", () => {
  it("H1 renders correct tag and styles", () => {
    render(<H1>Title</H1>);

    const el = screen.getByText("Title");

    expect(el.tagName).toBe("H1");
    expect(el.className).toMatch(/text-5xl/);
  });

  it("H2 renders correct tag and styles", () => {
    render(<H2>Subtitle</H2>);

    const el = screen.getByText("Subtitle");

    expect(el.tagName).toBe("H2");
    expect(el.className).toMatch(/text-2xl/);
  });

  it("Paragraph renders correct tag and styles", () => {
    render(<Paragraph>Body</Paragraph>);

    const el = screen.getByText("Body");

    expect(el.tagName).toBe("P");
    expect(el.className).toMatch(/text-neutral-400/);
  });

  it("Small renders correct styles", () => {
    render(<Small>Small text</Small>);

    const el = screen.getByText("Small text");

    expect(el.tagName).toBe("P");
    expect(el.className).toMatch(/text-sm/);
  });
});
