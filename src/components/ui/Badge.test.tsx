import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";
import { UiTestsSuite } from "@/tests/utils/UiTestsSuite";

describe("Badge", () => {
    UiTestsSuite({
        component: Badge,
        displayName: "Badge",
        defaultTag: "div",
        text: "Test Badge",
    });

    it("applies default variants", () => {
        render(<Badge>Default</Badge>);

        const el = screen.getByText("Default");

        expect(el.className).toMatch(/bg-neutral-900/);
        expect(el.className).toMatch(/px-4/); // md size
    });

    it("applies size correctly", () => {
        render(<Badge size="sm">Small</Badge>);

        const el = screen.getByText("Small");

        expect(el.className).toMatch(/px-3/);
        expect(el.className).toMatch(/text-xs/);
    });

    it("passes props correctly", () => {
        render(
            <Badge
                as="a"
                href="/test"
            >
                Link
            </Badge>,
        );

        const el = screen.getByText("Link");

        expect(el).toHaveAttribute("href", "/test");
    });
});
