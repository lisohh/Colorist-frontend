import React from "react";
import "./Mypage.css";

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
          <label htmlFor="Solved-list">푼 문제 목록</label>
          <ul>
            <ol>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라 2022.7.23</ol>
            <ol>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라 2022.7.23</ol>
            <ol>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라 2022.7.23</ol>
            <ol>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라 2022.7.23</ol>
            <ol>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라 2022.7.23</ol>
            <ol>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라 2022.7.23</ol>
            <ol>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라 2022.7.23</ol>
            <ol>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라 2022.7.23</ol>
            <ol>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라 2022.7.23</ol>
            <ol>2022년도 1회차 1-2. 문제 제목 얼레벌레 블라블라 2022.7.23</ol>
          </ul>
        </div>
        <div className="btn-group">
          <button className="pagination-btn">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn btn-disabled">...</button>
          <button className="pagination-btn">99</button>
          <button className="pagination-btn">100</button>
        </div>
      </article>
    </div>
  );
}

export default Mypage;
