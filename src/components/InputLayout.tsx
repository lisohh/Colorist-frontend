import React from "react";

type InputProps<T> = {
  error?: {
    message?: string | undefined;
  };
  children: React.ReactNode | React.ReactNode[];
  label: string;
};

const InputLayout = function <T>({
  label,
  error,
  children,
  ...props
}: InputProps<T>) {
  return (
    <>
      <label className="flex flex-col gap-2 mb-4" {...props}>
        <span className="text-xl">{label}</span>
        {children}
      </label>
      {error && <li role="alert">{error.message}</li>}
    </>
  );
};

export default InputLayout;
