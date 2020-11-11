function fibDP() {
  // create a closure 
  // cache the first and second values in cache
	let cache = {};
	cache[0] = 0;
	cache[1] = 1;
	return function fib(n) {
    // inside closure check if value exists in cache
		if (n in cache) {
			return cache[n];
		} else {
      // store computed value in cache 
      cache[n] = fib(n - 1) + fib(n - 2);
      // return to go to next call in call stack
			return cache[n];
		}
	};
}
const fib = fibDP()
console.log(fib(10))