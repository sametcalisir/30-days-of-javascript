// Exercise Level 2

// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
function tenMostFrequentWords(paragraph, topCount) {
  const normalizedText = paragraph.replace(/[^\w\s]/g, "");

  const words = normalizedText.split(/\s+/);

  const frequencyMap = {};
  words.forEach((word) => {
    if (word) {
      frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    }
  });

  const wordCounts = Object.keys(frequencyMap).map((word) => ({
    word,
    count: frequencyMap[word],
  }));

  wordCounts.sort((a, b) => b.count - a.count || a.word.localeCompare(b.word));

  return wordCounts.slice(0, topCount);
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log(tenMostFrequentWords(paragraph));
console.log(tenMostFrequentWords(paragraph, 10));
