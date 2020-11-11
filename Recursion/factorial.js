const factorialIterative = (n) => { // O(n)
	if (n <= 2) {
		return n;
	}
	let answer = 1;
	for (let i = 2; i <= n; i++) {
		answer = answer * i;
	}
	return answer;
};

const factorialRecursive = (n) => { // O(n)
	if (n <= 2) {
		return n;
	}
	return n * factorialRecursive(n - 1);
};
