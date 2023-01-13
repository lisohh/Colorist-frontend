import React from "react";
import Button from "~/components/Button";

type VerticalFormProps = {
  title: string;
  onSubmit: (event: React.FormEvent) => void;
  children: React.ReactElement | React.ReactElement[];
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
    <article className="login-form max-w-screen-sm mx-auto p-4 my-0">
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <h2 className="text-3xl mx-auto">{title}</h2>

        {children}

        <Button type="submit" className="w-full  my-2">
          {submitLabel}
        </Button>

        {after}
      </form>
    </article>
  );
}

export default VerticalForm;
