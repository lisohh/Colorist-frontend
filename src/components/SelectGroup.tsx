import React from "react";

function SelectGroup() {
  return (
    <div className="select-group mb-1">
      <select className="select w-32 mr-4 pop-box-shadow text-center text-base">
        <option disabled selected>
          2022
        </option>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
      </select>
      <select className="select w-32 mr-4 pop-box-shadow text-center text-base">
        <option disabled selected>
          1회차
        </option>
        <option>2회차</option>
        <option>3회차</option>
      </select>
      <select className="select w-40 mr-4 pop-box-shadow text-center text-base">
        <option disabled selected>
          1,2번 유형
        </option>
        <option>3번 유형</option>
      </select>
    </div>
  );
}

export default SelectGroup;
