import React from "react";
//1. bun add react-hook-form 을 터미널에 입력해서 설치
//2. import useForm
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "~/components/Button";

function Login() {
  // https://react-hook-form.com/get-started
  //3. register과 handleSubmit를 만들어서, 객체를 구조분해 할당(destructuring)...

  // options, config, props... 다 비슷한 말!
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <article className="login-form max-w-screen-md mx-auto p-4">
      {/* handleSubmit은 폼이 제출 되었을 때 form의 data를 쏙 꺼내준다 */}
      {/* 이걸 서버로 보내주면 끝! */}
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data));
        })}
      >
        <h2 className="text-4xl">Login</h2>
        <label className="flex flex-col gap-2">
          <span className="text-xl">이메일</span>
          <input
            type="email"
            className="input input-bordered"
            {...register("email", {
              required: "이메일을 입력해주세요!",
            })}
          />
        </label>
        {errors.email && <li role="alert">{errors.email.message}</li>}

        <label className="flex flex-col gap-2">
          <span className="text-xl">비밀번호</span>
          <input
            type="password"
            className="input input-bordered"
            {...register("password", {
              required: "비밀번호를 입력해주세요!",
            })}
          />
        </label>
        {errors.password && <li role="alert">{errors.password.message}</li>}
        <Button type="submit" className="w-full">
          로그인
        </Button>
        <Button as={Link} to="/register" className="text-center">
          회원가입으로 이동
        </Button>
      </form>
    </article>
  );
}

// react jsx에 내장되어 있는... 즉 원래 html element에도 있는 타입들은... 문자열로 쓸 수 있다! "a" "button" "input"

export default Login;
