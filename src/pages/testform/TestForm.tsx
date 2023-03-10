import React, { useId } from "react";
import Pallete from "./Pallete";
import "./TestForm.css";
// import { saveColors } from "~/api"; // absolute 절대
import { Link, useParams } from "react-router-dom";
import Button from "~/components/Button";
import TextInput from "~/components/TextInput";
import useProblemList from "~/hooks/useProblemList";

// 8월 16일 2번
// https://www.radix-ui.com/docs/primitives/components/tabs#examples
// bun add @radix-ui/react-tabs
// 탭의 색깔에 명도/채도가 반영되면 좋겠다

function TestForm() {
  const problemList = useProblemList();
  const params = useParams(); // url에 있는 파라미터(path variable, dynamic routes)를 가져옴!
  // ?? 널 병합 연산자. 왼쪽이 null이나 undefined면 오른쪽의 값을 fallback으로 써라
  const quizId = parseInt((params["quizId"] as string | undefined) ?? "1"); // ex 1
  const quiz = problemList.find((problem) => problem.id === quizId);

  if (quiz === undefined) {
    // 타입 가드
    return (
      <Link to="/quizs">
        잘못된 문제 id : {quizId} 입니다! 문제 목록으로 돌아가려면 클릭하세요.
      </Link>
    );
  }

  return (
    <article className="test-form">
      {/* 0825 합동코칭 - 연결하기위해 form으로 감싸고 submit  */}

      <form
        className="flex flex-col gap-8"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.target as HTMLFormElement);

          const colors = formData.get("colors");
          const rawData = {
            box: JSON.parse(colors as string),
            ju: formData.getAll("ju"),
            bo: formData.getAll("bo"),
            gang: formData.getAll("gang"),
            answer: formData.getAll("answer"),
          };

          if (colors !== null) {
            // 전처리, preprocess
            const data = [
              {
                box: rawData.box.slice(0, 10),
                jubogang: {
                  ju: rawData.ju[0],
                  bo: rawData.bo[0],
                  gang: rawData.gang[0],
                },
                answer: rawData.answer[0],
              },
              {
                box: rawData.box.slice(10, 20),
                jubogang: {
                  ju: rawData.ju[1],
                  bo: rawData.bo[1],
                  gang: rawData.gang[1],
                },
                answer: rawData.answer[1],
              },
            ];
            alert(JSON.stringify(data));
            // saveColors(data as MyColors[]);
          }
        }}
      >
        <div>
          <Link
            to={`/quizs/${Math.min(
              Math.floor(Math.random() * problemList.length + 1),
              problemList.length
            )}`}
            className="btn btn-primary"
          >
            무작위 문제 보기
          </Link>
        </div>
        <div className="quiz-paragraph">
          <span>
            {quiz.year} {quiz.round} 기출
          </span>
          <h1 className="text-2xl my-2">Q. {quiz.title}</h1>
          <h2 id="condition" className="text-lg">
            {quiz.condition}
          </h2>
        </div>

        <Pallete isDouble={!quiz.type.endsWith("3")} />
        {/* 8번 input은 text 줄바꿈이 안되므로 textarea를 사용해 서술칸을 만든다. */}
        {/* <input type="text" /> */}
        <section className="flex flex-col">
          <h3 className="text-2xl mb-4">주보강 기입</h3>
          <ColorSelectionInput label="주조색" name="ju" />
          <ColorSelectionInput label="보조색" name="bo" />
          <ColorSelectionInput label="강조색" name="gang" />
          <label className="flex flex-col gap-2">
            <span className="text-xl">배색 설명</span>
            <textarea
              className="textarea bg-slate-100 min-h-32"
              name="answer"
              placeholder={"컨셉:\n주조색:\n보조색:\n강조색:\n배색 기법:"}
            />
          </label>
        </section>
        <section className="flex flex-col">
          <h3 className="text-2xl mb-4">주보강 기입</h3>
          <ColorSelectionInput label="주조색" name="ju" />
          <ColorSelectionInput label="보조색" name="bo" />
          <ColorSelectionInput label="강조색" name="gang" />
          <label className="flex flex-col gap-2">
            <span className="text-xl">배색 설명</span>
            <textarea
              className="textarea bg-slate-100 min-h-32"
              name="answer"
              placeholder={"컨셉:\n주조색:\n보조색:\n강조색:\n배색 기법:"}
            />
          </label>
        </section>
        <Button type="submit">저장할래요</Button>
      </form>
    </article>
  );
}

export default TestForm;

function ColorSelectionInput({ label, name }: { label: string; name: string }) {
  return (
    <TextInput
      className="input w-full bg-slate-100"
      type="text"
      placeholder={`${label}:`}
      name={name}
      label={label}
      errors={{}}
    />
  );
}
