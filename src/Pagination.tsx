import React from "react";

export default function Pagination() {
  return (
    <div className="flex flex-row">
      <button className="btn btn-ghost">이전 페이지</button>
      <button className="btn btn-ghost">1</button>
      <button className="btn btn-ghost">2</button>
      <button className="btn btn-ghost">3</button>
      <button className="btn btn-ghost">4</button>
      <button className="btn btn-ghost">5</button>
      <button className="btn btn-ghost">다음 페이지</button>
    </div>
  );
}
