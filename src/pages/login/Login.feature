Feature: Login

Scenario: login 할 수 있다
  Given login form 렌더하고
  When 이메일과 비밀번호를 입력하고
  When "로그인" button을 클릭하면
  Then 환영합니다 문구가 뜬다!
  Then nav의 login이 프로필 사진과 이름으로 바뀐다