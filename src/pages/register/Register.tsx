import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "~/components/Button";
import Footer from "~/components/Footer";
import Input from "~/components/Input";
import VerticalForm from "~/components/VerticalForm";
import * as api from "../../api";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfoT>({
    defaultValues: {
      email: "",
      password: "",
      pic: "",
      nickname: "",
      bio: "",
    },
  });

  return (
    <VerticalForm
      title="회원가입"
      submitLabel="가입하기"
      onSubmit={handleSubmit(async (data) => {
        const response = await api.join(data);

        if (response.ok) {
          navigate("/login");
        }

        // 성공한 경우?
        // (회원가입에 성공했습니다!)
        // 로그인 페이지로 이동... 로그인까지 겸사겸사...
        // 실패한 경우?
        // formError =>
      })}
      after={
        <Button as={Link} to="/login" className="text-center">
          로그인으로 이동
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
      <Input
        type="text"
        label="프로필 사진 url"
        {...register("pic", {
          required: "프로필 사진의 url을 입력해주세요!",
        })}
        errors={errors}
      />
      <Input
        type="text"
        label="별명"
        {...register("nickname", {
          required: "별명을 입력해주세요!",
        })}
        errors={errors}
      />
      <Input
        type="text"
        label="소개"
        {...register("bio", {
          required: "소개를 입력해주세요!",
        })}
        errors={errors}
      />
    </VerticalForm>
  );
}

// react jsx에 내장되어 있는... 즉 원래 html element에도 있는 타입들은... 문자열로 쓸 수 있다! "a" "button" "input"

export default Register;
