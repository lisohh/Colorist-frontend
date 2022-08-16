Feature: Nav

Scenario: 네비게이터에서 메뉴를 클릭할 수 있다
  Given 메뉴와 네비게이터를 렌더하고
  When 버튼을 클릭하면
  Then 버튼에 해당하는 주소로 이동한다

Scenario: 문제의 해당 카테고리와 문제 내용이 화면 상단에 보인다.
  Given 선택된 문제를 렌더하고
  When 카테고리를 클릭하면
  Then 문제 리스트 주소로 이동한다.