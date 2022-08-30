import React from "react";

function ExplanationForm() {
  const [mainColor, setMainColor] = React.useState("주조색:");

  const [subColor, setSubColor] = React.useState("보조색:");

  const [pointColor, setPointColor] = React.useState("강조색:");

  // const [colorSelection, setColorSelection] =
  // React.useState("주조색:\n보조색:\n강조색:");

  const [explanation, setExplanation] = React.useState(
    "컨셉:\n주조색:\n보조색:\n강조색:\n배색 기법:"
  );

  return (
    <>
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
    </>
  );
}

export default ExplanationForm;
