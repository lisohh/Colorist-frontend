import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import Input from "~/components/Input";
import VerticalForm from "~/components/VerticalForm";

async function getOldProfile() {
  return {
    pic: "/blue_bubble.jpg",
    nickname: "stelo",
    bio: "행복한 컬러리스트 공부",
  };
}

function ProfileEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<Omit<UserInfoT, "email">>({
    defaultValues: {
      password: "",
      pic: "",
      nickname: "",
      bio: "",
    },
  });

  const pic = watch("pic");

  useEffect(() => {
    getOldProfile().then((old) => {
      reset(old);
    });
  }, []);

  return (
    <VerticalForm
      title="프로필 편집"
      submitLabel="프로필 저장하기"
      onSubmit={handleSubmit(async (data) => {
        alert(JSON.stringify(data));
      })}
    >
      <>
        <Input
          type="password"
          label="비밀번호"
          {...register("password", {
            required: "비밀번호를 입력해주세요!",
          })}
          errors={errors}
        />
        {pic && <img src={pic} className="w-48" />}
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
        <Input type="text" label="소개" {...register("bio")} errors={errors} />
      </>
    </VerticalForm>
  );
}

export default ProfileEdit;
