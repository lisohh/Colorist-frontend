import React from "react";
import "./Qlists.css";
import Pagination from "../../components/Pagination";
import SelectGroup from "../../components/SelectGroup";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import useProblemList from "~/hooks/useProblemList";

// const data2 = Array(10).fill(["2022년도", "1회차", "1-2", "문제 제목 얼레벌레 블라블라", "2022.7.23",])

function Mypage() {
  const problemList = useProblemList();
  return (
    <article className="Qpage">
      <h2 className="title text-center text-3xl my-12">문제 목록</h2>
      <section className="view-arrange"></section>
      <div className="most-viewed-list">
        <h3 className="mostViewed-Q-list-heading ml-4 mb-4 text-xl font-semibold">
          가장 많이 본 문제
        </h3>
        <table
          className="table table-zebra w-full my-4"
          aria-labelledby="Mostviewd-list-heading"
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
            {problemList.slice(0, 5).map((item, i) => (
              <tr key={i}>
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
      <section className="save-arrange"></section>
      <div className="most-solved-list">
        <h1 className="mostSolved-Q-list-heading gap-4 ml-4 mb-4 text-xl font-semibold">
          가장 많이 푼 문제
        </h1>
        <table
          className="table table-zebra w-full my-4"
          aria-labelledby="Mostsolved-list-heading"
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
            {problemList.slice(0, 5).map((item) => (
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
      <section className="all">
        <div className="question-list">
          <h3 className="all-Q-list-heading ml-4 mb-4 text-xl font-semibold">
            모든 문제
          </h3>
          <SelectGroup />
          <table
            className="table table-zebra w-full mb-8"
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
      </section>
      <footer className="flex flex-row justify-between">
        <Button>출력</Button>
        <Pagination />
        <div className="w-20 opacity-0">숨김</div>
      </footer>
    </article>
  );
}

export default Mypage;
