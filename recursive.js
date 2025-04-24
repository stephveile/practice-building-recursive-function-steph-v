function reverseString(string) {

    // Base Case:
    if (string === "") {
        return "";
    }

    // Recursive Case:
    return reverseString(string.substr(1)) + string.charAt(0);
}

console.log(reverseString("hello"));
console.log(reverseString("recursion"));
console.log(reverseString("a"));
console.log(reverseString(""));
