const HOST = "http://localhost:8000";

// wrapping 감싼다
// 추상화, 캡슐화
// => 1. 쓰기 쉽다. 2. 나중에 교체하기 쉽다 3. 실수하기 어렵다
function post<T>(path: string, data: T) {
  return fetch(HOST + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function saveColors(data: MyColors[]) {
  return post("/colors", data);
}

// 회원가입
export function join(data: UserInfoT) {
  return post("/auth/join", data);
}

// login
export function login(data: UserInfoT) {
  return post("/auth/login", data);
}

// 백엔드에서 api schema를 정의해서 type과 client generation을 해주면 좋음...
