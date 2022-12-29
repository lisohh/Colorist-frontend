import React from "react";
import { problemList } from "../qlists/problemList";
import SelectGroup from "../../components/SelectGroup";
import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";

// const data2 = Array(10).fill(["2022년도", "1회차", "1-2", "문제 제목 얼레벌레 블라블라", "2022.7.23",])

function Mypage() {
  return (
    <div className="mypage">
      <article className="flex flex-col gap-2">
        <div className="w-full flex flex-col sm:flex-row pt-16 pb-16 gap-2">
          <div className="h-full w-full sm:w-1/2 lg:w-1/3 flex justify-center align-middle">
            <a href="#" className="avatar">
              <div className="w-48 h-48 rounded-full">
                <img src="/blue_bubble.jpg" />
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/mypage/edit" className="btn btn-secondary">
              프로필 편집
            </Link>
            <div>
              <h3 className="text-lg">닉네임</h3>
              자몽
            </div>
            <div>
              <h3 className="text-lg">자기소개</h3>
              안녕하세요. 저는 누구누구입니다.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl">푼 문제 목록</h3>
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
                  <Link to={"/quizs/" + item.id} className="contents">
                    <td>
                      <input type="checkbox" className="checkbox checkbox-" />
                    </td>
                    <td>{item.year}</td>
                    <td>{item.round}</td>
                    <td>{item.type}</td>
                    <td>{item.title}</td>
                    <td>{item.solvedAt}</td>
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer className="flex flex-row justify-between">
          <button type="button" className="btn btn-secondary">
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
