let word = prompt("Enter a word");
//check if a string is a palindrome:
function palindrome(word) {
    // Pointer starting from the beginning of the string
    let left = 0;
    // Pointer starting from the end of the string
    let right = word.length - 1;
    // Loop until the two pointers meet or cross each other
    while (left <= right) {
        if (word[left] !== word[right]) {
            // Return false as the corresponding positions don't match
            return false;
        }
        left++;
        right--;
    }
    // Return true as it reads the same forwards and backwards
    return true;
}
// Call the palindrome function with the input word and store the result:
let myPalindrome = palindrome(word);
// Output the result based on whether it's a palindrome or not:
if (myPalindrome) {
    console.log("It is a Palindrome");
} else {
    console.log("It is not a Palindrome");
}

