import React from "react";
import Button from "./Button";

export default function Pagination() {
  return (
    <div className="flex flex-row">
      <Button variant="ghost">이전 페이지</Button>
      <Button variant="ghost">1</Button>
      <Button variant="ghost">2</Button>
      <Button variant="ghost">3</Button>
      <Button variant="ghost">4</Button>
      <Button variant="ghost">5</Button>
      <Button variant="ghost">다음 페이지</Button>
    </div>
  );
}
