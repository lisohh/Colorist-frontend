import React from "react";
import "./Qlists.css";
import Pagination from "./Pagination";
import { problemList } from "./problemList";

// const data2 = Array(10).fill(["2022년도", "1회차", "1-2", "문제 제목 얼레벌레 블라블라", "2022.7.23",])

function Mypage() {
  return (
    <div className="mypage">
      <article className="profile">
        <div className="question-list">
          <h2 id="all-Q-list-heading">모든 문제</h2>
          <section className="select-group mb-1">
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
          </section>
          <table
            className="table table-zebra w-full"
            aria-labelledby="solved-list-heading"
          >
            <thead>
              <tr>
                <th>선택</th>
                <th>연도</th>
                <th>회차</th>
                <th>유형</th>
                <th>문제 이름</th>
                <th>푼 날짜</th>
              </tr>
            </thead>
            <tbody>
              {problemList.map((item) => (
                <tr>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-" />
                  </td>
                  <td>{item.year}</td>
                  <td>{item.round}</td>
                  <td>{item.type}</td>
                  <td>{item.title}</td>
                  <td>{item.solvedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer className="flex flex-row justify-between">
          <button type="button" className="w-20 bg-yellow-300">
            출력
          </button>
          <Pagination />
          <div className="w-20 opacity-0">숨김</div>
        </footer>
      </article>
    </div>
  );
}

export default Mypage;
