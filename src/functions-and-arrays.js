function greaterOfTwoNumbers(num1, num2) {
  if (num1 > num2) return num1;
  else return num2;
}

// Progression #2: The lengthy word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot"
];

function findScaryWord(words) {
  let lengthy_word;
  maxlength = 0;
  if (words.length == 0) return null;
  for (var i = 0; i < words.length; i++) {
    var l = words[i].length;
    if (l > maxlength) {
      maxlength = l;
      lengthy_word = words[i];
    }
  }
  return lengthy_word;
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    // Progression #4: Calculate the average
  }
  return sum;
}

//// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Progression 4.2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace"
];

// Progression #5: Unique arrays
const wordsUnique = [
  "bread",
  "jam",
  "milk",
  "egg",
  "flour",
  "oil",
  "rice",
  "coffee powder",
  "sugar",
  "salt",
  "egg",
  "flour"
];

// Progression #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];

// Progression #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];

function add(mixedArr) {
  var sum = 0;
  if (mixedArr.length == 0) return 0;
  else {
    for (var i = 0; i < mixedArr.length; i++) {
      if (typeof mixedArr[i] == "number") {
        sum += mixedArr[i];
      } else if (typeof mixedArr[i] == "string") {
        var l = mixedArr[i].length;
        sum += l;
      } else if (typeof mixedArr[i] == "boolean") {
        var l = mixedArr[i] / 1;
        sum += l;
      } else throw "Unsupported data type sir or ma'am";
    }
  }
  return sum;
}

//4.2 midpoint levels
function midPointOfLevels(numbersAvg) {
  var sum = 0;
  if (numbersAvg.length == 0) return null;
  for (var i = 0; i < numbersAvg.length; i++) {
    sum += numbersAvg[i];
  }
  return sum / numbersAvg.length;
}
//average word length
function averageWordLength(wordsArr) {
  var sum = 0;
  if (wordsArr.length == 0) return null;
  else {
    for (var i = 0; i < wordsArr.length; i++) {
      sum += wordsArr[i].length;
    }
    return sum / wordsArr.length;
  }
}
//4.3 average of mixed
function avg(mixedArr) {
  if (mixedArr.length == 0) return null;
  else {
    var sum = 0;

    for (var i = 0; i < mixedArr.length; i++) {
      if (typeof mixedArr[i] == "number") {
        sum += mixedArr[i];
      } else if (typeof mixedArr[i] == "string") {
        var l = mixedArr[i].length;
        sum += l;
      } else if (typeof mixedArr[i] == "boolean") {
        var l = mixedArr[i] / 1;
        sum += l;
      } else throw "Unsupported data type sir or ma'am";
    }
    var average = (sum / mixedArr.length).toFixed(2);
    return average;
  }
}

//5 remove duplicate elements
function uniqueArray(array) {
  if (array.length == 0) return null;
  else return array.filter((a, b) => array.indexOf(a) === b);
}
// 6 search an element
function searchElement(wordsFind, word) {
  if (wordsFind.length == 0) return null;
  for (var i = 0; i < wordsFind.length; i++) {
    if (wordsFind[i] == word) return true;
  }
  if (i == wordsFind.length) return false;
}
//7 how many times repeated
function howManyTimesElementRepeated(wordsCount, word) {
  if (wordsCount.length == 0) return 0;
  var word_count = 0;
  for (var i = 0; i < wordsCount.length; i++)
    if (wordsCount[i] == word) word_count++;
  return word_count;
}
//8 maximumm product of 4 adjacent matrix
function maximumProduct(matrix) {
  var max = 0;
  var result;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if (j - 3 >= 0) {
        result =
          matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3];
        if (max < result) max = result;
      }
      if (i - 3 >= 0) {
        result =
          matrix[i][j] * matrix[i - 1][j] * matrix[i - 2][j] * matrix[i - 3][j];
        if (max < result) max = result;
      }
    }
  }
  return max;
}
// 8.2 maximum product of diagonal elements
function maximumProductOfDiagonals(matrix) {
  var max = 0;
  var result;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if (j - 3 >= 0 && i - 3 >= 0) {
        result =
          matrix[i][j] *
          matrix[i - 1][j - 1] *
          matrix[i - 2][j - 2] *
          matrix[i - 3][j - 3];
        if (max < result) max = result;
      }
    }
  }
  return max;
}
