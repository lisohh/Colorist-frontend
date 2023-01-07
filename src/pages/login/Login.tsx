import React from "react";
//1. bun add react-hook-form 을 터미널에 입력해서 설치
//2. import useForm
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "~/components/Button";
import Input from "~/components/Input";
import VerticalForm from "~/components/VerticalForm";
import * as api from "../../api";

function Login() {
  const navigate = useNavigate();
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
    <VerticalForm
      title="로그인"
      submitLabel="로그인하기"
      onSubmit={handleSubmit(async (data) => {
        const response = await api.login(data);

        if (response.ok) {
          const result = await response.json(); // body로 온 json을 파싱함!

          alert(JSON.stringify(result));
          navigate("/");
        }
      })}
      after={
        <Button as={Link} to="/register" className="text-center">
          회원가입으로 이동
        </Button>
      }
    >
      <Input
        type="email"
        label="이메일"
        {...register("email", {
          required: "이메일을 입력해주세요!",
        })}
        errors={errors}
      />
      <Input
        type="password"
        label="비밀번호"
        {...register("password", {
          required: "비밀번호를 입력해주세요!",
        })}
        errors={errors}
      />
    </VerticalForm>
  );
}

// react jsx에 내장되어 있는... 즉 원래 html element에도 있는 타입들은... 문자열로 쓸 수 있다! "a" "button" "input"

export default Login;
