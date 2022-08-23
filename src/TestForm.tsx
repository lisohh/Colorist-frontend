import * as React from "react";
import Pallete from "./pallete";
import "./TestForm.css";

// 8월 16일 2번
// https://www.radix-ui.com/docs/primitives/components/tabs#examples
// bun add @radix-ui/react-tabs
const QuizList = [
  "문제1번 내용",
  "문제2번 내용",
  "문제3번 내용",
  "문제4번 내용",
  "문제5번 내용",
  "문제6번 내용",
  "문제7번 내용",
  "문제8번 내용",
  "문제9번 내용",
  "문제10번 내용",
];

// 탭의 색깔에 명도/채도가 반영되면 좋겠다

function TestForm() {
  //9번 - 기본 텍스트를 넣어주기 위해 기본 텍스트를 상태로 만들어준다.
  const [mainColor, setMainColor] = React.useState("주조색:");

  const [subColor, setSubColor] = React.useState("보조색:");

  const [pointColor, setPointColor] = React.useState("강조색:");

  // const [colorSelection, setColorSelection] =
  // React.useState("주조색:\n보조색:\n강조색:");

  const [explanation, setExplanation] = React.useState(
    "컨셉:\n주조색:\n보조색:\n강조색:\n배색 기법:"
  );

  return (
    <article className="test-form">
      <div className="quiz-paragraph">
        <a className="category" href="">
          2022년도 - 제품
        </a>
        <h1 className="text-2xl mb-2">
          Q.{" "}
          {
            "따뜻하고 풍요로운 이미지와 차갑고 쓸쓸한 이미지 두가지를 연출해 보세요."
          }
        </h1>
        <h2 id="condition" className="text-lg">
          (3색 이상, 10칸 이상 배색)
        </h2>
      </div>
      <Pallete />
      {/* 8번 input은 text 줄바꿈이 안되므로 textarea를 사용해 서술칸을 만든다. */}
      {/* <input type="text" /> */}
      <p id="allColor">주보강 기입</p>
      <label htmlFor="main-color">주조색</label>
      <input
        id="color-selection"
        placeholder="주조색:"
        value={mainColor}
        // change event의 target인 textarea의 새로 변경된 값을
        // react의 mainColor 상태에 세팅
        // 값을 동기화해주는 거에요.
        // https://beta.reactjs.org/learn/reacting-to-input-with-state
        onChange={(event) => setMainColor(event.target.value)}
      />
      <label htmlFor="sub-color">보조색</label>
      <input
        id="color-selection"
        placeholder="보조색:"
        value={subColor}
        onChange={(event) => setSubColor(event.target.value)}
      />
      <label htmlFor="point-color">강조색</label>
      <input
        id="color-selection"
        placeholder="강조색:"
        value={pointColor}
        onChange={(event) => setPointColor(event.target.value)}
      />
      <label htmlFor="explanation" id="explanation">
        배색 설명
      </label>
      <textarea
        id="explanation"
        placeholder={"컨셉:\n주조색:\n보조색:\n강조색:\n배색 기법:"}
        value={explanation}
        onChange={(event) => setExplanation(event.target.value)}
      />
      <p id="allColor">주보강 기입</p>
      <label htmlFor="main-color">주조색</label>
      <input
        id="color-selection"
        placeholder="주조색:"
        value={mainColor}
        onChange={(event) => setMainColor(event.target.value)}
      />
      <label htmlFor="sub-color">보조색</label>
      <input
        id="color-selection"
        placeholder="보조색:"
        value={subColor}
        onChange={(event) => setSubColor(event.target.value)}
      />
      <label htmlFor="point-color">강조색</label>
      <input
        id="color-selection"
        placeholder="강조색:"
        value={pointColor}
        onChange={(event) => setPointColor(event.target.value)}
      />
      <label htmlFor="explanation" id="explanation">
        배색 설명
      </label>
      <textarea
        id="explanation"
        placeholder={"컨셉:\n주조색:\n보조색:\n강조색:\n배색 기법:"}
        value={explanation}
        onChange={(event) => setExplanation(event.target.value)}
      />
      <button id="save-button" type="submit" className="bg-yellow-300">
        저장하기
      </button>
    </article>
  );
}

export default TestForm;
