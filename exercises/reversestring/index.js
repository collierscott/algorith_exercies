// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// This contains several different ways to reverse a string

function reverse(str) {
  // Takes starting argument (empty string)
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

module.exports = reverse;

// function reverse(str) {
//   let reversed = '';
//   // for(let i = str.length - 1; i >= 0; i--) {
//   //   reversed += str.charAt(i);
//   // }
//
//   // Alternate way to loop
//   for(let character of str) {
//     reversed = character + reversed;
//   }
//
//   return reversed;
// }

// function reverse(str) {
//   let low = 0;
//   let high = str.length - 1;
//   let arry = str.split('');
//
//   while(low < high) {
//     let temp = arry[low];
//     arry[low] = arry[high];
//     arry[high] = temp;
//     low++;
//     high--;
//   }
//
//   return arry.join('');
// }

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

