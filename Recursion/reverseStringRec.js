function reverseStringRecursive(str) {
	if (str === "") {
		return "";
	} else {
		return reverseStringRecursive(str.substr(1)) + str.charAt(0);
	}
}

reverseStringRecursive("git push origin master lives on");
