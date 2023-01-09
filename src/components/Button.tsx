import React from "react";

type ButtonProps<C extends React.ElementType = "button"> =
  React.ComponentProps<C> & {
    as?: C;
    type?: "button" | "submit";
    className: string;
    variant: "primary" | "ghost";
    shape: "round" | "circle";
    children: React.ReactElement | string;
  };

function Button<C extends React.ElementType>({
  as,
  className,
  children,
  variant,
  shape,
  type,
  ...props
}: ButtonProps<C>) {
  const Component = as ?? "button";
  const variantClass = variant === "ghost" ? "btn-ghost" : "btn-primary";
  const shapeClass = shape === "circle" ? "btn-circle" : "";

  return (
    <Component
      className={["btn", variantClass, shapeClass, className].join(" ")}
      {...props}
      type={type ?? "button"}
    >
      {children}
    </Component>
  );
}

export default Button;
