// Exercise Level 3

// 1. Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
function cleanText(text) {
  const cleanedText = text.replace(/[^\w\s]/g, "");

  return cleanedText;
}

function mostFrequentWords(text) {
  const wordsArray = text.split(" ");
  const wordCount = {};

  wordsArray.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  const wordCountArray = Object.entries(wordCount).map(([word, count]) => ({
    word,
    count,
  }));

  wordCountArray.sort((a, b) => b.count - a.count);

  return wordCountArray.slice(0, 3);
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanedText = cleanText(sentence);
console.log(cleanedText);

const mostFrequent = mostFrequentWords(cleanedText);
console.log(mostFrequent);
