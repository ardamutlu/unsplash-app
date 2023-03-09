import React, { forwardRef } from "react";
import classNames from "classnames";

type Props = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  as?: React.ElementType;
  href?: string;
} & React.HTMLAttributes<HTMLElement>;

export const DEFAULT_CLASS =
  "focus:ring-4 focus:outline-none text-center inline-flex items-center";

export const VARIANT = {
  primary: "",
  secondary:
    "text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-gray-100",
};

export const SIZE = {
  sm: "",
  md: "font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2",
  lg: "",
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      as: Component = "button",
      children,
      variant = "secondary",
      size = "md",
      href,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        href={href}
        className={classNames(DEFAULT_CLASS, VARIANT[variant], SIZE[size])}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";
export default Button;
