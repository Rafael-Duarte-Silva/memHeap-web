import { ElementType, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { PolymorphicProps } from "../types";

const typography = tv({
    base: "",
    variants: {
        variant: {
            h1: "font-serif text-5xl font-bold leading-tight",
            h2: "font-serif text-2xl font-semibold",
            h3: "font-serif text-xl font-semibold",
            body: "font-serif text-neutral-400",
            small: "font-serif text-neutral-500 text-sm",
            link: "font-sans text-green-400 text-sm",
        },
    },
});

type TypographyProps<T extends ElementType> = PolymorphicProps<
    T,
    VariantProps<typeof typography> & {
        children?: ReactNode;
    }
>;

export const Typography = <T extends ElementType = "p">({
    as,
    className,
    variant,
    children,
    ...props
}: TypographyProps<T>) => {
    const Component = as || "p";

    return (
        <Component
            className={typography({
                className,
                variant,
            })}
            {...props}
        >
            {children}
        </Component>
    );
};

export function H1<T extends ElementType = "h1">({
    children,
    className,
}: TypographyProps<T>) {
    return (
        <h1 className={typography({ variant: "h1", className })}>{children}</h1>
    );
}

export function H2<T extends ElementType = "h2">({
    children,
    className,
}: TypographyProps<T>) {
    return (
        <h2 className={typography({ variant: "h2", className })}>{children}</h2>
    );
}

export function Paragraph<T extends ElementType = "p">({
    children,
    className,
}: TypographyProps<T>) {
    return (
        <p className={typography({ variant: "body", className })}>{children}</p>
    );
}

export function Small<T extends ElementType = "p">({
    children,
    className,
}: TypographyProps<T>) {
    return (
        <p className={typography({ variant: "small", className })}>
            {children}
        </p>
    );
}
