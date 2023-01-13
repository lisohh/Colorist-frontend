type MyColors = {
  jubogang: {
    ju: string;
    bo: string;
    gang: string;
  };
  box: Array<{ color: string; width: number }>;
  answer: string;
};

type UserInfoT = {
  email: string;
  password: string;
  pic: string; // url
  nickname: string;
  bio: string;
};

type ErrorData<T> = {
  [key in keyof T]: { message?: string };
};

type ProblemT = {
  year: string;
  round: string;
  type: string;
  title: string;
  condition: string;
  solvedAt: string;
  id: number;
};
