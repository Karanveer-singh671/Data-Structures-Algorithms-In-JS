/*
Question multiply by 7 without * or +
*/

const multBySeven = (n) => {
  // n << 3 is 8 * n, n << 2 is 4 * n n << 1 is 2 * n so just do n << 3 = n *8 - n  since 8n - n = 7n
  return ((n << 3) - n)
}