import * as React from "react";
import "./App.css";

const BOX_COUNT = 10;
const WHITE_HEX = "#ffffff";
const pallete = [
  "#e6e6e6",
  "#d2b48c",
  "#800000",
  "#7e181e",
  "#29f9ff",
  "#a8a8f8",
  "#5050f1",
  "#ffb3ba",
  "#ccff00",
  "#ff7f50",
  "#fa8072",
  "#bada55",
];

function App() {
  //1번 - 선택된 색이 여러개인 배열을 만든다 - BOX_COUNT 개인 배열을 만들어서 흰색으로 채운다
  //5번 - useState를 사용해 colors를 반응형(reactive) 상태로 만든다.
  const [colors, setColors] = React.useState(Array(BOX_COUNT).fill(WHITE_HEX)); // 문자열

  //6번 - addSelected 함수를 만들어
  function addSelected(hex: string) {
    setColors((old) => {
      // findIndex는 배열의 값 중에서 조건에 맞는 값이 있는 첫 번째 index를 찾는다!
      // hex 중에서 hex의 색이 white인 첫번째 index를 찾아낸다.
      const firstWhiteIndex = old.findIndex((hex) => hex === WHITE_HEX);
      if (firstWhiteIndex === -1) {
        // 인덱스를 못 찾으면! -1을 반환
        return old; // 원래 colors를 그대로 반환... 더 채울 하얀칸이 없으므로!
      }

      // 이미 바뀐 색은 old대로 놔두고
      const copy = [...old];
      // 찾아낸 첫 번째 인덱스에 hex값을 넣는다.
      copy[firstWhiteIndex] = hex;
      return copy; // newState !!!
    });
  }

  //7번 - deleteSelected 함수를 만들어
  function deleteSelected(targetIndex: number) {
    setColors((old) => {
      const copy = [...old];
      // targetIndex의 값을 흰색 헥스를 넣는다.
      copy[targetIndex] = WHITE_HEX;
      return copy; // newState !!!
    });
  }

  //9번 - 기본 텍스트를 넣어주기 위해 기본 텍스트를 상태로 만들어준다.
  const [colorSelection, setColorSelection] =
    React.useState("주조색:\n보조색:\n강조색:");

  const [explanation, setExplanation] = React.useState(
    "컨셉:\n주조색:\n보조색:\n강조색:\n배색 기법:"
  );

  return (
    <div className="App">
      <article>
        <table className="selectedContainer flex flex-row">
          {/* 2번 - map을 써서 배열의 값을 화면에 뿌려준다. */}
          {/* https://beta.reactjs.org/learn/rendering-lists */}
          <tr>
            {/* 7.2번 - targetIndex는 여기서 index를 받아온 값이다. */}
            {colors.map((color, index) => (
              // 3번 - 스타일에 map으로 받아온 color 문자열 값을 backgroundColor로 지정해준다.
              <td
                // 이게 선택한 칸의 index
                onClick={() => deleteSelected(index)}
                style={{
                  backgroundColor: color,
                }}
              >
                {color}
                {/* text node */}
              </td>
            ))}
          </tr>
        </table>
        {/* 8번 input은 text 줄바꿈이 안되므로 textarea를 사용해 서술칸을 만든다. */}
        {/* <input type="text" /> */}
        <textarea
          id="color-selection"
          placeholder={"주조색:\n보조색:\n강조색:"}
          value={colorSelection}
          // change event의 target인 textarea의 새로 변경된 값을
          // react의 colorSelection 상태에 세팅
          // 값을 동기화해주는 거에요.
          // https://beta.reactjs.org/learn/reacting-to-input-with-state
          onChange={(event) => setColorSelection(event.target.value)}
        />
        <textarea
          id="explanation"
          placeholder={"컨셉:\n주조색:\n보조색:\n강조색:\n배색 기법:"}
          value={explanation}
          // change event의 target인 textarea의 새로 변경된 값을
          // react의 colorSelection 상태에 세팅
          // 값을 동기화해주는 거에요.
          // https://beta.reactjs.org/learn/reacting-to-input-with-state
          onChange={(event) => setExplanation(event.target.value)}
        />
        <div id="pallete" className="flex flex-row flex-wrap">
          {/* 4번 - pallete도 값이 여러 개이므로 map을 사용한다. */}
          {pallete.map((hex) => (
            <button
              onClick={() => addSelected(hex)}
              className="roundButton"
              style={{ backgroundColor: hex }}
            >
              {hex}
            </button>
          ))}
        </div>
      </article>
    </div>
  );
}

export default App;
