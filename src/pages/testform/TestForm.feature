Feature: TestForm
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

# -----

Scenario: 화면 크기를 조절하면 버튼의 크기도 변경된다
  Given 파레트를 렌더하고
  When 화면 크기를 조절하면
  Then 버튼의 크기도 화면에 맞게 조절된다

Scenario: 탭을 클릭하면 원하는 팔레트로 변경할 수 있다
  Given 파레트를 렌더하고
  When 탭에서 원하는 팔레트 버튼을 클릭하면
  Then 원하는 팔레트로 변경된다

Scenario: 선택칸의 가로 길이를 마음대로 늘리거나 줄일 수 있다
  Given 선택칸을 렌더하고
  When 원하는 칸을 선택해서 잡아당기면
  Then 선택칸을 줄이거나 늘일 수 있다