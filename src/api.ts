import { problemList } from "./pages/qlists/problemList";

const HOST = "http://localhost:8000";

// wrapping 감싼다
// 추상화, 캡슐화
// => 1. 쓰기 쉽다. 2. 나중에 교체하기 쉽다 3. 실수하기 어렵다
async function post<T>(path: string, data: T) {
  return fetch(HOST + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function saveColors(data: MyColors[]) {
  return post("/colors", data);
}

// 회원가입
export async function join(data: UserInfoT) {
  return post("/auth/join", data);
}

// login
export async function login(data: Pick<UserInfoT, "email" | "password">) {
  return post("/auth/login", data);
}

// 백엔드에서 api schema를 정의해서 type과 client generation을 해주면 좋음...

// fetch("/problemList").then(res => res.json())

export async function getProblemList() {
  return problemList;
}

// fetch란? Request => Response
export async function getViews() {
  return [
    {
      rank: 1,
      problemId: 1,
      views: 2000,
    },
    {
      rank: 2,
      problemId: 2,
      views: 1000,
    },
    {
      rank: 3,
      problemId: 3,
      views: 500,
    },
    {
      rank: 4,
      problemId: 4,
      views: 250,
    },
    {
      rank: 5,
      problemId: 5,
      views: 125,
    },
  ];
}

export async function getSaves() {
  return [
    {
      rank: 1,
      problemId: 1,
      saves: 2000,
    },
    {
      rank: 2,
      problemId: 2,
      saves: 1000,
    },
    {
      rank: 3,
      problemId: 3,
      saves: 500,
    },
    {
      rank: 4,
      problemId: 4,
      saves: 250,
    },
    {
      rank: 5,
      problemId: 5,
      saves: 125,
    },
  ];
}
