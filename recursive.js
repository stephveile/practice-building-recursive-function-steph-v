function reverseString(string) {

    // Base Case:
    if (string.length === 1) {
        return string;
    }

    // Recursive Case:

    return reverseString(string.substring(1)) + string.charAt(0);
}

console.log(reverseString("hello"));
console.log(reverseString("recursion"));
console.log(reverseString("a"));
// console.log(reverseString("")); // code did not work for this one -- it threw an error!
