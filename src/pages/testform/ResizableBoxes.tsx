import React, { useEffect, useRef, useState } from "react";

// 구조 분해 할당
// https://beta.reactjs.org/learn/passing-props-to-a-component
function ResizableBoxes({
  colors,
  deleteSelected,
}: {
  colors: string[];
  deleteSelected: (targetIndex: number) => void;
}) {
  const BOX_COUNT = colors.length;

  const [segments, setSegments] = useState<number[]>(
    Array(BOX_COUNT).fill(1 / BOX_COUNT)
  );
  const [oldSegments, setOldSegments] = useState<number[]>(
    Array(BOX_COUNT).fill(1 / BOX_COUNT)
  );
  const [startX, setStartX] = useState(0);
  const [changingIndex, setChangingIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    //마우스가 움직일 때 마다 박스 크기를 조절해주는 핸들러
    function moveHandler(e: MouseEvent) {
      if (isChanging) {
        // 처음 시작할 때 왼쪽 박스랑, 오른쪽 박스 크기를 가져온다
        const left = oldSegments[changingIndex];
        const right = oldSegments[changingIndex + 1];

        // 왼쪽 오른쪽 박스 너비의 합에서...
        // 최대는? 합 - 1/16
        // 최소 1/16
        const MIN_RATIO = 1 / 32;
        const maxRatio = left + right - MIN_RATIO;

        // 현재 마우스 위치와, 꾹 누르기 시작한 위치와의 차이
        const diff = e.clientX - startX;
        // 마우스가 움직인 변위가... 전체 크기에서 비율로 얼마를 차지하는지?

        const width = tableRef.current?.clientWidth ?? 480;

        const diffAsRatio = diff / width;

        // const 최댓값 = 1 / 2;
        // Math.min(1, 최댓값); // => 1/2 최댓값까지 가능!
        // Math.min(1 / 3, 1 / 2); // => 1/3

        // const 최솟값 = 1 / 16;
        // Math.max(1 / 2, 최솟값); // => 1/2
        // Math.max(0, 최솟값); // => 1/16

        const newLeft = Math.max(
          Math.min(left + diffAsRatio, maxRatio),
          MIN_RATIO
        );
        const newRight = Math.max(
          Math.min(right - diffAsRatio, maxRatio),
          MIN_RATIO
        );
        const newSegments = [...oldSegments];
        newSegments[changingIndex] = newLeft;
        newSegments[changingIndex + 1] = newRight;
        setSegments(newSegments);
      }
    }

    // 1. 마우스를 떼었을 때... 더 이상 변경되지 않게 해주는 친구
    function upHandler() {
      // 2.
      setIsChanging(false);
    }
    // 이 두 핸들러를 윈도우(화면)에 달아줌
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", upHandler);

    // cleanup => 3.
    return () => {
      // 핸들러를 윈도우에서 떼어줌...
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", upHandler);
    };
    // 의존성 배열에 isChanging이 false로 변하면?
  }, [isChanging, oldSegments, startX]);

  return (
    <table ref={tableRef} className="selectedContainer w-full">
      <tbody>
        <tr className="flex flex-row h-48">
          {segments.map((segment, i) => (
            <td
              className="flex flex-row p-0"
              key={i}
              style={{
                width: `${segment * 100}%`,
                backgroundColor: colors[i],
              }}
            >
              <div
                className="h-full w-full"
                onClick={() => deleteSelected(i)}
              />
              {i < segments.length - 1 && (
                <div
                  className="bg-blue-600 w-0.5 hover:w-2 transition-all p-0 m-0 h-full cursor-pointer"
                  //시작 좌표를 기록하기 위해 모서리를 꾹 누르면
                  onMouseDown={(e) => {
                    console.log("x", e.clientX, "y", e.clientY);
                    setStartX(e.clientX); // 시작 x좌표
                    setChangingIndex(i); // 바꾸려는 그 인덱스
                    setOldSegments(segments); // 시작할 때 박스 크기
                    setIsChanging(true); // 변경 중임을 알려주는 flag
                  }}
                />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
  // https://tailwindcss.com/docs/cursor
}

export default ResizableBoxes;

/*
전체 박스의 크기는 밖에서 주입할 수 있어야 한다.
예를 들어 전체 크기가 500픽셀이다!

칸이 3개있는 경우를 예로 들어보자

기븐
|  |  |    |
1/4 1/4 1/2
When
오른쪽 경계를 클릭하면
Then
변경 중 모드 => 시작 좌표를 기록!
When
마우스를 움직이면
Then
시작 좌표와 현재 좌표의 차이만큼...
|  |    |  |
왼쪽에 있는 칸은 늘어나고, 오른쪽에 있는 칸은 줄어들어야 한다
When
마우스를 최소간격보다 멀리 가면... 더 이상 반영되지 않는다!
Then
오른쪽에 있는 칸이 최소간격보다 작아질 수 없으니...
*/
