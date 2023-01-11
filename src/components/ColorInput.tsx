import React, { forwardRef, useState, type ForwardedRef } from "react";
import InputLayout from "./InputLayout";

type InputProps<T> = React.ComponentProps<"input"> & {
  type?: "color";
  name: string;
  errors: Partial<ErrorData<T>>;
  label: string;
};

const ColorInput = forwardRef(function <T>(
  { type = "color", name, label, errors, ...props }: InputProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [value, setValue] = useState("#000000");

  return (
    <InputLayout label={label} error={errors[name as keyof T]}>
      <div className="flex flex-row gap-4">
        <input
          {...props}
          type="color"
          ref={ref}
          name={name}
          className={"input bg-slate-100 " + props["className"]}
          onChange={(e) => {
            const originalOnChange = props["onChange"];
            if (originalOnChange) {
              originalOnChange(e);
            }
            setValue(e.target.value);
          }}
        />
        <output className="flex flex-col rounded p-1 bg-slate-100 text-center w-24">
          <div className="my-auto">{value}</div>
        </output>
      </div>
    </InputLayout>
  );
});

export default ColorInput;
