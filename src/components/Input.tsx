import React, { forwardRef, useState, type ForwardedRef } from "react";

// object type
// keyof
// indexed type
// optional
// partial

// ref
// forwardRef

// https://www.typescriptlang.org/docs/handbook/2/objects.html
type DataT = {
  email: string;
  password: string;
};

let b: DataT = {
  email: "twinstae@naver.com",
  password: "3",
};

// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
// 'email' | 'password'
type DataKeys = keyof DataT;

function hello(key: DataKeys) {
  console.log(key);
}

hello("email");
hello("password");
// hello("test"); // <- 타입 에러!

// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
type ErrorData<T> = {
  [key in keyof T]: { message?: string };
};

function logError(errors: ErrorData<DataT>) {
  console.error(errors);
}
// {
//   email: {
//       message: string;
//   };
//   password: {
//       message: string;
//   };
// }

// logError({
//   email: "test@naver.com",
//   password: "test",
// }); // 다른 타입!

logError({
  email: { message: "이메일 형식이 맞지 않습니다!" },
  password: {}, // message는 optional ? 이니까
});

// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
type PartialE = Partial<ErrorData<DataT>>;

// type SelfPartialErrorData = {
//   email?: {
//       message: string;
//   } | undefined;
//   password?: {
//       message: string;
//   } | undefined;
// }

function logError2(errors: PartialE, name: keyof DataT) {
  console.error(errors[name]);
}

// logError2({}, "test");

logError2(
  {
    email: { message: "필수 입력입니다!" },
  },
  "email"
);

logError2(
  {
    password: { message: "필수 입력입니다!" },
  },
  "password"
);

// 타입 관련 내용 정리해서 블로그에 써보셔도 좋을듯! - > 네,, 쓰면 무지 좋을 듯요.. 어렵겠지만..
//첫번째 줄이 이해가 안감..
type InputProps<T> = React.ComponentProps<"input"> & {
  errors: Partial<ErrorData<T>>;
  label: string;
};

const Input = forwardRef(function <T>(
  { name, label, errors, ...props }: InputProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const error = errors[name as keyof T];
  const initValue =
    props["type"] === "text"
      ? ""
      : props["type"] === "color"
      ? "#000000"
      : null;

  const [value, setValue] = useState(initValue);

  return (
    <>
      <label className="flex flex-col gap-2 mb-4">
        <span className="text-xl">{label}</span>
        <div className="flex flex-row gap-4">
          <input
            {...props}
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
          {props["type"] === "color" && (
            <output className="flex flex-col rounded p-1 bg-slate-100 text-center w-24">
              <div className="my-auto">{value}</div>
            </output>
          )}
        </div>
      </label>
      {error && <li role="alert">{error.message}</li>}
    </>
  );
});

export default Input;
