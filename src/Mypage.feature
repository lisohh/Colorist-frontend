Feature: Mypage

Scenario: 마이페이지에서 프로필 편집으로 이동할 수 있다
  Given 프로필을 렌더하고
  When 프로필 편집 버튼을 클릭하면
  Then 편집 페이지로 이동한다

Scenario: 마이페이지에서 문제페이지로 이동할 수 있다
  Given 문제 목록을 렌더하고
  When 링크를 클릭하면
  Then 링크에 해당하는 페이지로 이동한다