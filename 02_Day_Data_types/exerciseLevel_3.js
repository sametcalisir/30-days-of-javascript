// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let quote =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(quote.match(/love/gi).length);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentencebecause =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentencebecause.match(/because/gi).length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const quote2 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const Hash = /#/g;
const At = /@/g;
const And = /&/g;
const ExcMark = /!/g;
const QuestMark = /\?/g;
const Dollar = /\$/g;
const Percent = /\%/g;

const cleanedQuote = quote2
  .replace(Hash, "")
  .replace(At, "")
  .replace(And, "")
  .replace(QuestMark, "")
  .replace(ExcMark, "")
  .replace(Dollar, "")
  .replace(Percent, "");
console.log(cleanedQuote);

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const words =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

const digitPattern = /\d+/g;
let digitWords = words.match(digitPattern);
console.log(digitWords);

total1 = parseInt(digitWords[0]);
total2 = parseInt(digitWords[1]);
total3 = parseInt(digitWords[2]);

let totalIncome = total1 + total2 + total3;
console.log(`Total Income: ${totalIncome}`);
