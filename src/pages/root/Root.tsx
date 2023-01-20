import { invariant } from "@remix-run/router";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "~/components/Carousel";
import ErrorBoundary from "~/components/ErrorBoundary";
import Table from "~/components/Table";
import useProblemList from "~/hooks/useProblemList";
import useSaves from "~/hooks/useSaves";
import useViews from "~/hooks/useViews";
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

// 기억 방식은 여러가지가 있는데~
// 사람에게 가장 좋은 방식 중 하나는 "이야기"다
// 정교화, 감각, 부호화, 청킹, 구조화, 문제 해결
// 구조화, 위계적 조직화 => 단계, 분류, 추상 => 구체, 목차

// 정적인 부분과 동적인 부분을 나눈다
// 컴포넌트로 쪼갠다 => tr , th, td
// state, data를 파악 => 순위, 문제 제목, 조회수
// 데이터를 어디서, 어떻게 얻을 수 있지?

// 가지고 있는 데이터? 현재 상태, input, before
// problemList (title)
// rank ???
// views ???

// output, after, 목표
[
  {
    problemId: 10, // 문제 페이지로 가기 위해!
    rank: 1,
    title: "2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라",
    views: 1280,
  },
];

// mock api
// custom hook 으로 가져온다
// 가져온 데이터를 component로 렌더한다~

// problemList, problemId
// problem
// problem.title

// 인출 단서! 점화 효과...
// 표지판이 많아야 한다!
// 이야기? 상황, 맥락

// anki => 간격을 둔 복습!

// 명제 지식 -> 문제 해결에 도움이 안돼
// 리액트는 선언적이다 (명제) vs 명령적으로 상태 에러가 날 때 => 선언적으로 내가 뭘 그리고 싶은지만 쓰면 편하다! (문제 => 해결)
// find란 목록에서 아이템을 찾아주는 메서드다~
// 이 지식을 쓰는 상황, 필요한 상황 => 내가 어떻게 해결할지를 상상!

// 강의나 글이나 책에서... 명제로 설명을 하면. 이야기로 바꾸는 연습을 한다.

// 고통 받는 개발자를 상상한다! return 을 빼먹지 말자 vs "왜 화면에 아무 것도 안 나오는 거야 ㅠㅠ" => 하지만 return을 빼먹지 않지! (개운!)
// 광고에서 이런 구조를 많이 사용한다. 광고를 보면 스토리구조를 배울 수 있음! 더 기억 잘나!

// Root -> useViews <- 인터페이스 -> api
// 어떤 모듈에서 밖에 public하게 공개한 export한 것들 === 그 모듈의 공개 '인터페이스'
// public? 캡슐화?
// 내부를 잘 몰라도, 겉에 공개된 것만 보고 쉽게 쓴다~

function Root() {
  const problemList = useProblemList();
  const views = useViews();
  const saves = useSaves();
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
      <article className="flex flex-col justify-center gap-4">
        <div className="w-full h-32 text-center flex flex-col justify-center align-middle">
          <h3 className="text-4xl">조회수가 많은 문제 TOP5</h3>
        </div>
        <div className="overflow-x-auto">
          <ErrorBoundary>
            <Table
              headList={["순위", "연도", "회차", "유형", "문제 제목", "조회수"]}
              dataList={views}
              getKey={(view) => view.rank}
              zebra="purple"
              Row={({ data: { views, problemId, rank } }) => {
                const problem = problemList.find(
                  (problem) => problem.id === problemId
                );
                invariant(
                  problem,
                  "문제 정보를 찾지 못했습니다. 개발자가 금방 고칠테니 기다려주세요."
                );

                return (
                  <tr className="text-center">
                    <th>{rank}</th>
                    <td>{problem.year}</td>
                    <td>{problem.round}</td>
                    <td>{problem.type}</td>

                    <td>
                      <Link to={`/quizs/${problem.id}`}>{problem.title}</Link>
                    </td>

                    <td>{views}</td>
                  </tr>
                );
              }}
            />
          </ErrorBoundary>
        </div>
      </article>
      <article className="flex flex-col justify-center gap-4">
        <div className="w-full h-32 text-center flex flex-col justify-center align-middle">
          <h3 className="text-4xl">저장수가 많은 문제 TOP5</h3>
        </div>
        <div className="overflow-x-auto ">
          <ErrorBoundary>
            <Table
              headList={["순위", "연도", "회차", "유형", "문제 제목", "저장수"]}
              dataList={saves}
              getKey={(save) => save.rank}
              zebra="yellow"
              Row={({ data: { saves, problemId, rank } }) => {
                const problem = problemList.find(
                  (problem) => problem.id === problemId
                );

                const [error, setError] = useState<undefined | Error>(
                  undefined
                );
                invariant(
                  problem,
                  "문제 정보를 찾지 못했습니다. 개발자가 금방 고칠테니 기다려주세요."
                );

                return (
                  <tr className="text-center">
                    <th>{rank}</th>
                    <td>{problem.year}</td>
                    <td>{problem.round}</td>
                    <td>{problem.type}</td>
                    <td>
                      <Link to={`/quizs/${problem.id}`}>{problem.title}</Link>
                    </td>
                    <td>{saves}</td>
                  </tr>
                );
              }}
            />
          </ErrorBoundary>
        </div>
      </article>
    </>
  );
}

// react jsx에 내장되어 있는... 즉 원래 html element에도 있는 타입들은... 문자열로 쓸 수 있다! "a" "button" "input"

export default Root;
