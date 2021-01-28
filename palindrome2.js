function isPalindrome (word) {

  if(word.length <= 1) {
    return true
  }

  if(word[0] !== word[word.length - 1]) {
    return false;
  }

  return isPalindrome(word.slice(1, word.length - 1))

}


let word1 = 'noon' // true
let word2 = 'tacocat' // true
let word3 = "a" // true
let word4 = 'phone' // true

console.log(`Is ${word1} a Palindrome?`, isPalindrome(word1));
console.log(`Is ${word2} a Palindrome?`, isPalindrome(word2));
console.log(`Is ${word3} a Palindrome?`, isPalindrome(word3));
console.log(`Is ${word4} a Palindrome?`, isPalindrome(word4));
