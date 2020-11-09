class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}
	// _ standard for private property
	_hash(key) {
		let hash = 0;
		for (let index = 0; index < key.length; index++) {
			hash = (hash + key.charCodeAt(i) * index) % this.data.length;
		}
		return hash;
	}
	set(key, value) {
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
	}
	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				// check ith bucket's key value
				if (currentBucket[i][0] === key) {
					// return ith bucket's value
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}
	keys() {
		const keysArray = [];
		for (let i = 0; i < array.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0][0]);
			}
		}
		return keysArray;
	}
}
