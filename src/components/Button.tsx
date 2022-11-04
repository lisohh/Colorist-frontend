import React from "react";

type ButtonProps<C extends React.ElementType = "button"> =
  React.ComponentProps<C> & {
    as?: C;
    className: string;
    children: React.ReactElement | string;
  };

function Button<C extends React.ElementType>({
  as,
  className,
  children,
  ...props
}: ButtonProps<C>) {
  const Component = as || "button";

  return (
    <Component
      className={
        "bg-yellow-300 hover:bg-yellow-400 transition-colors duration-200 p-4 rounded-xl " +
        className
      }
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
