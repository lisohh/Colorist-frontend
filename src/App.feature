Feature: App
# Gherkin

Scenario: 선택된 색깔 목록이 박스에 보인다
  # Given - before, 주어진 상황  
  Given 선택된 색깔들로 문제를 렌더하고
  # When - 사용자의 동작 (클릭, 키보드, 스크롤, 탭, 지우기, 복붙)
  # Then - after, 결과
  Then 선택된 색깔 목록이 보인다

Scenario: 팔레트의 버튼을 클릭하면 선택한 색깔이 추가된다
  Given 비어있는 문제를 렌더하고
  When 팔레트의 버튼을 클릭하면
  Then 가장 앞의 하얀색 칸이 선택한 색깔로 변한다

Scenario: 박스의 칸을 클릭하면 선택한 칸이 흰색으로 변한다
  Given 선택된 색깔들로 문제를 렌더하고
  When 박스의 칸을 클릭하면
  Then 선택한 칸이 흰색으로 변한다

Scenario: 주보강에 값을 입력할 수 있다
  Given 비어있는 칸을 렌더하고
  When 값을 입력하면
  Then 값이 입력된다

-----

Scenario: 네비게이터에서 메뉴를 클릭할 수 있다
  Given 메뉴와 네비게이터를 렌더하고
  When 버튼을 클릭하면
  Then 버튼에 해당하는 주소로 이동한다

Scenario: 문제의 해당 카테고리와 문제 내용이 화면 상단에 보인다.
  Given 선택된 문제를 렌더하고
  When 카테고리를 클릭하면
  Then 문제 리스트 주소로 이동한다.