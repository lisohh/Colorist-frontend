import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";
import allPallete from "./pallete.json";

// ["base", "deep"]
const palleteTypes = Object.keys(allPallete);
const BOX_COUNT = 10;
const WHITE_HEX = "#ffffff";

function Pallete() {
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

  return (
    <Tooltip.Provider delayDuration={800} skipDelayDuration={500}>
      <input type="text" name="colors" value={JSON.stringify(colors)} hidden />
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
              key={color + "-" + index}
            >
              {color}
            </td>
          ))}
        </tr>
      </table>
      <div id="pallete-box">
        <Tabs.Root
          defaultValue={Object.keys(allPallete)[0]}
          orientation="horizontal"
        >
          <Tabs.List
            aria-label="select pallete type"
            className="w-full tabs grid lg:grid-cols-14 sm:grid-cols-7 grid-cols-5 mb-4"
          >
            {/* 팔레트의 타입마다 Tabs.Trigger를 만들어준다*/}
            {palleteTypes.map((value) => (
              <Tabs.Trigger
                key={value}
                value={value}
                className="bg-yellow-200 tab tab-lifted p-1 md:p-2 mb-1"
                type="button"
              >
                {value}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {/* ["base", "deep"]*/}
          {/* 팔레트의 타입마다 Tabs.Content를 만들어준다*/}
          {palleteTypes.map((value) => (
            <Tabs.Content key={value} value={value}>
              <div id="pallete" className="flex flex-row flex-wrap">
                {/* 4번 - pallete도 값이 여러 개이므로 map을 사용한다. */}
                {allPallete[value].map(({ hex, colorName }, index) => (
                  <Tooltip.Root key={index}>
                    <Tooltip.Trigger asChild>
                      <button
                        type="button"
                        onClick={() => addSelected(hex)}
                        className="roundButton"
                        style={{ backgroundColor: hex }}
                      >
                        {colorName}
                      </button>
                    </Tooltip.Trigger>
                    <Tooltip.Content className="tooltip-content">
                      {hex}
                      <Tooltip.Arrow
                        className="tooltip-arrow"
                        width="20"
                        height="10"
                      />
                    </Tooltip.Content>
                  </Tooltip.Root>
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </Tooltip.Provider>
  );
}

export default Pallete;
