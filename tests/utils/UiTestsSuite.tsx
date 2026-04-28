import { render, screen } from "@testing-library/react";

type SuiteOptions<T> = {
  component: React.ComponentType<T>;
  defaultProps?: T;
  displayName: string;
  defaultTag: string;
  text: string;
};

export function UiTestsSuite<T extends Record<string, unknown>>({
  component: Component,
  defaultProps,
  displayName,
  defaultTag,
  text,
}: SuiteOptions<T>) {
  describe(displayName, () => {
    it("renders children", () => {
      render(<Component {...(defaultProps as T)}>{text}</Component>);

      expect(screen.getByText(text)).toBeInTheDocument();
    });

    it(`renders as ${defaultTag} by default`, () => {
      render(<Component {...(defaultProps as T)}>{text}</Component>);

      const el = screen.getByText(text);
      expect(el.tagName).toBe(defaultTag.toUpperCase());
    });

    it("accepts custom className", () => {
      render(
        <Component {...(defaultProps as T)} className="custom-class">
          {text}
        </Component>,
      );

      const el = screen.getByText(text);
      expect(el.className).toMatch(/custom-class/);
    });

    it("supports polymorphic 'as'", () => {
      render(
        <Component {...(defaultProps as T)} as="span">
          {text}
        </Component>,
      );

      const el = screen.getByText(text);
      expect(el.tagName).toBe("SPAN");
    });
  });
}
