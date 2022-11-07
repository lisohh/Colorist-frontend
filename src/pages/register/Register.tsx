import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import VerticalForm from "~/components/VerticalForm";

function Register() {
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
      title="회원가입"
      submitLabel="가입하기"
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
      })}
      after={
        <Button as={Link} to="/login" className="text-center">
          로그인으로 이동
        </Button>
      }
    >
      <>
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
      </>
    </VerticalForm>
  );
}

// react jsx에 내장되어 있는... 즉 원래 html element에도 있는 타입들은... 문자열로 쓸 수 있다! "a" "button" "input"

export default Register;
