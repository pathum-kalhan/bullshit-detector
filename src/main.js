const badWords = require('./badWords');

function generateStars(word) {
  let staredWord = '';
  for (let index = 0; index < word.length; index += 1) {
    staredWord += '*';
  }
  return staredWord;
}

function processTxt(str) {
  return new Promise((resolve, reject) => {
    try {
      const badWordsContain = [];
      const txt = str.toUpperCase().trim();
      let starTxt = str;
      let hasBadWords = false;
      badWords.forEach((word) => {
        if (txt.includes(word.toUpperCase())) {
          badWordsContain.push(word);
          const stars = generateStars(word);
          starTxt = starTxt.replace(word, stars);
        }
      });

      if (badWordsContain.length) {
        hasBadWords = true;
      }

      resolve({ badWordsContain, hasBadWords, starTxt });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = processTxt;
