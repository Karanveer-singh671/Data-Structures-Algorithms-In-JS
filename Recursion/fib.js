const fibIterative = (n) => {
	// O(n)
	let arr = [0, 1];
	for (let i = 2; i <= n; i++) {
		arr.push(arr[i - 2] + arr[i - 1]);
	}
	return arr[n];
};
const fibRecursive = (n) => {
	// O(2^n)
	if (n < 2) {
		return n;
	}
	return fibRecursive(n - 1) + fibRecursive(n - 2);
};
