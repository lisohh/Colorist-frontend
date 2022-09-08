import React, { useEffect, useState } from "react";

const colors = ["red", "green", "blue"];

const width = 512;

function ResizableBoxes() {
  const [segments, setSegments] = useState([1 / 4, 1 / 4, 1 / 2]);
  const [oldSegments, setOldSegments] = useState([1 / 4, 1 / 4, 1 / 2]);
  const [startX, setStartX] = useState(0);
  const [changingIndex, setChangingIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [nowX, setNowX] = useState(0);

  useEffect(() => {
    function moveHandler(e: MouseEvent) {
      setNowX(e.clientX);
      if (isChanging) {
        const diff = e.clientX - startX;

        const left = oldSegments[changingIndex];
        const right = oldSegments[changingIndex + 1];

        // 1/16

        // 4/16 8/16    => 3/4
        // 5/16
        // 11/16 1/16 => 3/4

        // 1/8 7/16 1/16 1/4 1/8
        const maxRatio = left + right - 1 / 16;

        const diffAsRatio = diff / width;
        const newLeft = Math.max(
          Math.min(left + diffAsRatio, maxRatio),
          1 / 16
        );
        const newRight = Math.max(
          Math.min(right - diffAsRatio, maxRatio),
          1 / 16
        );
        const newSegments = [...oldSegments];
        newSegments[changingIndex] = newLeft;
        newSegments[changingIndex + 1] = newRight;
        setSegments(newSegments);
        console.log(newSegments);
      }
    }
    function upHandler() {
      setIsChanging(false);
    }
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", upHandler);
    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", upHandler);
    };
  }, [isChanging, oldSegments, startX]);

  return (
    <div>
      <div
        style={{ width: `${512}px`, height: "200px" }}
        className="flex flex-row"
      >
        {segments.map((segment, i) => (
          <>
            <div
              style={{
                width: `${segment * 100}%`,
                backgroundColor: colors[i],
              }}
              className="h-full"
            >
              메롱
            </div>
            <div
              className="bg-white w-2 p-0 m-0 h-full cursor-pointer"
              onMouseDown={(e) => {
                console.log("x", e.clientX, "y", e.clientY);
                setStartX(e.clientX);
                setChangingIndex(i);
                setOldSegments(segments);
                setIsChanging(true);
              }}
            ></div>
          </>
        ))}
      </div>
      <p>
        isChanging: {String(isChanging)}, changingIndex: {changingIndex}
      </p>
      <p>
        startX: {startX}, nowX: {nowX}, diff: {nowX - startX}
      </p>
      <p>segments: {JSON.stringify(segments)}</p>
    </div>
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
웬
오른쪽 경계를 클릭하면
덴
변경 중 모드 => 시작 좌표를 기록!
웬
마우스를 움직이면
덴
시작 좌표와 현재 좌표의 차이만큼...
|  |    |  |
왼쪽에 있는 칸은 늘어나고, 오른쪽에 있는 칸은 줄어들어야 한다
웬
마우스를 최소간격보다 멀리 가면... 더 이상 반영되지 않는다!
덴
오른쪽에 있는 칸이 최소간격보다 작아질 수 없으니...
*/
