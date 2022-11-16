import * as React from "react";

function Carousel({ children }: { children: React.ReactElement[] }) {
  const start = 0;
  const end = children.length - 1;

  return (
    <header className="carousel w-full h-48">
      {children.map((child, i) => (
        <div
          id={"slide" + i}
          className="carousel-item relative w-full bg-primary flex flex-col justify-center align-middle text-center"
        >
          {child}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={"#slide" + (i === start ? end : i - 1)}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={"#slide" + (i === end ? 0 : i + 1)}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </header>
  );
}

// "slide" + 1 + 1 === "slide11"
// "slide" + (1 + 1) === "slide2"

export default Carousel;
