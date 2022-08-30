import React from "react";
//1. bun add react-hook-form 을 터미널에 입력해서 설치
//2. import useForm
import { useForm } from "react-hook-form";
import "./Login.css";

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
    <article className="login-form">
      {/* handleSubmit은 폼이 제출 되었을 때 form의 data를 쏙 꺼내준다 */}
      {/* 이걸 서버로 보내주면 끝! */}
      <form
        onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data));
        })}
      >
        <h2>Login</h2>
        <label>
          이메일
          <input
            type="email"
            {...register("email", {
              required: "이메일을 입력해주세요!",
            })}
          />
        </label>
        {errors.email && <li role="alert">{errors.email.message}</li>}

        <label>
          비밀번호
          <input
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요!",
            })}
          />
        </label>
        {errors.password && <li role="alert">{errors.password.message}</li>}
        <button type="submit" className="w-full bg-yello-300">
          로그인
        </button>
      </form>
    </article>
  );
}

export default Login;
