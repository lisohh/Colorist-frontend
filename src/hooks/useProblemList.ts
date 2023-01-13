import { useState, useEffect } from "react";
import * as api from "../api";

export default function useProblemList() {
  const [problemList, setProblemList] = useState<ProblemT[]>([]);

  useEffect(() => {
    api.getProblemList().then((data) => setProblemList(data));
  }, []);
  return problemList;
}

// 요청이 불필요하게 여러 번 날아가네? => 캐시를 하자!
// 로딩 중인 상태를 어떻게 처리하지? => 삼항 연산자나 if문...

// react query   서버 데이터 캐시 전문! 쓰는 곳도 많지만... 가장 복잡하다!
// jotai         적당히 쓰는 곳도 있고 간단하지만... 흠... api에 최적화되진 않은
// react suspend 가장 쉽지만... 마이너
