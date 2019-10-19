export const fibonacci = (n: number) => {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};
