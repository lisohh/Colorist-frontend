import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "~/components/Carousel";
import Footer from "~/components/Footer";
import useProblemList from "~/hooks/useProblemList";
import { shuffle } from "~/utils/array";

// problem.title
// "국제대회 참석하는 50대 여성을 위한 한국 상징하는 한복디자인을 하려 한다. 전통문화 내포하면서도 격식있는 느낌이 연출되도록 연상 형용사를 제시하고 배색하라."
// .replace(/\./g, ".\n")
//  `국제대회 참석하는 50대 여성을 위한 한국 상징하는 한복디자인을 하려 한다.
// 전통문화 내포하면서도 격식있는 느낌이 연출되도록 연상 형용사를 제시하고 배색하라.`
// .split("\n")
//  [
// "국제대회 참석하는 50대 여성을 위한 한국 상징하는 한복디자인을 하려 한다.",
// "전통문화 내포하면서도 격식있는 느낌이 연출되도록 연상 형용사를 제시하고 배색하라."
// ]
// .map((line) => (<p>{line}</p>))
//  [
// <p>국제대회 참석하는 50대 여성을 위한 한국 상징하는 한복디자인을 하려 한다.</p>,
// <p>전통문화 내포하면서도 격식있는 느낌이 연출되도록 연상 형용사를 제시하고 배색하라.</p>
// ]

function Root() {
  const problemList = useProblemList();
  const [shuffled, setShuffled] = useState([] as ProblemT[]);
  useEffect(() => {
    setShuffled(shuffle(problemList));
  }, []);
  return (
    <>
      <Carousel>
        {shuffled.map((problem) => (
          <Link to={"/quizs/" + problem.id}>
            <h3 className="text-3xl">
              {problem.title
                .replace(/\./g, ".\n")
                .split("\n")
                .map((line) => (
                  <p>{line}</p>
                ))}
            </h3>
          </Link>
        ))}
      </Carousel>
      <article className="flex flex-col justify-center">
        <div className="w-full h-32 text-center flex flex-col justify-center align-middle">
          <h3 className="text-4xl">조회수가 많은 문제 TOP5</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-purple-zebra w-full">
            <thead>
              <tr className="text-center">
                <th>순위</th>
                <th>문제 제목</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <th>1</th>
                <td>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라</td>
                <td>1280</td>
              </tr>
              <tr className="text-center">
                <th>2</th>
                <td>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라</td>
                <td>256</td>
              </tr>
              <tr className="text-center">
                <th>3</th>
                <td>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라</td>
                <td>64</td>
              </tr>
              <tr className="text-center">
                <th>4</th>
                <td>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라</td>
                <td>50</td>
              </tr>
              <tr className="text-center">
                <th>5</th>
                <td>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라</td>
                <td>16</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
      <article className="flex flex-col justify-center">
        <div className="w-full h-32 text-center flex flex-col justify-center align-middle">
          <h3 className="text-4xl">저장수가 많은 문제 TOP5</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-yellow-zebra w-full">
            <thead>
              <tr className="text-center">
                <th>순위</th>
                <th>문제 제목</th>
                <th>저장수</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <th>1</th>
                <td>
                  <a>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라</a>
                </td>
                <td>1280</td>
              </tr>
              <tr className="text-center">
                <th>2</th>
                <td>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라</td>
                <td>256</td>
              </tr>
              <tr className="text-center">
                <th>3</th>
                <td>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라</td>
                <td>64</td>
              </tr>
              <tr className="text-center">
                <th>4</th>
                <td>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라</td>
                <td>50</td>
              </tr>
              <tr className="text-center">
                <th>5</th>
                <td>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라</td>
                <td>16</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </>
  );
}

// react jsx에 내장되어 있는... 즉 원래 html element에도 있는 타입들은... 문자열로 쓸 수 있다! "a" "button" "input"

export default Root;
