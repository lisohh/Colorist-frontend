import React from "react";
import "./Mypage.css";
import { problemList } from "../qlists/problemList";
import SelectGroup from "../../components/SelectGroup";
import Pagination from "../../components/Pagination";

// const data2 = Array(10).fill(["2022년도", "1회차", "1-2", "문제 제목 얼레벌레 블라블라", "2022.7.23",])

function Mypage() {
  return (
    <div className="mypage">
      <article className="profile">
        <a href="#" className="profileImg">
          <img className="bubble" src="/blue_bubble.jpg"></img>
        </a>
        <div className="profile-text">
          <a href="#" className="edit-button">
            프로필 편집
          </a>
          <h2>닉네임은 자몽미믹토끼야아아아</h2>
          <h5>
            자기소개 안녕하세요
            <br /> 저는 누구누구입니다.
          </h5>
        </div>
        <div className="question-list">
          <h3 className="solved-list-heading ml-4 mt-4">푼 문제 목록</h3>
          <SelectGroup />
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
