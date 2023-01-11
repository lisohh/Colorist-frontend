import React, { forwardRef, type ForwardedRef } from "react";
import InputLayout from "./InputLayout";

type InputProps<T> = React.ComponentProps<"input"> & {
  type: "text" | "email" | "password";
  name: string;
  errors: Partial<ErrorData<T>>;
  label: string;
};

const TextInput = forwardRef(function <T>(
  { name, label, errors, ...props }: InputProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <InputLayout label={label} error={errors[name as keyof T]}>
      <input
        {...props}
        ref={ref}
        name={name}
        className={"input bg-slate-100 " + props["className"]}
      />
    </InputLayout>
  );
});

export default TextInput;
