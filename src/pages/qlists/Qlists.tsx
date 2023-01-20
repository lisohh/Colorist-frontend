import React from "react";
import "./Qlists.css";
import Pagination from "../../components/Pagination";
import SelectGroup from "../../components/SelectGroup";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import useProblemList from "~/hooks/useProblemList";
import Table from "~/components/Table";

// const data2 = Array(10).fill(["2022년도", "1회차", "1-2", "문제 제목 얼레벌레 블라블라", "2022.7.23",])

function Mypage() {
  const problemList = useProblemList();
  return (
    <article className="Qpage flex flex-col gap-4">
      <h2 className="title text-center text-4xl my-12">문제 목록</h2>
      <SelectGroup />
      <Table
        headList={["선택", "연도", "회차", "유형", "문제 제목", "푼 날짜"]}
        headRatio={[
          "w-1/12",
          "w-1/12",
          "w-1/12",
          "w-1/12",
          "w-7/12",
          "w-2/12 lg:w-1/12",
        ]}
        dataList={problemList}
        getKey={(problem) => problem.id}
        zebra="purple"
        className="table-fixed"
        Row={({ data: { id, year, round, type, title, solvedAt } }) => {
          return (
            <tr className="text-center text-xs lg:text-base">
              <th className="px-1 lg:px-2">
                <input type="checkbox" className="checkbox checkbox-" />
              </th>
              <td className="px-1 lg:px-2">{year}</td>
              <td className="px-1 lg:px-2">{round}</td>
              <td className="px-1 lg:px-2">{type}</td>

              <td className="px-1 lg:px-2 truncate break-words">
                <Link to={`/quizs/${id}`}>{title}</Link>
              </td>

              <td className="px-1 lg:px-2">{solvedAt}</td>
            </tr>
          );
        }}
      />
      <footer className="flex flex-row justify-between">
        <Button>출력</Button>
        <Pagination />
        <div className="w-20 opacity-0">숨김</div>
      </footer>
    </article>
  );
}

export default Mypage;
function invariant(
  problem:
    | {
        year: string;
        round: string;
        type: string;
        title: string;
        condition: string;
        solvedAt: string;
        id: number;
      }
    | undefined,
  arg1: string
) {
  throw new Error("Function not implemented.");
}
