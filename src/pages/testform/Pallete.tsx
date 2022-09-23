import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";
import allPallete from "./pallete.json";
import ResizableBoxes from "./ResizableBoxes";

// ["base", "deep"]
// 밑의 코드 잘 이해하도록 노력하기 - 화요일에 한번 더 복습 + 타입스크립트 기본기

// typeof 값의 type을 꺼내줌
type AllPalleteT = typeof allPallete;
// 이 객체의 key들의 타입
type AllPalleteKeysT = keyof AllPalleteT;

// type assertion => as T  T 타입으로 친다
const palleteTypes = Object.keys(allPallete) as AllPalleteKeysT[]; // 키들로 이루어진 배열으로 친다
const BOX_COUNT = 10;
const WHITE_HEX = "#ffffff";

function Pallete() {
  const [colors, setColors] = React.useState<string[]>(
    Array(BOX_COUNT * 2).fill(WHITE_HEX)
  ); // 문자열

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
      <input
        type="text"
        name="colors"
        value={JSON.stringify(colors)}
        hidden={true}
      />
      <div className="flex flex-row">
        <ResizableBoxes
          colors={colors.slice(0, BOX_COUNT)}
          deleteSelected={deleteSelected} // 1을 받으면 1을 삭제
        />
        <ResizableBoxes
          colors={colors.slice(BOX_COUNT, 2 * BOX_COUNT)}
          deleteSelected={(i) => deleteSelected(i + BOX_COUNT)} // 1을 받아도 => 11을 넘겨야
        />
      </div>
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
                className="bg-yellow-200 tab tab-lifted p-1 h-10 leading-none text-black"
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
