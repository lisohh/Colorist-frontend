Feature: Nav

Scenario: 네비게이터에서 원하는 페이지로 이동할 수 있다
  Given 메뉴와 네비게이터를 렌더하고
  When 링크를 클릭하면
  Then 링크에 해당하는 페이지로 이동한다

Scenario: 문제에 해당하는 카테고리로 이동할 수 있다
  Given 선택된 문제를 렌더하고
  When 카테고리를 클릭하면
  Then 문제 리스트 주소로 이동한다

  # 사용자 입장에서 작성하세요 

#drawer
Scenario: 메뉴를 누르고 원하는 페이지로 이동할 수 있다
  Given 메뉴와 네비게이터를 렌더하고
  When 메뉴버튼을 클릭하면
  Then 버튼을 클릭해 원하는 페이지로 이동한다