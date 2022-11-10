import React, { forwardRef, type ForwardedRef } from "react";

// https://www.typescriptlang.org/docs/handbook/2/objects.html
type DataT = {
  email: string;
  password: string;
};

let a: DataT = {
  email: "test@naver.com",
  password: "test",
};

// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
type DataKeys = keyof DataT; // 'email' | 'password'

function hello(name: DataKeys) {
  console.log(name);
}

hello("email");
hello("password");
// hello("test"); // <- 타입 에러!

// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
type ErrorData = {
  [key in keyof DataT]: { message?: string };
};

function logError(errors: ErrorData) {
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
  email: { message: "test@naver.com" },
  password: {}, // message는 optional ? 이니까
});

// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
type PartialE = Partial<ErrorData>;

// {
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

type InputProps<T> = React.ComponentProps<"input"> & {
  errors: Partial<{
    [key in keyof T]: { message?: string };
  }>; // T에 있는 key들 마다 { message: string }이 있을 수도 있고 없을 수도 있는~
  name: string; // T에 있는 key들
  label: string;
};

const Input = forwardRef(function <T>(
  { name, label, errors, ...props }: InputProps<T>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const error = errors[name as keyof T];

  return (
    <>
      <label className="flex flex-col gap-2">
        <span className="text-xl">{label}</span>
        <input
          ref={ref}
          className="input input-bordered"
          name={name}
          {...props}
        />
      </label>
      {error && <li role="alert">{error.message}</li>}
    </>
  );
});

export default Input;
