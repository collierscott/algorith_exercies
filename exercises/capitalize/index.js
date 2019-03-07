// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();

  for(let x = 1; x < str.length; x++) {
    if(' ' === str[x - 1]) {
      result += str[x].toUpperCase();
    } else {
     result += str[x];
    }
  }
  return result;
}

module.exports = capitalize;

// function capitalize(str) {
//   const arry = [];
//   for(let word of str.split(' ')) {
//     arry.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return arry.join(' ');
// }