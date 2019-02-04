// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  if(str.length <= 2) return true;

  // Compares too many times. So, not best solution.
  // One of the other solutions below is better.
  return str.split('').every((char, i) => (
    char === str.charAt(str.length - i - 1)
  ));
}

module.exports = palindrome;
// More solutions

// function palindrome(str) {
//   if(str.length <= 2) return true;
//
//   let reversed = str.split('').reduce((rev, char) => {
//     return char + rev;
//   }, '');
//
//   return (reversed === str);
// }

// function palindrome(str) {
//   if(str.length <= 2) return true;
//
//   let reversed = '';
//   for(let char of str) {
//     reversed = char + reversed;
//   }
//
//   return (reversed === str);
// }

// function palindrome(str) {
//   if(str.length <= 2) return true;
//
//   let low = 0;
//   let high = str.length - 1;
//
//   while(low < high) {
//     if(str.charAt(low) !== str.charAt(high)) return false;
//     low++;
//     high--;
//   }
//
//   return true;
// }