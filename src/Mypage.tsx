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
          <h5>자기소개 안녕하세요 저는 누구누구입니다.</h5>
        </div>
        <div className="question-list">
          <label htmlFor="Solved-list">푼 문제 목록</label>
        </div>
      </article>
    </div>
  );
}

export default Mypage;
