import * as React from "react";
import { useEffect, useState } from "react";

const colorGradation: string[] = [
  "linear-gradient(45deg, #00C9FF 0%, #92FE9D 100%)",
  "linear-gradient(45deg, #FC466B 0%, #3F5EFB 100%)",
  "linear-gradient(45deg, #f8ff00 0%, #3ad59f 100%)",
  "linear-gradient(45deg, #efd5ff 0%, #515ada 100%)",
  "linear-gradient(45deg, #d53369 0%, #daae51 100%)",
  "linear-gradient(45deg, #e3ffe7 0%, #d9e7ff 100%)",
  "linear-gradient(45deg, #fcff9e 0%, #c67700 100%)",
  "linear-gradient(45deg, #74EBD5 0%, #9FACE6 100%)",
  "linear-gradient(45deg, #FEE140 0%, #FA709A 100%)",
  "linear-gradient(45deg, #3EECAC 0%, #EE74E1 100%)",
];

function shuffle<T>(array: T[]) {
  const copied = [...array];
  copied.sort(() => Math.random() - 0.5); //부수 효과
  return copied;
}

function Carousel({ children }: { children: React.ReactElement[] }) {
  const start = 0;
  const end = children.length - 1;

  const [colorShuffled, setColorShuffled] = useState(
    [] as typeof colorGradation
  );
  useEffect(() => {
    setColorShuffled(shuffle(colorGradation));
  }, []);
  return (
    <header className="carousel w-full h-48">
      {children.map((child, i) => (
        <div
          id={"slide" + i}
          style={{ background: `${colorGradation[i]}` }}
          className="carousel-item relative w-full bg-primary flex flex-col justify-center align-middle text-center"
        >
          <a
            href={"#slide" + (i === start ? end : i - 1)}
            className="btn btn-circle absolute top-1/2 transform -translate-y-1/2 left-5"
          >
            ❮
          </a>
          {child}
          <a
            href={"#slide" + (i === end ? 0 : i + 1)}
            className="btn btn-circle absolute top-1/2 transform -translate-y-1/2 right-5"
          >
            ❯
          </a>
        </div>
      ))}
    </header>
  );
}

// "slide" + 1 + 1 === "slide11"
// "slide" + (1 + 1) === "slide2"

export default Carousel;
