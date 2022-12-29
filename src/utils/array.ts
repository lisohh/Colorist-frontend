export function shuffle<T>(array: T[]): T[] {
  const copied = [...array];
  copied.sort(() => Math.random() - 0.5); //부수 효과
  return copied;
}

export function repeat<T>(array: T[], times: number): T[] {
  let result = array;
  for (let i = 1; i < times; i++) {
    result = result.concat(array);
  }
  return result;
}
