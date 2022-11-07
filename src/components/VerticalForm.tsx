import React from "react";
//1. bun add react-hook-form 을 터미널에 입력해서 설치
//2. import useForm
import { useForm, type DeepPartial } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "~/components/Button";

type VerticalFormProps = {
  title: string;
  onSubmit: (event: React.FormEvent) => void;
  children: React.ReactElement;
  submitLabel: string;
  after?: React.ReactElement | null;
};

function VerticalForm({
  title,
  onSubmit,
  children,
  submitLabel,
  after = null,
}: VerticalFormProps) {
  return (
    <article className="login-form max-w-screen-sm mx-auto p-4">
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <h2 className="text-4xl">{title}</h2>

        {children}

        <Button type="submit" className="w-full">
          {submitLabel}
        </Button>

        {after}
      </form>
    </article>
  );
}

export default VerticalForm;
