export function number(n) {
  return new Promise((resolve, reject) => {
    if (n > 0) {
      resolve(n * n);
    } else {
      reject(error);
    }
  });
}
