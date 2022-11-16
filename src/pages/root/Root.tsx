import React from "react";
import Carousel from "~/components/Carousel";

function Root() {
  return (
    <>
      <Carousel>
        <h3 className="text-3xl">대충 광고</h3>
        <h3 className="text-3xl">문제풀이</h3>
        <h3 className="text-3xl">역량배지</h3>
        <h3 className="text-3xl">컬러4회차</h3>
      </Carousel>
      <main>
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
                  <th>조회수</th>
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
      </main>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>lisohh</a>
            <a>mimik</a>
            <a>TamjungTokki</a>
          </div>
        </div>
        <div>
          <p>Copyright © 2022 - All right reserved by Team Mipokki</p>
        </div>
      </footer>
    </>
  );
}

// react jsx에 내장되어 있는... 즉 원래 html element에도 있는 타입들은... 문자열로 쓸 수 있다! "a" "button" "input"

export default Root;
