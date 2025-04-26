# 30 Günde JavaScript Notları

## Template Literals Nedir?

Template Literal string oluşturmak için kullanılan yeni bir standarttır. Template Literal JavaScript’te stringlerimizi daha güzel ve dinamik bir şekilde biçimlendirmemizi sağlar. Kullanımı oldukça basittir. Bilindiği üzere, JavaScript’te tek tırnak (‘’) veya çift tırnak (“”) ile string oluşturabiliyoruz. ES6 ile bunların yanı sıra backtick (``) karakteri (grave accent) ile de string oluşturabiliyoruz.

### Template Literal Kullanımı

Template Literals (önceki adıyla Template Strings), kod okunabilirliği ve yazım kolaylığı sağlayan ES6 ile gelmiş bir string yazma şeklidir

```javascript
let newString = `A new string`;
console.log(newString);
```

### Çok Satırlı Dizeler (Multi-line)

Template Literal kullanarak çok satırlı stringleri özel karakterler kullanmadan tanımlayabiliriz. Aşağıdaki örnekte tek tırnak kullanarak oluşturulan çok satırlı bir string ifade \n kullanılarak tanımlanmıştır:

```javascript
// The old usage
let multiString = "Some text that I want\nOn two lines!";
console.log(multiString);
```

Yukarıdaki örnekte yeni satır için kullanılan \n karakteri yerine değişkenimizi backtick karakteri ile şu şekilde tanımlayabiliriz:

```javascript
// Template Literal usage
let multiString = `Some text that I want
On two lines!`;
console.log(multiString);
```

### İnterpolasyon (Interpolation)

İnterpolasyon metnin içerisine değişkenleri yerleştirme olarak ifade edilebilir. Değişkenleri `${variableName}` ifadesi ile kullanmamız gerekmektedir.

```javascript
let firstName = `Mustafa Samet`;
let surName = `Çalışır`;
console.log("Hi my name is " + firstName + " " + surName); // The old usage
console.log("Hi my name is ${firstName} ${surName}`"); // Template Literal usage
```

Örnekte de görüldüğü gibi dolar ve süslü parantez karakterleri içerisine `${variableName}` şeklinde istediğimiz değişkeni yazabiliriz. Bu sayede değişkenlerimizi kolaylıkla bir string içerisine yerleştirip kullanabiliriz.

### HTML Şablonları (HTML Templates)

Çok satırlı dizeleri kolaylıkla kullanmak ve dizelerimize içerik eklemek için de Template Literal’den faydalanabiliriz. Örnek olarak bir web sayfasına bir liste eklemeye çalıştığımızda Template Literal kullanabiliriz.

```javascript
const html = `
  <ul>
    <li>${fullName}</li>
    <li>${department}</li>
    <li>${salary}</li>
  </ul>
`;

document.body.innerHTML = html;
```

## Array Metotları

JavaScript programlama dilinde, birçok veri tipi kullanılır ve bu veri tipleri için işlem yapmak için çeşitli yöntemler vardır. Bu yöntemlerden biri de array (dizi) veri tipi için sunulan metotlardır. Array’ler, birden fazla öğeyi depolamak ve birlikte işlem yapmak için kullanılır. JavaScript’de, bir dizi üzerinde işlem yapmak için birçok metot mevcuttur. Bu metotlar, bir dizi içindeki öğeleri manipüle etmek, sıralamak, filtrelemek veya döngüye sokmak gibi işlemler yapmamızı sağlar.

### 1. push()

`push()` metodu, bir array’e yeni elemanlar eklemek için kullanılan bir metotdur ve isteğe bağlı olarak bir veya daha fazla parametre alabilir. Bu metot, bir dizinin sonuna bir veya daha fazla öğe ekler ve dizinin yeni uzunluğunu döndürür.

```javascript
const arr = [1, 3, 5, 7];
const newArrLength = arr.push(9, 11, 13);

console.log(newArrLength); // 7
console.log(arr); // [1, 3, 5, 7, 9, 11, 13]
```

`push()` metodu, aynı zamanda bir array’i başka bir array’e eklemek için de kullanılabilir.

```javascript
const arr1 = ["London", "Tokyo", "Moskova"];
const arr2 = ["York", "Fukuyama", "Sarov"];

console.log(arr1.push(...arr2)); // 6
console.log(arr1); // ['London', 'Tokyo', 'Moskova', 'York', 'Fukuyama', 'Sarov']
```

### 2. pop()

`pop()` metodu, bir array’den son elemanı çıkarmak için kullanılır. Bu metot, array’den çıkarılan elemanı geri döndürür.

```javascript
const arr = ["Kiwi", "Apple", "Banana"];
const removedElement = arr.pop();

console.log(removedElement); // Banana
console.log(arr); // ['Kiwi', 'Apple']
```

### 3. shift()

`shift()` metodu, bir array’den ilk indexteki elemanı çıkarmak için kullanılır. Bu metot, array’den çıkarılan elemanı geri döndürür. `pop()` metodunda olduğu gibi bu metot da parametresiz kullanılır.

```javascript
const arr = ["Kiwi", "Apple", "Banana"];
const removedElement = arr.shift();

console.log(removedElement); // Kiwi
console.log(arr); // ['Apple', 'Banana']
```

### 4. unshift()

`unshift()` metodu, bir array’in en başına yeni eleman veya elemanlar eklemek için kullanılan bir metotdur ve isteğe bağlı olarak bir veya daha fazla parametre alabilir. Bu metot, geriye array’in yeni uzunluğunu döndürür.

```javascript
const arr = ["Turkish", "English"];
const newArrLength = arr.unshift("French", "Spanish");

console.log(newArrLength); // 4
console.log(arr); // ['French', 'Spanish', 'Turkish', 'English']
```

### 5. at()

`at()` metodu, bir array içindeki belirli bir pozisyondaki öğeyi döndürmek için kullanılır. Herhangi bir öğenin olmadığı indexte `undefined` döndürülür.

```javascript
const arr = ["a", "b", "c", "d"];

console.log(arr.at(1)); // b
console.log(arr.at(-1)); // d
console.log(arr.at(0)); // a
console.log(arr.at(6)); // undefined
```

### 6. concat()

`concat()` metodu, bir ya da daha fazla array’i birleştirerek yeni bir array oluşturur. Bu metodu kullanarak farklı array’leri birleştirebilir ve hatta array olmayan öğeleri de ekleyebilirsiniz.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const newArr = arr1.concat(arr2, arr3, 10);
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 7. sort()

`sort()` metodu, array’i alfabetik olarak sıralamak için kullanılır.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // ['Apple', 'Banana', 'Mango', 'Orange'];
```

Sayılardan oluşan bir array’i sıralarken istemediğimiz bir sonuçla karşılaşabiliriz. Örneğin,

```javascript
const arr = [1, 2, 109, 1001, 9];
arr.sort(); // [1, 1001, 109, 2, 9];

// Bu sorunu çözmek için bu metoda bir callback fonksiyon geçilmelidir.
arr.sort((a, b) => a - b); // [1, 2, 9, 109, 1001];
// Sayıları azalan sıraya göre sıralamak için aşağıdaki yöntem uygulanabilir.
arr.sort((a, b) => b - a); // [1001, 109, 9, 2, 1];
```

Yukarıdaki örnekte, `sort()` metoduna bir işlev geçildi ve bu işlev, `a` ve `b` parametreleri arasındaki farka göre sıralama yaptı. Bu sayede, sayı dizisi doğru bir şekilde sıralandı.

Ayrıca, bu metot bir dizi nesne de sıralayabilir. Bu durumda, bir işlev (callback fonksiyonu) geçilerek hangi özelliklere göre sıralanacağını belirtebilirsiniz. Örneğin,

```javascript
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];

people.sort((a, b) => a.age - b.age);
// [{name: 'Bob', age: 20}, {name: 'Alice', age: 25}, {name: 'Charlie', age: 30}]
```

### 8. reverse()

`reverse()` metodu bir array içindeki elemanları tersten sıralamak için kullanılır. Bu metodun kullanımı sonucunda, orijinal array değişir ve elemanlar tersten sıralanmış şekilde yerleştirilir.

```javascript
const arr = [1, 2, 3, 4, 5];

const newArr = arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
console.log(newArr); // [5, 4, 3, 2, 1]
```

`reverse()` ve `sort()` metotlarını kullanarak bir array’in elemanlarını azalan sırada sıralayabilirsiniz.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();
fruits.reverse();
console.log(fruits); // ['Orange', 'Mango', 'Banana', 'Apple']
```

### 9. slice()

`slice()` metodu, bir array’in belirli bir bölümünü kopyalar ve yeni bir array olarak döndürür. Bu metot, orijinal array’i değiştirmez.

`slice()` metodu, iki parametre alır. İlk parametre, kopyalanacak bölümün başlangıç indexidir (dahil edilir), ikinci parametre ise kopyalanacak bölümün bitiş indexidir (dahil edilmez). İkinci parametre belirtilmezse, array’in sonuna kadar olan tüm öğeleri kopyalar. Parametrelere negatif index değeri de geçilebilir.

```javascript
const animals = ["leon", "dog", "fish", "duck"];

let newAnimals1 = animals.slice(0, 2); // ["leon", "dog"]
let newAnimals2 = animals.slice(2, 4); // ["fish", "duck"]
let newAnimals3 = animals.slice(0); // ["leon", "dog", "fish", "duck"]
let newAnimals4 = animals.slice(-2); // ["fish", "duck"]
```

### 10. splice()

`splice()` metodu, bir diziye öğeleri eklemek veya çıkarmak için kullanılır. 3 parametre alabilir.

`array.splice(index, howManyRemoved, item1, ….., itemX)`

- İlk parametre, diziye eklenmek veya çıkarılmak istenen öğelerin başlangıç ​​konumunu belirtir.

- İkinci parametre, kaç öğenin silineceğini belirtir. Eğer bu parametre 0 ise, öğe silinmez ve sadece ekleme yapılır.

- Üçüncü parametreler, diziye eklenmek istenen öğeleri belirtir.

`splice()` metodu, silinen öğeleri döndürür. Eğer hiçbir öğe silinmezse boş bir dizi döndürür.

```javascript
const animals = ["cat", "dog", "duck"];
const addedAnimals = animals.splice(2, 0, "eagle", "bird");

console.log(addedAnimals); // []
console.log(animals); // ['cat', 'dog', 'eagle', 'bird', 'duck']

const removedAnimals = animals.splice(0, 5, "fox", "rabbit");

console.log(removedAnimals); // ['cat', 'dog', 'eagle', 'bird', 'duck']
console.log(animals); // ['fox', 'rabbit']
```

### 11. join()

`join()` metodu, bir dizideki öğelerini aldığı parametre ayracına göre birleştirerek bir string’e dönüştürür. Bu metot, orijinal array’i değiştirmez.

`join()` metodu, bir parametre alabilir. Bu parametre, birleştirme işleminde kullanılacak ayraç veya karakterdir. Bu parametre opsiyoneldir ve belirtilmezse, öğeler varsayılan değer olan virgülle birleştirilir.

```javascript
const fruits = ["apple", "banana", "orange", "kiwi"];
const fruits2 = fruits.join();
const fruits3 = fruits.join(" ");
const fruits4 = fruits.join("*");

console.log(fruits); // ['apple', 'banana', 'orange', 'kiwi']
console.log(fruits2); // apple,banana,orange,kiwi
console.log(fruits3); // apple banana orange kiwi
console.log(fruits4); // apple*banana*orange*kiwi
```

### 12. toString()

`toString()` metodu adından da anlaşılacağı üzere, bir array’deki elemanları string’e çevirir. Bu yöntem, her bir öğeyi varsayılan olarak virgülle ayrılmış bir string olarak döndürür. Bu metotla bir string’e dönüştürdüğümüz array’i yeniden array haline getirmek istiyorsak bir string metodu olan `split()` metodunu kullanabiliriz.

```javascript
let arr = ["Computer", true, "Phone", 9];
let newStr = arr.toString();
console.log(newStr); // Computer,true,Phone,9
console.log(typeof newStr); // string

newStr = newStr.split(",");
console.log(newStr); // ['Computer', 'true', 'Phone', '9']
```

### 13. indexOf()

`indexOf()` metodu, bir array içinde belirli bir öğenin konumunu belirlemek için kullanılır. Bu yöntem, öğenin ilk bulunduğu konumun index değerini döndürür. Eğer öğe array’de yoksa -1 değerini döndürür. Opsiyonel olarak ikinci bir parametre de alabilir. Bu parametre belirli bir array indisinden başlayarak array’i taramaya yarar.

```javascript
const colors = ["red", "white", "blue", "yellow", "green", "brown", "blue"];

console.log(colors.indexOf("blue")); // 2
console.log(colors.indexOf("orange")); // -1
console.log(colors.indexOf("brown", 3)); // 5
```

### 14. lastIndexOf()

`lastIndexOf()` metodu, `indexOf()` metodunun aksine ilk bulunan elemanın indisini döndürmek yerine son bulunan elemanın indexini döndürür.

```javascript
const colors = ["red", "white", "blue", "yellow", "green", "brown", "blue"];

console.log(colors.lastIndexOf("blue")); // 6
console.log(colors.lastIndexOf("orange")); // -1
```

### 15. find()

`find()` metodu, parametre olarak bir callback fonksiyonu alır. Array’in elemanlarını sırayla kontrol eder ve belirtilen koşulu sağlayan ilk öğeyi döndürür. Eğer koşulu sağlayan öğe yoksa `undefined` değerini döndürür.

```javascript
const ages = [10, 13, 8, 25];
const result = ages.find((age) => age > 18);
const result2 = ages.find((age) => age == 18);

console.log(result); // 25
console.log(result2); // undefined
```

### 16. findIndex()

`findIndex()` metodu, `find()` metodunda olduğu gibi parametre olarak bir callback fonksiyonu alır. Array’in elemanlarını sırayla kontrol eder ve belirtilen koşulu sağlayan ilk öğenin indexini döndürür. Eğer koşulu sağlayan öğe yoksa -1 değeri döndürür.

```javascript
const ages = [10, 13, 8, 25];
const result = ages.findIndex((age) => age > 18);
const result2 = ages.findIndex((age) => age == 18);

console.log(result); // 3
console.log(result2); // -1
```

### 17. every()

`every()` metodu, bir array içindeki her bir öğeyi parametre olarak bir callback fonksiyonuyla test eder ve öğelerin tamamı belirtilen testi geçerse `true`, aksi takdirde `false` değerini döndürür.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const allPositive = numbers.every(function (number) {
  return number > 0;
});

let allGreater5 = numbers.every((number) => number > 5);

console.log(allPositive); // true
console.log(allGreater5); // false
```

### 18. some()

`some()` metodu, bir array içindeki her bir öğeyi parametre olarak aldığı bir callback fonksiyonuyla test eder ve belirtilen koşulu sağlayan bir öğe bulursa arama işlemini durdurur ve `true` değerini döndürür. Eğer koşulu sağlayan öğe yoksa `false` değeri döndürür.

Bu metot, özellikle bir array içinde belirli bir koşulu sağlayan öğenin olup olmadığını hızlı bir şekilde kontrol etmek istediğiniz durumlarda kullanışlıdır.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const greaterThanFive = numbers.some((number) => number > 5);
const greaterThanTen = numbers.some((number) => number > 10);

console.log(greaterThanFive); // true
console.log(greaterThanTen); // false
```

### 19. fill()

`fill()` metodu, bir array içinde belirli bir değerle array’in içindeki elemanları doldurmak için kullanılır.

Bu metot 3 parametre alabilir:

- **Değer:** Bu, dizinin tüm öğelerinin yerine kullanılacak değerdir.

- **Başlangıç (opsiyonel):** Bu, dizi içinde hangi öğeden başlayacağını belirten bir indextir. Varsayılan olarak 0 indexinden başlar.

- **Bitiş (opsiyonel):** Bu, dizi içinde hangi öğeye kadar doldurma işleminin yapılacağını belirten bir indextir. Bu index işleme dahil değildir.

```javascript
const colors = ["red", "green", "yellow"];
colors.fill("dark"); // ["dark", "dark", "dark"]
```

```javascript
const colors = ["red", "green", "yellow"];
colors.fill("dark", 1); // ["red", "dark", "dark"]
```

```javascript
const colors = ["red", "green", "yellow"];
colors.fill("dark", 2, 3); // ["red", "green", "dark"]
```

### 20. Array.isArray()

`Array.isArray()` metodu, parametre olarak gönderilen öğenin dizi olup olmadığını kontrol etmek için kullanılan bir metoddur. Gönderilen parametre bir array ise `true` değerini aksi takdirde `false` değerini döndürür.

```javascript
console.log(Array.isArray([])); // true
console.log(Array.isArray([1, true, { lang: "tr" }])); // true

console.log(Array.isArray(null)); // false
console.log(Array.isArray({})); // false
console.log(Array.isArray(undefined)); // false
```

### 21. forEach()

`forEach()` metodu, parametre olarak aldığı bir callback fonksiyonuyla bir array içindeki her bir eleman için bu callback fonksiyonunu çağırır ve array’in her bir elemanı üzerinde işlem yapar. Bu işlev, her öğenin üzerinde çalışır ve sonuç olarak bir şey döndürmez.

Bu callback fonksiyonu 3 parametre alabilir:

- **Değer:** Dizinin işlenen öğesinin değeri.

- **İndeks (opsiyonel):** Dizinin işlenen öğesinin dizin numarası.

- **Dizi (opsiyonel):** `forEach()` yöntemi tarafından işlenen dizinin kendisi.

```javascript
let text = "";
const fruits = ["apple", "kiwi", "banana"];

fruits.forEach((item, index) => (text += `${index} : ${item} \n`));

console.log(text);
/*
0 : apple
1 : kiwi
2 : banana
*/
```

### 22. map()

`map()` metodu, parametre olarak aldığı bir callback fonksiyonuyla bir array içindeki her bir eleman için bu callback fonksiyonunu çağırır ve array’in her bir elemanı üzerinde işlem yapar. Bu metot, orijinal diziyi değiştirmez yeni bir dizi oluşturur. Bu callback fonksiyonu 3 parametre alabilir.

- **Değer:** Dizinin işlenen öğesinin değeri.

- **İndeks (opsiyonel):** Dizinin işlenen öğesinin dizin numarası.

- **Dizi (opsiyonel):** `map` metodu tarafından işlenen dizinin kendisi.

`map()` metodu genellikle bir dizi öğesini başka bir öğeye dönüştürmek için kullanılır. Örneğin, bir dizideki tüm sayıları iki katına çıkarmak veya bir dizi kelimeyi büyük harflere dönüştürmek gibi işlemler yapmak için kullanılabilir.

```javascript
const array = ["Arnold", "Jay", "Ronnie"];
const array2 = array.map((item) => `Hello ${item}`);

console.log(array); // ['Arnold', 'Jay', 'Ronnie']
console.log(array2); // ['Hello Arnold', 'Hello Jay', 'Hello Ronnie']
```

```javascript
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8]
```

### 23. filter()

`filter()` metodu, bir array içinde belirli bir koşulu sağlayan elemanları seçmek için kullanılan bir metotdur. Bu metot, orijinal diziyi değiştirmez sadece koşulu sağlayan öğelerin bir alt kümesini içeren yeni bir dizi döndürür.

`filter()` metodu, bir callback fonksiyonunu parametre olarak alır ve her öğe için bu fonksiyonu çağırır. Fonksiyon, her bir öğe için `true` veya `false` değeri döndürür. true döndürdüğünde öğe yeni diziye eklenir. `false` döndürdüğünde öğe diziye eklenmez.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((item) => item % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
```

### 24. reduce()

`reduce()` metodu, bir dizi öğelerini bir araya getirerek tek bir değer oluşturan bir JavaScript dizi yöntemidir. Bu yöntem, bir dizi içindeki tüm öğeleri birleştirir veya bir dizi içindeki öğeleri toplar, çarpar veya başka bir işlem yapar. Bu işlem sonucunda tek bir değer elde edilir.

`reduce()` metodu, bir fonksiyonu parametre olarak alır ve bu fonksiyon, dizi öğelerinin birleştirilmesi veya işleme tabi tutulması için kullanılır. Fonksiyon, her adımda bir önceki işlem sonucunu ve bir sonraki öğeyi alır ve işlem sonucunu geri döndürür. Bu işlem, dizinin sonuna kadar devam eder ve sonuç olarak tek bir değer döndürür.

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, item) => accumulator + item);

console.log(sum); // 15
```

## Function Nedir?

Bir fonksiyon, belirli bir görevi gerçekleştirmek üzere tasarlanmış ve yeniden kullanılabilir bir kod bloğu veya programlama tanımıdır.

Bir fonksiyon, `function` anahtar kelimesi ardından gelen o fonksiyona ait fonksiyon ismi ve parantezler ile tanımlanır. Bu paranteler fonksiyona parametre atayabilmemizi sağlar. Şayet fonksiyon parametre alırsa bu parametre fonksiyon scope'u içerisinde geçerli olan bir değişkendir. Farklı bir kullanım olarak da bu parametreye default değerler atayabiliriz. Eğer bir fonksiyon yardımı ile veri taşımak istiyorsak söz konusu fonksiyonun belirli bir veri türünü geriye değişken olarak döndürmesi gerekir. Daha sonra dönen bu değişkeni bir başka değişkene atayarak kullanabilir.

**Fonksiyon kullanmanın avantajları:**

- Temiz ve okunması kolay

- Yeniden kullanılabilir

- Kolay test edilir

**Bir fonksiyon birkaç şekilde tanımlanabilir:**

- Declaration function

- Expression function

- Anonymous function

- Arrow function

### Function Declaration

```javascript
//parametresiz fonksiyon tanımıı
function functionName() {
  // istenilen kod parçası
}
functionName(); // fonksiyon, fonksiyon adı ve parantezler ile çağırılır
```

#### Function Declaration'da Sınırsız Sayıda Parametre

Bu fonksiyonun tanımlanmasını fonksiyon scope'nda object temelli arguments anahtar kelimesi ile erişilir. Parametre olarak atanan her öğeye arguments üzerinden ulaşabiliriz.

```javascript
function sumAllNums() {
  console.log(arguments);
}

sumAllNums(1, 2, 3, 4);
```

```javascript
function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173
```

### Expressions Function

Expression function, isimsiz fonksiyonlardır. İsimsiz bir fonksiyon oluşturduktan sonra bir değişkene atayarak kullanırız. Fonksiyondan bir değer geri döndürmek için değişkeni çağırmalıyız. Örnek vermek gerekirse.

```javascript
// Function expression
const square = function (n) {
  return n * n;
};

console.log(square(2)); // 4
```

### Anonymous Function

```javascript
const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};
```

### Arrow Function

Klasik fonksiyona alternatif olarak kullanılan arrow function sözdiziminde ufak bir farklılık vardır. `function` anahtar kelimesi yerine `=>` işareti kullanılır.

Sırasıyla aynı fonksiyonun klasik ve arrow function halini yazalım

```javascript
const square = (n) => n * n; // 4
console.log(square(2)); // 4
```

```javascript
const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUpperCase(countries));

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
```

```javascript
const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(printFullName("Mustafa Samet", "Çalışır"));
```

#### Arrow Function'da Sınırsız Sayıda Parametre

Arrow function, klasik fonksiyon gibi `arguments` nesnesine sahip değildir. Arrow function'da sınırsız sayıda parametre kullanmak istersek spread operatör (`...`) ve hemen ardından parametre adı kullanılır. Fonksiyonda bağımsız değişken olarak geçtiğimiz her şeye arrow functionda dizi olarak erişilebilir.

```javascript
const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4);
// [1, 2, 3, 4]
```

```javascript
const sumAllNums = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173
```

## Higher Order Function

Yüksek dereceden (high order) fonksiyonlar, parametre olarak başka bir fonksiyonu içerisine alan veya bir başka fonksiyonu değer olarak döndürebilen fonksiyonlardır.

Bir fonksiyon parametre olarak geçilebiliyorsa bu fonksiyona ise callback fonksiyon denir.

### Callback

Callback fonksiyon yukarıda da söylediğimiz gibi bir başka fonksiyona parametre olarak verilen fonksiyonlardır.

```javascript
const callback = (n) => {
  return n ** 2;
};

// Callback fonksiyonunu alan başka bir fonksiyon
function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));
```

```javascript
let val;

function MultipleByTwo(a, b, c, callback) {
  let arr = [];

  if (callback && typeof callback === "function") {
    for (let i = 0; i < 3; i++) {
      arr[i] = callback(arguments[i] * 2);
    }
  }
  return arr;
}

function addOne(a) {
  return a + 1;
}

function addTwo(a) {
  return a + 2;
}

function addThree(a) {
  return a + 3;
}

val = MultipleByTwo(5, 10, 20, addTwo);

// Callback function kullanmadan fonksiyonu çağırma
// for (let i = 0; i < val.length; i++) {
//   val[i] = addOne(val[i]);
// }

console.log(val);
```

### Returning function

Yüksek dereceden fonksiyonlar bir fonksiyonu değer olarak geri döndürebilir.

```javascript
// Bir fonksiyonun başka bir fonksiyonu geri döndürme örneği.
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));
```

```javascript
const numbers = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};

console.log(sumArray(numbers)); // 15
```

```javascript
const numbers = [1, 2, 3, 4];

const sumArray = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};

console.log(sumArray(numbers)); // 15
```

## Setting Time

JavaScript'te bazı fonksiyonları belirli bir zaman aralığında yürütebiliriz veya bazı fonksiyonları yürütmek için belirli bir süre planlama (bekleme) yapabiliriz.

- setInterval
- setTimeout

### setInterval

JavaScript'te, belirli bir zaman aralığında sürekli olarak istediğimiz şeyi yapmak için `setInterval` fonksiyonunu kullanırız. `setInterval`, genel olarak bir callback fonksiyonu ve ikinci olarak, belirlemek istediğimiz süreyi parametre alararak kullanılır.

```javascript
function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 1000); // Her saniyede merhaba yazıyor, 1000ms is 1s
```

### setTimeout

Javascript'te ileriye dönük çalışacak fonksiyonlar planlayabiliriz. Tam da bu iş için setTimeOut metodu imdadımıza koşuyor. setTimeOut fonksiyonu da setInterval fonksiyonuna benzer şekilde bir callback fonksiyon ve ms cinsinden bir süre değerini parametre olarak alır.

```javascript
function sayHello() {
  console.log("Hello");
}
setTimeout(sayHello, 2000); // 2 saniye bekledikten sonra "Hello" yazdıracak
```

## Object Nedir?

JavaScript'te Object (Nesne), bir veya daha fazla anahtar-değer çiftinden oluşan bir veri yapısıdır. Nesneler, karmaşık verileri temsil etmek için kullanılır. Bir nesne, birçok farklı türde veriyi bir arada tutabilir; örneğin, sayılar, string'ler, diziler, fonksiyonlar (metodlar), hatta diğer nesneler.

Bir nesne, JavaScript'in en temel veri yapılarından biridir ve genellikle gerçek dünya varlıklarını temsil etmek amacıyla kullanılır.

Bir nesne oluşturmanın birkaç farklı yolu vardır:

### 1. Nesne Literali (Object Literal) Yöntemi

Nesne oluşturmanın en yaygın ve kolay yolu nesne literali yöntemidir. Bu yöntemle, nesne {} süslü parantezler içinde anahtar-değer çiftlerini belirterek oluşturulur.

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

console.log(person);
```

### 2. new Object() Yöntemi

Bir nesne oluşturmanın bir diğer yolu da `new Object()` constructor fonksiyonunu kullanmaktır.

```javascript
const person = new Object();
person.name = "Alice";
person.age = 30;
person.city = "New York";

console.log(person);
```

### Object (Nesne) Özelliklerine Erişim

Bir nesnenin özelliklerine iki farklı yöntemle erişilebilir:

#### 1. Nokta Notasyonu (Dot Notation)

Nokta notasyonu, özellik adını doğrudan kullanarak nesnenin değerlerine erişmeyi sağlar.

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

console.log(person.name); // 'Alice'
console.log(person.age); // 30
```

#### 2. Köşeli Parantez Notasyonu (Bracket Notation)

Köşeli parantez notasyonu, özellikle dinamik olarak belirlenen anahtarlarla erişim sağlamak için kullanılır.

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

console.log(person["name"]); // 'Alice'
console.log(person["age"]); // 30

const key = "city";
console.log(person[key]); // 'New York'
```

### Object (Nesne) Metotları

Nesneler, fonksiyonları da içerebilir. Nesnede bulunan bir fonksiyona metot denir. Metotlar, nesnenin özelliklerine erişebilir ve üzerinde işlem yapabilir.

#### Metot Tanımlama

Bir nesnede fonksiyon tanımlamak için, fonksiyonu doğrudan nesne içinde tanımlayabilirsiniz.

```javascript
const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // 'Hello, my name is Alice'
```

#### Kısaltılmış Metot Tanımlama

ES6 ile birlikte, fonksiyonları metot olarak daha kısa bir biçimde tanımlayabilirsiniz.

```javascript
const person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // 'Hello, my name is Alice'
```

- `this`**:** Nesnenin kendisini ifade eder. Yani `this.name` ifadesi, `name` özelliğine erişir.

## Object (Nesne) Yöntemleri

JavaScript nesneleri için yerleşik bazı yöntemler vardır. Bunlar nesne üzerinde işlem yapmanızı sağlar:

### 1. Object.keys()

Nesnenin anahtarlarını döndüren bir yöntemdir. Dönen değer bir dizi olacaktır.

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

console.log(Object.keys(person)); // ['name', 'age', 'city']
```

### 2. Object.values()

Nesnenin değerlerini döndüren bir yöntemdir.

```javascript
console.log(Object.values(person)); // ['Alice', 30, 'New York']
```

### 3. Object.entries()

Nesnenin anahtar-değer çiftlerini döndüren bir yöntemdir.

```javascript
console.log(Object.entries(person)); // [['name', 'Alice'], ['age', 30], ['city', 'New York']]
```

### 4. Object.assign()

Bir nesnenin kopyasını oluşturmak ve birleştirmek için `Object.assign()` veya spread operatörü kullanılabilir.

```javascript
// Nesne Kopyalama
const personCopy = Object.assign({}, person);
console.log(personCopy);

const personCopy2 = { ...person };
console.log(personCopy2);
```

```javascript
// Nesne Birleştirme
const personDetails = { name: "Alice", age: 30 };
const address = { city: "New York", country: "USA" };

const personWithAddress = { ...personDetails, ...address };
console.log(personWithAddress); // { name: 'Alice', age: 30, city: 'New York', country: 'USA' }
```

### 5. Object.freeze()

`Object.freeze()` metodu, bir nesneyi dondurur. Bu, nesnenin mevcut özelliklerinin değiştirilmesini, yeni özellikler eklenmesini veya mevcut özelliklerin silinmesini engeller.

```javascript
const person = {
  name: "Alice",
  age: 30,
};

Object.freeze(person);

person.name = "Bob"; // Değiştirme başarısız olur
console.log(person.name); // 'Alice'

person.city = "New York"; // Yeni özellik eklenemez
console.log(person.city); // undefined

delete person.age; // Özellik silinemez
console.log(person.age); // 30
```

## Set Sınıfı Nedir?

`Set`, benzersiz değerleri tutan bir JavaScript koleksiyon türüdür. `Set` nesnesi, herhangi bir türdeki değerleri saklayabilir (string, number, obje, vb.), ancak aynı değeri birden fazla kez tutmaz. Yani, `Set` sadece benzersiz öğeleri saklar.

### Temel Özellikler

- **Benzersizlik:** Bir değer yalnızca bir kez eklenebilir. Eğer aynı değer tekrar eklenirse, ekleme işlemi gerçekleşmez.

- **Sıralama:** `Set`, eklenme sırasına göre öğeleri saklar. Yani, öğeler eklenme sırasıyla sıralı tutulur.

- **Veri Türü:** Her türdeki veriyi saklayabilir: sayılar, metinler, objeler, fonksiyonlar vb.

### Set'e Eleman Ekleme

`Set` nesnesine yeni bir değer eklemek için `add` metodu kullanılır. Parametre olarak eklenecek değeri alır. Eğer değer zaten Set'te varsa, tekrar eklenmez.

```javascript
const companies = new Set();
console.log(companies.size); // 0

companies.add("Google");
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");
console.log(companies.size);
console.log(companies); // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}
```

### Set'ten Eleman Silme

Set'teki bir değeri silmek için `delete` metodu kullanılır. Bu metot bir değeri sildiğinde `true`, olmayan bir değeri silmeye çalıştığınızda `false` değerini döndürür.

```javascript
console.log(companies.delete("Google"));
console.log(companies.size);
```

### Set'teki Bir Elemanı Kontrol Etme

Bir set içinde belirli bir elemanın olup olmadığını kontrol etmek için `has` metodu kullanılır. Bu metot, eleman set'te varsa `true`, yoksa `false` döndürür.

```javascript
console.log(companies.has("Apple")); // false
console.log(companies.has("Facebook")); // true
```

### Set'i Temizleme

`clear` metodu, set'teki tüm elemanları siler. Bu işlem sonrasında set boş olur.

```javascript
companies.clear();
console.log(companies); // Set(0) {}
```

### Set'lerin Birleşimi

İki set nesnesini birleştirmek için yayılma (spread) operatörü kullanılabilir.

```javascript
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C); // Set(6) {1, 2, 3, 4, 5,6}
```

### Set'lerin Kesişimi

İki set nesnesinin kesişimini bulmak için `filter` metodu kullanılabilir.

```javascript
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);

let c = a.filter((num = B.has(num)));
let C = new Set(c);

console.log(C); // Set(3) {3, 4, 5}
```

### Set'lerin Farkı

İki set nesnesinin farkını bulmak için `filter` metodu kullanılabilir.

```javascript
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);

let c = a.filter((num = !B.has(num)));
let C = new Set(c);

console.log(C); // Set(2) {1, 2}
```

## Map Sınıfı Nedir?

`Map` anahtar ve değer ikilisini tutan ve değerlerin eklenme sırasını hatırlayan bir JavaScript nesnesidir. Normal bir nesneden farklı olarak anahtar için herhangi bir veri tipi kullanılabilir. String ile sınırlı değildir.

Anahtarların aynı olup olmadığı kontrol etmek için `sameValueZero` algoritmasını kullanır. Bu algoritma eşitlik kontrolüne benzer fakat +0 ile -0 aynı kabul edilir. Ayrıca NaN ve NaN bu algoritmaya göre aynı şeydir.

- `Map` nesnesine yeni bir değer eklemek için `set` metodu kullanılır. İlk parametre anahtar ikinci parametre değerdir.

```javascript
let map = new Map();
map.set("name", "Alice");
map.set("age", 25);

console.log(map); // Map { 'name' => 'Alice', 'age' => 25 }
```

- Bir anahtarın değerini almak için `get` metodu kullanılır.

```javascript
let name = map.get("name");
console.log(name); // 'Alice'
```

- Anahtarın `Map` nesnesinde olup olmadığını kontrol etmek için `has` metodu kullanılır.

```javascript
console.log(map.has("age")); // true
console.log(map.has("address")); // false
```

- Bir anahtarı silmek için `delete` metodu kullanılır. Bu metot bir anahtarı sildiğinde `true` döndürür. Olmayan bir anahtarı silmeye çalıştığınızda `false` değerini döndürür.

```javascript
console.log(map.delete("age")); // true
console.log(map.delete("address")); // false

console.log(map); // Map { 'name' => 'Alice' }
```

- Bir objeden `Map` nesnesi üretmek için `Object.entries` metodu kullanılır. Çünkü `Map` nesnesi parametre olarak [anahtar, değer] şeklinde dizilerden oluşmuş bir dizi kabul eder.

```javascript
const scores = {
  John: 20,
  Jane: 30,
};

const scoresMap = new Map(Object.entries(scores));

console.log(scores);
```

### Object ve Map Karşılaştırması

- `Map` nesneleri sadece ona eklenen anahtarları içerir, prototipten gelen varsayılan anahtarlar bulunmaz. Yani, bir `Map` içinde sadece siz tarafından eklenen anahtarlar yer alır. Örneğin, bir objede bulunan `toString` gibi metotlar `Map`'te yer almaz.

- Objeler sadece string ve Symbol veri tiplerinde anahtarlar içerebilirken, `Map` nesneleri herhangi bir veri tipinde anahtar içerebilir.

- `Map` nesnelerinde anahtarlar eklenme sırasını korur. Objeler için bu her zaman geçerli değildir, bu yüzden objelerde sıralamaya güvenmemek daha iyi olur.

- `Map` nesnesinin sahip olduğu anahtar sayısı `size` özelliği ile kolaylıkla öğrenilebilir. Objeler için bunu manuel yapmak gerekir. Örneğin `Object.keys(scores).length`

- Bir `Map` nesnesi, üzerinde doğrudan iterasyon yapılabilen bir veri yapısıdır. Objeler için iterasyon yapmak için `Object.keys()`, `Object.entries()` gibi metotlar kullanmanız ya da `for...in` döngüsünü kullanmanız gerekir.

- Performans açısından, anahtar-değer çiftlerinin eklenme sıklığına bağlı olarak `Map` nesnesi daha verimli olabilir. Objeler ise bu tür işlemler için özel bir optimizasyon sunmaz.

## Destructuring (Parçalama)

Destructuring, bir nesne veya diziden veri alıp doğrudan değişkenlere atama yapmanızı sağlar. Bu özellik, daha kısa ve okunabilir kod yazmanıza yardımcı olur.

### Object (Nesne) Destructuring

Nesne içerisindeki değerleri doğrudan değişkenlere atamak için kullanılır.

```javascript
const person = {
  name: "Ali",
  age: 30,
  city: "İstanbul",
};

// Destructuring kullanarak değişkenlere atama
const { name, age, city } = person;

console.log(name); // 'Ali'
console.log(age); // 30
console.log(city); // 'İstanbul'
```

### Dizi Destructuring

Bir diziden öğeleri doğrudan değişkenlere atamak için kullanılır.

```javascript
const numbers = [1, 2, 3];

// Destructuring kullanarak dizi elemanlarını atama
const [first, second, third] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
```

## Spreading (Yayma)

Spreading, bir nesne ya da dizinin elemanlarını başka bir nesne ya da diziye kopyalamak için kullanılır. Bu özellik, mevcut bir nesne ya da diziyi değiştirmeden yeni bir nesne ya da dizi oluşturmanıza yardımcı olur.

### Object (Nesne) Spread

Bir nesnenin özelliklerini başka bir nesneye kopyalamak için kullanılır.

```javascript
const person = {
  name: "Ali",
  age: 30,
};

// Spread ile yeni bir nesne oluşturma
const newPerson = { ...person, city: "İstanbul" };

console.log(newPerson);
// { name: 'Ali', age: 30, city: 'İstanbul' }
```

### Dizi Spread

Bir dizinin elemanlarını başka bir diziye kopyalamak için kullanılır.

```javascript
const numbers = [1, 2, 3];

// Spread ile yeni bir dizi oluşturma
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers); // [1, 2, 3, 4, 5]
```

## JSON (JavaScript Object Notation) Nedir?

JSON (JavaScript Object Notation), insan tarafından okunabilir bir veri formatıdır ve genellikle veri iletimi için kullanılır. JSON, özellikle web uygulamaları ve API'ler aracılığıyla sunucu ile istemci arasında veri alışverişinde yaygın olarak tercih edilir. JSON, hem insanlar tarafından kolayca okunabilir hem de makineler tarafından işlenmesi hızlıdır.

- JSON, web geliştiricileri tarafından genellikle bir sunucu ile web uygulaması arasında veri aktarımı için kullanılan popüler bir veri formatıdır.

- JSON metin tabanlı olduğundan, insanlar tarafından kolayca okunur ve bilgisayarlar tarafından anlaşılır.

- JSON'ın dilden bağımsız yapısı, farklı programlama dilleri ve platformları arasında veri alışverişi yapmak için ideal bir formattır.

- JSON'da veri depolamak ve değiştirmek için birçok veritabanı ortaya çıkmıştır.

JSON, web geliştiricileri tarafından bir sunucu ile web uygulaması arasında veri aktarımı için yaygın olarak kullanılan bir veri formatıdır. Farklı teknolojiler arasında veri alışverişini kolaylaştırdığı için geliştiriciler genellikle JSON'ı tercih eder. Örneğin, bir kullanıcı satın alma işlemi yapmak için bir web uygulaması ile etkileşime girdiğinde, uygulama kullanıcının girdisini sunucuya JSON formatında gönderir. Sunucu verileri işler ve bir yanıtı JSON formatında geri gönderir, ardından web uygulaması tarafından dönüştürülür. Bu, istemci ve sunucu arasında sorunsuz veri alışverişi sağlayarak hızlı, dinamik ve etkileşimli web deneyimlerini kolaylaştırır.

### JSON Neden Kullanılır?

JSON'ın dilden bağımsız yapısı, farklı programlama dilleri ve platformları arasında veri alışverişi yapmak için ideal bir formattır. Örneğin, Java ile yazılan bir uygulama, JSON verilerini bir Python uygulamasına kolayca gönderebilir. Veya JavaScript ile yazılmış bir mobil uygulama, PHP ile yazılmış bir arka uç sunucusuyla iletişim kurmak için JSON kullanabilir. Neden? Çünkü her iki sistem de JSON'ı ayrıştırabilir ve oluşturabilir.

JSON, web geliştirmenin ötesinde genellikle bir uygulama veya BT sisteminde konfigürasyon ayarlarını depolamak ve yönetmek için kullanılır. Örneğin, JSON formatında yazılan konfigürasyon dosyaları veritabanı bağlantı detayları, API anahtarları veya kullanıcı tercihleri gibi temel bilgileri içerebilir. Geliştiriciler, basit, okunması kolay ve ayrıştırması kolay JSON dosyalarında konfigürasyon verilerini depolayarak kod değişiklikleri gerektirmeden uygulama ayarlarını değiştirebilir.

## JSON Metotları

### 1. JSON.parse()

`JSON.parse()` JavaScript yöntemi, JSON formatında yazılmış metin verilerini JavaScript nesnelerine dönüştürmek için kullanılır. Bu yöntem, JSON verilerini JavaScript nesnelerine çevirir, böylece bu verileri işlemek ve kullanmak daha kolay hale gelir.

`JSON.parse()` yöntemini kullanırken dikkat etmemiz gereken özellikler:

- Bu yöntem yalnızca JSON formatındaki verileri işler. Hatalı veya geçersiz JSON verileri bu yöntemi kullanırken hatalara yol açabilir.

- JSON verilerindeki string'ler çift tırnaklar içinde olmalıdır. Tek tırnak veya çıplak metinler hatalara yol açabilir.

```javascript
const jsonString = '{"name": "John", "age": 30, "isStudent": false}';
const parsedData = JSON.parse(jsonString);

console.log(parsedData.name); // John
console.log(parsedData.age); // 30
console.log(parsedData.isStudent); // false
```

Bu örnekte, `jsonString` değişkeni içindeki JSON verisi `JSON.parse()` ile bir JavaScript nesnesine dönüştürülüyor. Daha sonra bu nesneden özelliklere erişilerek veriler alınıyor.

Eğer geçerli bir JSON verisi değilse veya hatalı bir JSON verisiyle `JSON.parse()` yöntemi kullanılırsa, bir hata oluşur. Hataları yönetmek için `try...catch` yapısı kullanılabilir:

```javascript
const jsonString = "invalid json";

try {
  const parsedData = JSON.parse(jsonString);
  console.log(parsedData);
} catch (error) {
  console.error("JSON parsing error:", error.message);
}
```

### 2. JSON.stringify()

`JSON.stringify()` JavaScript yöntemi, JavaScript nesnelerini JSON (JavaScript Object Notation) formatında bir metin olarak döndürmek için kullanılır. Bu yöntem, JavaScript nesnelerini JSON formatına çevirir, böylece bu verileri saklamak, paylaşmak veya iletmek daha kolay hale gelir.

`JSON.stringify()` yöntemini kullanırken dikkat etmemiz gereken bazı önemli detaylar:

- Nesneler ve diziler JSON formatına dönüştürülebilir. Diğer veri tipleri (sayı, string, boolean vb.) de JSON formatına dönüştürülebilir.

- JSON’a dönüştürülen nesne veya dizideki fonksiyonlar, prototipler veya diğer özel nesne özellikleri dahil edilmez.

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false,
};

const jsonString = JSON.stringify(person);
console.log(jsonString);
```

Bu örnekte, `person` adlı JavaScript nesnesi `JSON.stringify()` ile JSON formatına dönüştürülür ve `jsonString` değişkenine atılır. Sonuç olarak, JSON formatındaki metin konsola yazdırılır.

Ayrıca, `JSON.stringify()` yönteminin ikinci bir parametre alarak daha fazla seçenek sunabileceğini de unutmamalısınız. Örneğin, istenilen şekilde girinti eklemek veya belirli özellikleri kontrol etmek gibi seçenekler mevcuttur.

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false,
};

const jsonString = JSON.stringify(person, null, 2); // Girinti eklemek için
console.log(jsonString);
```

Bu kod, JSON formatındaki metni daha okunabilir hale getirmek için girinti ekler.

`JSON.stringify()` yöntemi, verileri başka bir sisteme veya sunucuya göndermeden önce JSON formatına dönüştürmek için sıkça kullanılır.

### JSON Object Literals

JSON (JavaScript Object Notation) nesneleri, JavaScript’te nesne benzeri yapılardır ve JSON formatına uygun olarak oluşturulurlar. JSON nesneleri, anahtar-değer çiftlerini içeren yapılardır ve JSON formatını takip ederek oluşturulurlar. Bunlara “JSON Object Literals” denir.

JSON Object Literals oluşturmak için aynı JSON formatı kullanılır. JavaScript nesneleri ile JSON nesneleri arasındaki fark, JavaScript nesnelerinin fonksiyonları ve prototipleri içerebilmesine karşın JSON nesnelerinin sadece veri taşıyan yapılar olmasıdır.

```javascript
// JSON Object Literal oluşturma
const person = {
  name: "John",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

// JSON Object Literal kullanımı
console.log(person.name); // John
console.log(person.age); // 30
console.log(person.isStudent); // false
console.log(person.address.city); // New York
```

Bu örnekte, `person` adlı JSON Object Literal oluşturuldu ve ardından bu nesnenin özelliklerine erişildi. JSON Object Literals, JavaScript nesneleri ile benzer bir şekilde kullanılır ancak sadece veri taşıyan yapılardır.

JSON Object Literals, genellikle JSON formatındaki veriyi JavaScript nesnelerine dönüştürmek veya tersine çevirmek amacıyla kullanılırken, veri yapısının sadece veri taşıması gerektiği senaryolarda tercih edilir.

### JSON Neden Geliştiriciler Arasında Popüler?

JSON, modern programlama dillerinde ve yazılım sistemlerinde geniş desteğe sahip veri alışverişi için esnek bir format olduğu için geliştiriciler arasında popülerdir. Metin tabanlı ve hafif olmasının yanı sıra, ayrıştırması kolay bir veri formatına sahiptir; yani, sağlanan verileri anlamak ve yorumlamak için ek kod gerektirmez.

JSON, daha hızlı veri değişimi ve web hizmeti sonuçları elde etmeye yardımcı olduğundan API kod programlama ve web hizmetlerinde ivme kazandı. Ayrıca, geliştiricilerin MongoDB ve diğerleri gibi açık kaynaklı, NoSQL doküman veritabanlarına JSON formatında veri depolayan ve veri alışverişinde ek işlem gerektirmeyen erişime hazır olmalarına yardımcı olur. Popüler ilişkisel veritabanları artık JSON'ı yerel bir format olarak işleyebilir ve JSON'ın avantajlarına daha da fazla uygulama açabilir.

### JSON - HTML - XML Karşılaştırması

Web'de veri depolamak ve iletmek için çeşitli formatlar vardır. Üç popüler seçenek JSON, XML ve HTML'dir. JSON ve XML, veri depolamak ve iletmek için kullanılan formatlardır ve her birinin farklı güçlü yönleri vardır. HTML, bir web sayfasının yapısını oluşturmak için kullanılan bir dildir ve genellikle bu veri depolama formatlarıyla birlikte kullanılır.

- **JSON (JavaScript Nesne Gösterimi)** genellikle veri depolama ve aktarımı için kullanılır. JSON, basit ve kullanımı kolay bir veri formatından yararlanan uygulamalar için popüler bir seçimdir.

- **XML (Genişletilebilir İşaretleme Dili)**, daha karmaşık veri yapılarına olanak tanıyan JSON'a benzer genel amaçlı bir işaretleme dilidir.

- **HTML (Köprü Metni İşaretleme Dili)** web sayfalarının yapısını ve içeriğini oluşturmak için kullanılır. Genellikle bir web sitesinin stilini birleştirmek ve sayfalarına etkileşim eklemek için CSS (Basamaklı Stil Sayfaları) ve JavaScript gibi diğer dillerle birlikte kullanıldığını görürsünüz.

### JSON Veri Tipleri

Geliştirme bağlamında veri türleri, bir programlama dilinde depolanıp değiştirilebilen farklı değer tipleridir. Her veri türünün kendi öznitelikleri ve davranışları vardır. JSON, aşağıdakiler dahil olmak üzere çeşitli veri türlerini destekler:

- **Nesneler (Objects):** JSON nesne veri türü, {} (küme parantezi) arasına eklenen bir ad veya değer çiftleri kümesidir. Anahtarlar dize ve virgülle ayrılmış değerler olmalı ve benzersiz olmalıdır.

- **Diziler (Arrays):** Dizi veri türü, sıralı bir değerler koleksiyonudur. JSON'da dizi değerleri tür dizesi, sayı, nesne, dizi, mantıksal değer veya boş olmalıdır.

- **Dizeler (string):** JSON'da dizeler çift tırnak içine alınır, herhangi bir Unicode karakteri içerebilir ve adlar, adresler veya açıklamalar gibi metin tabanlı verileri depolamak ve iletmek için yaygın olarak kullanılır.

- **Mantıksal Değer (Boolean):** Boolean değerler true veya false olarak belirtilir. Mantıksal değerler tırnak içine alınmaz ve dize değerleri olarak kabul edilir.

- **Boş (Null):** Kasıtlı olarak boş bırakılan bir değeri temsil eder. Bir anahtara değer atanmadığında bu değer boş olarak kabul edilebilir.

- **Sayı (Number):** Sayılar, sayısal değerleri hesaplamalar, karşılaştırmalar veya veri analizi gibi çeşitli amaçlarla depolamak için kullanılır. JSON, ondalık noktaların yanı sıra hem pozitif hem de negatif sayıları destekler. JSON sayısı, JavaScript'in çift kesinlikli kayan nokta formatına uygundur.

### JSON İçin İlk 5 Kullanım Örneği

JSON, MongoDB, Express, React ve Node.js ve MEAN'dan oluşan MERN gibi yığınlarla çalışan geliştiriciler de dahil olmak üzere geliştiriciler tarafından popüler ve yaygın olarak kullanılmaktadır.

- **Verileri sistemler arasında aktarma:** JSON, farklı sistemler ve programlama dilleri arasında veri aktarımı yapmak için idealdir. Örneğin, bir web sitesi veritabanında müşterinin e-posta adresi olduğunu, ancak geçerli olduğundan emin olmak için bunun bir API üzerinden doğrulanması gerektiğini varsayalım. Bir şirket, adres verilerini zaten depolandığı JSON formatında doğrudan adres doğrulama hizmeti API'sine gönderebilir.

- **Kullanıcı tarafından oluşturulan verilerden JSON nesnesi oluşturma:** JSON, geçici verileri depolamak için idealdir. Örneğin, geçici veriler bir web sitesinde gönderilen form gibi kullanıcı tarafından oluşturulabilir. JSON, serileştirme verileri olarak da kullanılabilir.

- **Verileri uygulamalar için konfigüre etme:** Uygulama geliştirirken her birinin bir veritabanına ve günlük dosyası dizin yoluna bağlanmak için kimlik bilgilerine ihtiyacı olur. Kimlik bilgileri ve günlük dosyası yolu, ilgili tüm sistemler tarafından kolayca okunacak ve kullanılacak bir JSON dosyasında belirtilebilir.

- **Karmaşık veri modellerini basitleştirme:** JSON, karmaşık dokümanları anlamlı olduğu belirlenen bileşenlere kadar basitleştirir ve veri çıkartma sürecini öngörülebilir ve insanlar tarafından okunabilir bir JSON dosyasına dönüştürür.

- **Konfigürasyon dosyaları ve veri depolama:** JSON, verilerin kolayca değiştirilmesine ve alınmasına olanak tanır. Özellikle, karmaşık ve hiyerarşik verilerin depolanmasını kolaylaştıran iç içe yerleştirilmiş yapıları destekler. JSON ayrıca dizileri destekleyerek benzer verilerin birden fazla örneğini depolamaya uygun hale getirir.

### JSON Dokümanı Veritabanı Nedir?

JSON'un geliştiriciler arasındaki popülerliği, SQL ve NoSQL veritabanları gibi veri formatına ayrılmış bir dizi yüksek kapasiteli veritabanını ortaya çıkarmıştır.

NoSQL doküman veritabanları, ek işleme gerek kalmadan verileri doğrudan JSON formatında depolar. MongoDB, Redis ve Couchbase gibi popüler NoSQL veritabanları iç içe yerleştirme, nesne referansları ve dizileri de destekler. Bu sayede bir JSON veritabanının bakımı kolaylaşır. Son yıllarda, bu NoSQL veritabanları esnek şemalar ve gelişmiş ölçeklendirme ve performans gibi avantajlar sunacak şekilde gelişmiştir. Esnek ve dinamik veri yapılarını destekleyen bu veritabanları, metin belgeleri, resimler veya sosyal medya akışları gibi yarı yapılandırılmış verilerin depolanmasında mükemmeldir.

Oracle Database gibi yaygın olarak kullanılan SQL veritabanları, artık geliştiricilerin projelerine özel bir JSON veritabanı eklemek zorunda kalmadan JSON ile çalışmasına olanak tanıyan bir veri türü olarak JSON sunuyor. Bu, geliştirme ekiplerine SQL'in köklü avantajlarının yanı sıra grafik, uzamsal, REST, blok zinciri ve ilişkisel veriler dahil olmak üzere tek veritabanında diğer veri türleriyle çalışma olanağı sağlar.

## Tarayıcıda Veri Saklama Yöntemleri: localStorage, sessionStorage ve Cookie

Web geliştirme sürecinde, tarayıcıda kullanıcı tercihleri, oturum bilgileri veya geçici bazı verileri birden fazla kullanılabilirlik özelliğinden dolayı depolamak oldukça yaygındır. Bu veriler, projenin içerisindeki birçok yerde kullanılmaya ihtiyaç duyulurlar ve bunları her kullanmak istediğimizde tekrardan istek atarak bir değişkene atamak hız ve optimizasyon açısından doğru bir yöntem değildir. Bu yüzden bunları projenin içerisinde kullanım amaçlarına veya sürelerine göre kategorize ederek en uygun yöntemle depolamak, korumak ve ihtiyaç dâhilinde oradaki veriyi alarak tekrardan kullanabilmek isteriz.

Tam da burada bu gibi tekrar tekrar kullanılmak istenilen verileri depolamak için tercih edilen 3 farklı kavram devreye giriyor; `sessionStorage`, `localStorage` ve cookie.

### localStorage Nedir ve Nerelerde Kullanılır?

`localStorage`, tarayıcı ön yüzünde saklanılması istenilen bilgilerin depolanması için kullanılan bir metottur. Bu metodun en önemli özelliği manuel olarak temizlenmediği süre boyunca hafızada kalıcı olarak saklanmasıdır. Kullanıcı tarayıcı penceresini veya sekmesini kapatsa bile, bu depolama alanına kaydedilen veriler belirli bir süre boyunca (genellikle kullanıcı tarafından elle temizlenmediği sürece) korunur.

#### Avantajları

- Süresiz olarak depolanıp saklanabilirler

- 5mb a kadar depolama alanlarına sahiptirler

- Veriler hiçbir zaman server tarafına aktarılmayacağı için daha güvenlidir.

#### Dezavantajları

- Sadece istemci tarafından okunabilir

- Verileri string bir dizi şeklinde tutar

- Kullanıcı veya program içerisinde silinmediğinde fazla yer kaplaması

#### localStorage Kullanım Alanları

- Bir Todo List uygulamasında kullanıcının girdiği her bir ögenin bir sonraki açılışında tekrar getirilmesi.

- Filtreli bir sorgulama sayfasında sorgulama verilerinin her zaman hafızada tutularak sayfaya tekrar gelindiğinde aynı sorgulamanın yapılabilmesi.

`localStorage` , birden çok pencereye yayılan ve geçerli oturumun ötesinde süren depolama için tasarlanmıştır. Özellikle, Web uygulamaları, performans nedeniyle client tarafında kullanıcıya ait veriyi `localStorage` sayesinde saklayabilirler ve çerezlerin aksine daha çok veri depolayabilirler. Ayrıca `localStorage` kullanımı ile çerez kullandığımızda her istekte sunucuya gidip gelen verilerin yarattığı ağır yük ortadan kalkmış, hız ve performans yükselmiş oldu.

### sessionStorage Nedir ve Nerelerde Kullanılır?

`sessionStorage`, tarayıcıda oturum süresince geçerli olan verileri depolamak için kullanılan bir web tarayıcı özelliğidir. Her bir tarayıcı sekmesi veya penceresi için ayrı ayrı depolama sağlar ve tarayıcı kapatıldığında bu veriler otomatik olarak silinir.

Bu depolama yöntemi, tarayıcıda geçici bilgilerin tutulmasını sağlar ve genellikle oturum süresi boyunca kullanılır. Yani, kullanıcı bir tarayıcı penceresi açtığında veya tarayıcıyı kapattığında `sessionStorage`'a yazılan veriler kaybolur.

Kullanım yerlerine göre `sessionStorage` avantajı ve dezavantajı değişebilir ama geçici verilerin tutulması senaryosuna göre şu şekilde sıralanabilir.

#### Avantajları

- Geçici verilerin depolanıp saklanabilmesini sağlarlar bu yüzden hafızayı yormazlar

- 5mb a kadar depolama alanlarına sahiptirler

- sessionStorage'da saklanan veriler, kullanıcı bilgisayarında tutulur ve sunucuya gönderilmez. Bu nedenle, sunucu ile iletişim olmadan bilgilerin saklanması güvenli olabilir.

- Basit kullanım kolaylığı

#### Dezavantajları

- Sadece istemci tarafından okunabilir

- Verileri string bir dizi şeklinde tutar

#### sessionStorage Kullanım Alanları

- Geçici kullanıcı bilgilerin tutulması

- Sadece sayfaya ve o an ki duruma özgü geçici durumlarda verilerin tutulması

- Anlık kullanıcı girişlerinin tutulması ve bunların her oturumda sıfırlanılmasının istenilmesi

gibi geçici durumlarda kullanılabilmektedir.

`sessionStorage` kullanıcının tek bir işlem gerçekleştirdiği, ancak aynı anda farklı pencerelerde birden çok işlem gerçekleştirebileceği senaryolar için tasarlanmıştır. Bu penceredeyken açılan aynı siteye ait birçok sayfada erişilebilirdir ve pencere kapattıldığında ise kendini temizler. Bu sayede üçüncü tarafların verilere erişmesi de zorlaşır.

**Not:** Yukarıdaki tanımlarda da gördüğümüz gibi iki mekanizma da depolama alanı sağlar. Aralarındaki en büyük fark ise `sessionStorage` yalnızca tarayıcı açıkken (sayfa yeniden yüklendiğindeki veya geri yüklendiğindeki durumlar dahil olmak üzere) bir depolama alanı sağlarken `localStorage` tarayıcı kapatıldıktan sonra da verileri depolamaya devam eder.

## sessionStorage ve localStorage Metotları

`sessionStorage` ve `localStorage` 5 temel metota sahiptir. Bunlar;

- setItem()

- getItem()

- removeItem()

- key()

- clear()

### 1. setItem()

Bu metot `localStorage` ve `sessionStorage` için veri eklerken kullanılır. İçerisine parametre olarak önce “key” sonra da “value” değerlerini alır.

```javascript
localStorage.setItem("key", "value");
localStorage.setItem("name", "John");

sessionStorage.setItem("key", "value");
sessionStorage.setItem("name", "John");
```

Eğer daha önce belirttiğiniz bir anahtarı kullanırsanız kaydetmek için veri eski kaydın üzerine yazılacaktır. Veriniz güncellenmiş olacaktır. Veriyi kontrol edip yoksa kaydetmek isterseniz. verinin oluşturulup oluşturulmadığını kontrol etmeniz yeterli olacaktır. Verileri kaydederken sadece string biçiminde kayıt yapıldığını bilmemiz gerekmektedir. Karmaşık bir veriyi kaydetmek istediğinizde `toString()` metodu çalıştırılmalı ve üretilen değer kaydedilmelidir. JSON verisini kaydetmek içinse `JSON.stringify()` metodu kullanılmalıdır.

### 2. getItem()

Bu metot, `localStorage` ve `sessionStorage` içinde saklanan verilere erişmek için kullanılır. Parametre olarak bir anahtar (key) alır ve bu anahtara karşılık gelen değeri (value) döndürür. Eğer belirtilen anahtar için bir değer yoksa, `null` döner.

```javascript
localStorage.setItem("name", "John");
localStorage.getItem("name"); // John

sessionStorage.setItem("name", "John");
sessionStorage.getItem("lastname"); // null
```

```javascript
localStorage.setItem("renk", "mavi");

console.log(localStorage.getItem("renk")); // mavi
console.log(localStorage.getItem("sehir")); // null
```

### 3. key()

Bu metot `localStorage` ve `sessionStorage` için seçilen indexteki “key” değerini bize döndürür. İçerisine parametre olarak sayı alır.

```javascript
localStorage.key(i);
localStorage.key(0); // "name"sessionStorage.key(i);
sessionStorage.key(0); // "name"
```

### 4. removeItem()

Bu metot `localStorage` ve `sessionStorage` içerisinde seçilen verileri silerken kullanılır. İçerisine parametre olarak “key” değerini alır.

```javascript
localStorage.removeItem("key");
localStorage.removeItem("name");

localStorage.getItem("name"); // null

sessionStorage.removeItem("key");
sessionStorage.removeItem("name");

sessionStorage.getItem("lastname"); // null
```

### 5. clear()

Bu metot çağırıldığında `localStorage` ve `sessionStorage` içerisindeki tüm veriyi temizler.

```javascript
localStorage.clear();
```

### Cookie Nedir ve Nerelerde Kullanılır?

Cookie (Çerez), web tarayıcısı tarafından kullanıcının bilgisayarında saklanan küçük metin dosyalarıdır. Bu dosyalar, web siteleri tarafından tarayıcıya gönderilir ve tarayıcı tarafından kullanıcının bilgisayarında depolanır. Çerezler, özellikle kullanıcı oturum bilgilerini, tercihleri ve diğer kişisel bilgileri saklamak için kullanılır.

Cookiler aynı zamanda çapraz alan saklama özelliğine yani aynı kök alan adlarına sahip farklı web siteleri arasında da veri aktarımını sağlayabilecek özelliklere de sahiptir.

**Örnek:** site1.com ile sub.site1.com arasında veri akışını sağlayabilirler.

#### Kullanım Yerleri

- **Oturum Yönetimi:** Kullanıcı girişi durumunu takip etmek için çerezler kullanılır. Kullanıcı giriş yaptığında, sunucu bir çerez oluşturup tarayıcıya gönderir ve tarayıcı bu çerezi saklar. Bu sayede kullanıcının oturum bilgileri korunur ve tarayıcı penceresi kapatılsa bile kullanıcı girişi hatırlanır.

- **Kişiselleştirme:** Kullanıcının tercihlerini ve siteye özel ayarlarını saklamak için çerezler kullanılır. Örneğin, kullanıcının seçtiği dil, tema veya benzeri tercihler çerezler aracılığıyla saklanabilir.

- **Analitik Veri Toplama:** Çerezler, web sitesi kullanım istatistikleri toplamak için kullanılabilir. Google Analytics gibi analitik araçlar, çerezleri kullanarak ziyaretçi sayıları, sayfa görüntüleme sayıları ve benzeri verileri analiz eder.

- **Reklam Hedefleme:** Çerezler, kullanıcının web'deki gezinme alışkanlıkları üzerinden reklam hedefleme için kullanılabilir. Bu, reklam şirketlerine kullanıcının ilgi alanlarına göre reklam gösterme imkanı sağlar.

### sessionStorage,localStorage ve Cookie Karşılaştırılması

| Özellik                 | Cookie                                                 | localStorage                                                      | sessionStorage                                                      |
| ----------------------- | ------------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Boyut Sınırlamaları** | Genellikle 4 KB                                        | Genellikle 5 MB                                                   | Genellikle 5 MB                                                     |
| **Sunucu ile İletişim** | Otomatik gönderim, her HTTP isteğiyle                  | Sunucuya otomatik gönderim yok, sadece istemci tarafında saklanır | Sunucuya otomatik gönderim yok, sadece istemci tarafında saklanır   |
| **Süre Kontrolü**       | Belirli bir tarihte otomatik silinme (expires)         | Süre kontrolü yok, veriler elle temizlenene kadar kalıcıdır       | Tarayıcı penceresi veya sekmesi kapatıldığında otomatik silinir     |
| **Çapraz Alan Saklama** | Evet                                                   | Hayır                                                             | Hayır                                                               |
| **Güvenlik**            | Güvenlik sorunları olabilir, HTTPS kullanımı önemlidir | Daha güvenli, HTTPS kullanımı önerilir                            | Daha güvenli, HTTPS kullanımı önerilir                              |
| **Kullanım Alanları**   | Oturum yönetimi, tercihler, analitik veri              | Büyük veri depolama, sunucu ile bağımsız çalışma                  | Geçici bilgilerin saklanması, tarayıcı penceresi açık olduğu sürece |

## Promise Nedir?

Promise, JavaScript'te gelecekte tamamlanacak bir işlemin sonucunu temsil eden bir nesnedir. Asenkron işlemleri daha okunabilir ve yönetilebilir hale getirmek için kullanılır.

Bir Promise, üç durumda olabilir:

- **Pending (Beklemede):** İşlem henüz tamamlanmamıştır.

- **Fulfilled (Başarılı):** İşlem başarıyla tamamlanmıştır (resolve).

- **Rejected (Başarısız):** İşlem başarısız olmuştur (reject).

Promise yapısı, olumlu sonuçları `.then()` bloğunda, hatalı durumları ise `.catch()` bloğunda işler. Bu sayede callback’lerle uğraşmadan daha düzenli bir kod yapısı sağlanır.

- Promise istenilen görevi yerine getirdiğinde değeri değişmez (immutable)

- Sadece bir kere başarıya (resolved) ulaşır, veya başarısız (rejected) olur.

- Öngörülemeyen hatalar otomatik olarak Promise’i başarısız (rejected) sonuca götürür. Bu da hataları kontrol etme noktasında faydalıdır.

- Yapısı gereği, gelecekteki bir değerin göstergesi olduğundan daha güvenilirdir.

### Promise Sözdizimi

```javascript
// Promise Oluşturma
const siparisHazirlaniyor = new Promise((resolve, reject) => {
  let hazir = true;

  if (hazir) {
    resolve("Sipariş hazırlandı!");
  } else {
    reject("Sipariş hazırlanırken bir hata oluştu.");
  }
});

// Promise Kullanma
siparisHazirlaniyor
  .then((mesaj) => {
    console.log("Başarılı:", mesaj);
  })
  .catch((hata) => {
    console.log("Hata:", hata);
  });
```

- Promise’leri `new` öneki ile tanımlıyoruz.

- Başarılı (resolve) ve başarısız (reject) durumlarda çağıralacak iki fonksiyon ile birlikte oluşturuyoruz. (Sıralamayı değiştirmemek kaydıyla bu iki fonksiyona farklı isimler de verebilirsiniz ancak genelde bu isimler tercih edilmektedir.)

- Promise’leri bir değişkene atayabiliriz.

- Promise beklenilen işlemi gerçekleştirdikten sonra yapılacak adımlar için `.then()` fonksiyonu çağırılır. İçerisindeki fonksiyonun parametresi `resolve()` ile gönderilen parametredir.

- Eğer istek dahilinde `reject()` çağırıldığında veya öngörülemeyen bir hata sonucu promise başarısız olduğunda `.then()` fonksiyonu es geçilerek, `.catch()` içerisindeki fonksiyon çağırılır ve hatalı durumda yapılacak adımlar izlenir.

### Promise’lar Neden Kullanılır?

#### 1. Asenkron İşlemleri Yönetmek

JavaScript, tek iş parçacıklı (single-threaded) bir yapı kullanır. Promise’lar, zaman alıcı işlemler sırasında bloklamayı önler.

#### 2. Callback Hell’i Engellemek

Promise, callback’lerin iç içe geçtiği “callback hell” durumunu çözmek için idealdir. Geleneksel yöntemle yazılmış kod şu şekilde karmaşık hale gelebilir:

```javascript
getData((response) => {
  processResponse(response, (processed) => {
    saveData(processed, (result) => {
      console.log(result);
    });
  });
});
```

Promise ile bu kod şu şekilde düzenlenebilir:

```javascript
getData()
  .then(processResponse)
  .then(saveData)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

**Not:** Bir fonksiyon tamamlandığında, ilgili geri dönüş için callback fonksiyon bize güzel bir çözüm sunuyor. Ancak bizim amaçlarımızdan birisi neydi? Birbirleriyle ilişkili işlemlerin birbirine bağlı olarak çalışması, şimdi callback fonksiyon ile biz sonuçları beklemek durumunda kalıyoruz. Şöyle bir yapımız olsaydı biz işlem sonuçlarını beklerken bir söz (promise) verelim. İstediğimiz sonucu aldığımızda devam edelim, bir hata ile karşılaştığımızda başka bir işlem yapalım. İşte burada Promise yapısı devreye girer.

## Promise Metotları

### 1. Promise.all()

`Promise.all()`, birden fazla Promise'in hepsinin başarıyla tamamlanmasını bekler. Tüm işlemler başarılıysa, bir dizi olarak sonuçları döner. Eğer içlerinden biri bile hata verirse, `.catch()` kısmı çalışır.

```javascript
const p1 = Promise.resolve("Kahve hazır");
const p2 = Promise.resolve("Pasta geldi");
const p3 = Promise.resolve("Fatura hazır");

Promise.all([p1, p2, p3])
  .then((sonuclar) => {
    console.log("Tüm işlemler tamam:", sonuclar);
  })
  .catch((hata) => {
    console.log("Bir hata oluştu:", hata);
  });
```

### 2. Promise.race()

`Promise.race()`, Promise'lerden hangisi önce tamamlanırsa onun sonucunu döner. İlk tamamlanan ya başarılı olur ya da hata verir diğerlerine bakmaz.

```javascript
const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("P1 bitti"), 1000)
);
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 bitti"), 500));

Promise.race([p1, p2])
  .then((sonuc) => {
    console.log("İlk tamamlanan:", sonuc);
  })
  .catch((hata) => {
    console.log("İlk hata:", hata);
  });
```

**Not:** Promise nesnesinin kendine ait 4 tane metodu bulunmaktadır. Bunlar yeni bir promise `(new Promise())` oluşturmadan kullanılabilir.

## Async/await Nedir?

Async/await, JavaScript’te asenkron programlama için kullanılan bir yapıdır. Asenkron programlama, uzun sürecek işlemleri arka planda çalıştırarak, kullanıcının web sayfasının kilitlenmesini önlemek için kullanılır. Asenkron programlama ile, işlemin sonuçları elde edilene kadar işlemler devam eder.

Async/await, asenkron işlemleri yönetmek için Promise objelerine dayalı bir yapıdır. Promise objeleri, bir işlemin ne zaman tamamlandığını takip etmek için kullanılır. Async/await, Promise objelerini kullanarak işlemleri yönetir ve kodun daha okunaklı olmasını sağlar.

### Async/await Nasıl Çalışır?

Async/await, iki ana anahtar kelime kullanarak çalışır: `async` ve `await`. `async` anahtar kelimesi, bir işlemin asenkron olduğunu belirtir. `await` anahtar kelimesi, bir işlemin tamamlanmasını bekler ve işlemin sonucunu döndürür.

Aşağıdaki örnekte, `async` anahtar kelimesi kullanılarak `getUserData` fonksiyonu tanımlanmıştır. Bu fonksiyon, bir kullanıcının verilerini almak için bir HTTP isteği gönderir. `await` anahtar kelimesi, HTTP isteğinin tamamlanmasını bekler ve sonucu döndürür.

```javascript
async function getUserData(userId) {
  const response = await fetch(`https://example.com/api/users/${userId}`);
  const userData = await response.json();
  return userData;
}
```

`getUserData` fonksiyonu, HTTP isteği tamamlandığında sonucu döndürür. Bu sayede, fonksiyonu çağıran kod bloğu, sonucu beklemek zorunda kalmaz.

```javascript
getUserData(123)
  .then((userData) => {
    console.log(userData);
  })
  .catch((error) => {
    console.error(error);
  });
```

Yukarıdaki örnekte, `getUserData` fonksiyonu Promise döndürür. Bu nedenle, sonuçlar `then` ve `catch` bloklarında ele alınır.

### Async/await’in Avantajları

Async/await, Promise’lerle karşılaştırıldığında birkaç avantaja sahiptir. En önemli avantajları şunlardır:

#### 1. Daha Okunaklı Kod

Async/await, kodun daha okunaklı hale gelmesini sağlar. Kod, asenkron işlemler için Promise’lerin kullanımı nedeniyle çok karmaşık hale gelebilir. Async/await, Promise’leri kullanarak asenkron işlemleri yönetmek için kullanılır, ancak daha okunaklı bir şekilde yapar.

#### 2. Error Handling Kolaylığı

Async/await, hata yönetimi için try-catch bloklarını kullanma kolaylığı sağlar. Promise’lerde hata yönetimi için `.then()` ve `.catch()` zincirleri kullanılırken, async/await ile hata yakalama işlemleri daha doğal bir şekilde gerçekleştirilebilir.

```javascript
async function getUserData(userId) {
  try {
    const response = await fetch(`https://example.com/api/users/${userId}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error(error);
  }
}
```

#### 3. Sıralı Kodlama

Async/await, sıralı kodlama yapılabilmesini sağlar. Birçok asenkron işlemi sırayla gerçekleştirmek, Promise’lerde oldukça zordur. Async/await ile, işlemler sıralı bir şekilde yazılabilir ve daha okunaklı bir şekilde yönetilebilir.

```javascript
async function getUserDataAndPosts(userId) {
  const userData = await getUserData(userId);
  const userPosts = await getUserPosts(userId);
  return { userData, userPosts };
}
```

Yukarıdaki örnekte, `getUserDataAndPosts` fonksiyonu, kullanıcının verilerini ve gönderilerini sırayla alır ve bir nesne olarak döndürür.

### Await Yapısı

Await yapısı, sadece Promise’lerle çalışır. Bu nedenle, bir fonksiyon Promise döndürmüyorsa, await kullanılamaz.

```javascript
async function exampleFunction() {
  const result = await nonPromiseFunction(); // Hata!
}
```

### Async Fonksiyonların Döndürdüğü Değerler

Async fonksiyonlar, Promise döndürürler. Bu, async fonksiyonların sonuçları Promise objeleri olduğu anlamına gelir. Bu Promise objesi, async fonksiyonun tamamlanmasıyla sonuçlanır.

```javascript
async function exampleFunction() {
  return "Hello World";
}

exampleFunction().then((result) => console.log(result)); // Hello World
```

### Paralel Çalışma

Async/await yapısı, sıralı kodlama kolaylığı sağlar, ancak birçok işlemi paralel olarak çalıştırmak için de kullanılabilir. Bu, `Promise.all()` metodunu kullanarak yapılabilir.

```javascript
async function getUserDataAndPosts(userId) {
  const [userData, userPosts] = await Promise.all([
    getUserData(userId),
    getUserPosts(userId),
  ]);
  return { userData, userPosts };
}
```

Yukarıdaki örnekte, `Promise.all()` metodu kullanılarak, `getUserData` ve `getUserPosts` işlemleri paralel olarak çalıştırılmış ve sonuçları bir dizi içinde beklenmiştir.

Async/await yapısı, modern JavaScript’te asenkron işlemleri yönetmek için kullanılan en yaygın yapıdır. Yapısı, kod yazımını kolaylaştırır ve okunaklı hale getirir. Yapının kullanımıyla birlikte, geliştiricilerin hata yönetimi, sıralı kodlama ve paralel işlem yapma gibi işlemler kolaylaşır.

### Async Fonksiyonlarının Çalışma Sırası

Async fonksiyonları çağırdığımızda, çağrılar sırasıyla gerçekleştirilir. Ancak, bir fonksiyonun çağrısı tamamlandığında, bir sonraki çağrı otomatik olarak gerçekleştirilmez. Bunun yerine, bir önceki çağrının tamamlanması beklenir.

```javascript
async function exampleFunction() {
  console.log("Step 1");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Step 2");
}

exampleFunction();
console.log("Step 3");
```

Yukarıdaki örnekte, `exampleFunction()` çağrıldığında, `Step 1` yazdırılır, ardından bir saniyelik gecikme oluşturulur ve `Step 2` yazdırılır. Ancak, `exampleFunction()` çağrısı tamamlanmadan önce, `Step 3` yazdırılır.

## Async Fonksiyonların Alternatifleri

Async/await yapısı, JavaScript’te asenkron işlemleri yönetmek için kullanılan en yaygın yapıdır. Ancak, diğer bazı alternatifler de vardır.

### Callback Fonksiyonları

Callback fonksiyonları, JavaScript’te asenkron işlemleri yönetmek için kullanılan en eski yöntemlerden biridir. Bir işlem tamamlandığında çağrılan bir fonksiyondur. Ancak, callback fonksiyonlarının kullanımı, kodun okunaklığını azaltabilir ve hata yönetimini zorlaştırabilir.

```javascript
function getUserData(userId, callback) {
  fetch(`https://example.com/api/users/${userId}`)
    .then((response) => response.json())
    .then((userData) => callback(userData))
    .catch((error) => console.error(error));
}

getUserData(1, (userData) => console.log(userData));
```

Yukarıdaki örnekte, `getUserData` fonksiyonu, `callback` parametresi aracılığıyla sonuçları döndürür.

### Promise’ler

Promise’ler, JavaScript’te asenkron işlemleri yönetmek için kullanılan bir başka yapıdır. Promise’ler, async/await yapısına benzer şekilde kullanılabilir, ancak kod yazımı daha uzun ve karmaşıktır.

```javascript
function getUserData(userId) {
  return fetch(`https://example.com/api/users/${userId}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

getUserData(1)
  .then((userData) => console.log(userData))
  .catch((error) => console.error(error));
```

Yukarıdaki örnekte, `getUserData` fonksiyonu, Promise objesi döndürür. Sonuçlar `.then()` ve `.catch()` zincirleri aracılığıyla işlenir.

**Not:** Bu fonksiyonların amacı senkron olan yani çağırıldığı şekilde ve birbirlerini beklemeyen fonksiyonları, asenkron hale çevirmemize yarar. Bir fonksiyon başarılı olduğunda başka bir fonksiyon çalıştırmak istersek ve o sırada bu işlemi bekletmek istersek bu yapıyı kullanırız. Promise kullanım mantığının aynısıdır sadece daha anlaşılır bir yapıdır.

Bir fonksiyon `async` anahtar kelimesi ile birlikte tanımlanırsa, fonksiyonun olumlu sonuçlanması sonucunda bir Promise döner. Bir `async` fonksiyon `await` anahtar kelimesi ile birlikte kullanılırsa ilgili Promise olumlu bir şekilde dönene kadar `async` fonksiyonunun çalışması bekletilir.

- Bir fonksiyonun başına `async` yazıldığında her zaman promise return eder ve `await` ile içerde çözümlenir.

- Await sadece `async` fonksiyonların içinde çalışır.

- Await promise setlenene kadar işlemi bekletir ve setlendikten sonra sonucu döndürür.

- Promise’te kullanılan then işlemini `await` halleder.

## HTTP Nedir?

HTTP (Hypertext Transfer Protocol), web tarayıcıları ve sunucular arasında bilgi iletişimi sağlayan bir iletişim protokolüdür. HTTP, tarayıcıdan sunucuya istek gönderme ve sunucudan tarayıcıya yanıt alma şeklinde çalışır.

### HTTP İstekleri

HTTP istekleri, tarayıcıdan sunucuya bilgi talep etmek için kullanılır. Farklı amaçlar için kullanılan farkı türde HTTP istekleri vardır.

- **GET:** Sunucudan belirli bir kaynağı almak için kullanılır. Veri talep edilir, ancak sunucu üzerinde herhangi bir değişiklik yapmaz.

- **POST:** Sunucuya veri göndermek için kullanılır. Özellikle kullanıcı tarafından doldurulan form verilerini göndermek için sıkça kullanılır.

- **PUT:** Bir kaynağı sunucuya göndermek veya bir kaynağı güncellemek için kullanılır. Örneğin, bir dosyayı sunucuya yüklemek veya mevcut bir kaynağı güncellemek için kullanılabilir.

- **DELETE:** Belirli bir kaynağı silmek için kullanılır. Sunucu, bu kaynağı siler ve bir yanıtla bildirir.

- **HEAD:** GET isteğine benzer, ancak sadece başlık bilgilerini alır. İçerik (body) verisini almadan sadece başlık bilgilerini döndürür. Genellikle bir kaynağın var olup olmadığını kontrol etmek için kullanılır.

- **PATCH:** Bir kaynağın belirli bir kısmını güncellemek için kullanılır. Bu, bir kaynağı tamamen güncellemeden sadece belirli alanlardaki değişiklikleri uygulamak için kullanışlıdır.

- **OPTIONS:** Bir sunucudaki bir kaynağın hangi HTTP yöntemleriyle etkileşime girebileceğini belirlemek için kullanılır. CORS (Cross-Origin Resource Sharing) kontrolü için OPTIONS isteği sıkça kullanılır.

- **TRACE:** Sunucuya gönderilen bir isteği geri almak için kullanılır. Bu, bir isteğin sunucu üzerinde nasıl değiştiğini izlemek için kullanılabilir, ancak güvenlik açısından potansiyel riskler taşıdığından genellikle devre dışı bırakılmıştır.

## Fetch API Nedir?

Fetch API, modern tarayıcılarda bulunan ve HTTP isteklerini daha esnek bir şekilde yönetmemizi sağlayan bir JavaScript API’sidir. XMLHttpRequest’e alternatif olarak kullanılır ve Promiseleri temel alır.

### Fetch API Parametreleri

#### 1.URL (Zorunlu)

- **url:** Fetch işleminin hedef URL'sini belirtir. Bu parametre zorunludur ve isteğin yapılacağı URL'yi temsil eder.

#### 2.Request Init

Fetch işlemi için seçenekleri içeren bir nesnedir. Bu nesne, isteği özelleştirmek ve belirli konfigürasyonları eklemek için kullanılır. init nesnesi içinde kullanılabilecek bazı önemli seçenekler şunlardır:

- **method:** HTTP metodunu belirtir. Örneğin, "GET", "POST", "PUT", "DELETE" gibi. Varsayılan değeri "GET"tir.

- **headers:** HTTP başlıklarını belirtir. Örneğin, "`Content-Type`": "`application/json`" gibi.

- **body:** İstek gövdesini (request body) belirtir. Özellikle POST, PUT gibi metodlarda kullanılır. JSON.stringify veya FormData gibi yöntemlerle hazırlanır.

- **mode:** Ağ modunu belirtir. Örneğin, "cors", "no-cors", "same-origin" gibi. Varsayılan değeri "cors"tur.

- **credentials:** Kimlik bilgisi (credential) kullanımını belirtir. Örneğin, "same-origin", "include", "omit" gibi. Varsayılan değeri "same-origin"dur.

- **cache:** Tarayıcı önbellek kullanımını belirtir. Örneğin, "default", "no-store", "reload", "force-cache" gibi. Varsayılan değeri "default"tur.

- **redirect:** Yönlendirmelerin nasıl ele alınacağını belirtir. Örneğin, "follow", "error", "manual" gibi. Varsayılan değeri "follow"dur.

- **referrer:** Referans politikasını belirtir. Örneğin, "no-referrer", "client" gibi. Varsayılan değeri "client"dır.

- **referrerPolicy:** HTTP başlıklarında “Referer” alanının nasıl olması gerektiğini belirtir. Örneğin: “no-referrer”, “no-referrer-when-downgrade”, “same-origin”, “origin”, “strict-origin”, “origin-when-cross-origin”, “strict-origin-when-cross-origin”, “unsafe-url”.

- **signal:** Bir `AbortController` nesnesi içinde bulunan bir sinyali (signal) belirtir. Bu, isteği iptal etmek veya izlemek için kullanılır.

- **window:** Tarayıcı ortamında kullanıldığında, bu seçenek, fetch işleminin tarayıcı penceresini içeren bir nesneyi belirtir. Bu, örneğin tarayıcı penceresinde bir iframe içinde çalıştığınızda faydalı olabilir.

Bu seçenekler, Fecth API’nin çok yönlü ve esnek olmasını sağlar ve farklı türde HTTP isteklerini özelleştirmek için kullanılabilir.

### GET

```javascript
const url = "https://jsonplaceholder.typicode.com/posts";

function fetchWithThen() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("GET İsteği Cevabı:", data);
    })
    .catch((error) => {
      console.error("Hata:", error);
    });
}

async function fetchWithAwaitAsync() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

fetchWithThen();
fetchWithAwaitAsync();
```

- **fetchWithThen:** Bu fonksiyon, `fetch` ile GET isteği yapar ve ardından Promise zinciri kullanılarak işlenir. İlk olarak, yanıtın durumu kontrol edilir (`response.ok`). Eğer yanıt başarılı değilse, bir hata fırlatılır. Başarılı ise yanıt JSON formatına dönüştürülür ve konsola yazdırılır.

- **fetchWithAwaitAsync:** Bu fonksiyon aynı GET isteğini yapar, ancak async/await kullanılarak işlenir. `fetch` fonksiyonu bir Promise döndürdüğü için, bu fonksiyon içinde `await` kullanarak beklenir. Daha sonra yanıtın durumu kontrol edilir ve başarılı ise yanıt JSON formatına dönüştürülüp konsola yazdırılır.

### POST

```javascript
function createPostWithThen() {
  const postData = {
    title: "Create Post With Then",
    body: "Content",
    userId: 1,
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("POST İsteği Cevabı:", data);
    })
    .catch((error) => {
      console.error("Hata:", error);
    });
}

async function createPostWithAsyncAwait() {
  const postData = {
    title: "Create Post With Async Await",
    body: "Content",
    userId: 1,
  };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  const data = await response.json();
  console.log(data);
}

createPostWithThen();
createPostWithAsyncAwait();
```

- **createPostWithThen:** Bu fonksiyon, `fetch` ile POST isteği yapar ve aynı şekilde Promise zinciri kullanarak işlenir. İlk olarak, yanıtın durumu kontrol edilir. Eğer yanıt başarılı değilse, bir hata fırlatılır. Başarılı ise yanıt JSON formatına dönüştürülüp konsola yazdırılır.

- **createPostWithAsyncAwait:** Bu fonksiyon aynı POST isteğini yapar, ancak async/await kullanılarak işlenir. `fetch` fonksiyonu bir Promise döndürdüğü için, bu fonksiyon içinde `await` kullanarak beklenir. Daha sonra yanıtın durumu kontrol edilir ve başarılı ise yanıt JSON formatına dönüştürülüp konsola yazdırılır.

### PUT

```javascript
function updatePostWithThen(postId, updatedData) {
  const putUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  fetch(putUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("PUT İsteği Cevabı:", data);
    })
    .catch((error) => {
      console.error("Hata:", error);
    });
}

async function updatePostWithAsyncAwait(postId, updatedData) {
  const putUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  const response = await fetch(putUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  const data = await response.json();
  console.log("PUT İsteği Cevabı:", data);
}

// Örnek kullanım
const postIdToUpdate = 1;
const updatedData = {
  title: "Updated Post Title",
  body: "Updated Post Content",
};

updatePostWithThen(postIdToUpdate, updatedData);
updatePostWithAsyncAwait(postIdToUpdate, updatedData);
```

- **updatePostWithThen:** Bu fonksiyon, `fetch` ile PUT isteği yapar ve ardından Promise zinciri kullanarak işlenir. İlk olarak, yanıtın durumu kontrol edilir (`response.ok`). Eğer yanıt başarılı değilse, bir hata fırlatılır. Başarılı ise yanıt JSON formatına dönüştürülür ve konsola yazdırılır.

- **updatePostWithAsyncAwait:** Bu fonksiyon aynı PUT isteğini yapar, ancak async/await kullanılarak işlenir. `fetch` fonksiyonu bir Promise döndürdüğü için, bu fonksiyon içinde `await` kullanarak beklenir. Daha sonra yanıtın durumu kontrol edilir ve başarılı ise yanıt JSON formatına dönüştürülüp konsola yazdırılır.

### PATCH

```javascript
function patchDataWithThen(postId, updatedData) {
  const patchUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  fetch(patchUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("PATCH İsteği Cevabı:", data);
    })
    .catch((error) => {
      console.error("Hata:", error);
    });
}

async function patchDataWithAsyncAwait(postId, updatedData) {
  const patchUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  const response = await fetch(patchUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  const data = await response.json();
  console.log("PATCH İsteği Cevabı:", data);
}

// Örnek kullanım
const postIdToPatch = 1;
const updatedDataForPatch = {
  title: "Patched Post Title",
};

patchDataWithThen(postIdToPatch, updatedDataForPatch);
patchDataWithAsyncAwait(postIdToPatch, updatedDataForPatch);
```

- **patchDataWithThen:** Bu fonksiyon, `fetch` ile PATCH isteği yapar ve ardından Promise zinciri kullanarak işlenir. İlk olarak, yanıtın durumu kontrol edilir (`response.ok`). Eğer yanıt başarılı değilse, bir hata fırlatılır. Başarılı ise yanıt JSON formatına dönüştürülür ve konsola yazdırılır.

- **patchWithDataAsyncAwait:** Bu fonksiyon aynı PATCH isteğini yapar, ancak async/await kullanılarak işlenir. `fetch` fonksiyonu bir Promise döndürdüğü için, bu fonksiyon içinde `await` kullanarak beklenir. Daha sonra yanıtın durumu kontrol edilir ve başarılı ise yanıt JSON formatına dönüştürülüp konsola yazdırılır.

### DELETE

```javascript
function deletePostWithThen(postId) {
  const deleteUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  fetch(deleteUrl, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("DELETE İsteği Başarıyla Tamamlandı");
    })
    .catch((error) => {
      console.error("Hata:", error);
    });
}

async function deletePostWithAsyncAwait(postId) {
  const deleteUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  const response = await fetch(deleteUrl, {
    method: "DELETE",
  });

  if (response.ok) {
    console.log("DELETE İsteği Başarıyla Tamamlandı");
  } else {
    console.error("Hata: Network response was not ok");
  }
}

// Örnek kullanım
const postIdToDelete = 1;

deletePostWithThen(postIdToDelete);
deletePostWithAsyncAwait(postIdToDelete);
```

- **deletePostWithThen:** Bu fonksiyon, `fetch` ile DELETE isteği yapar ve ardından Promise zinciri kullanarak işlenir. İlk olarak, yanıtın durumu kontrol edilir. Eğer yanıt başarılı değilse, bir hata fırlatılır. Başarılı ise konsola "DELETE İsteği Başarıyla Tamamlandı" mesajı yazdırılır.

- **deletePostWithAsyncAwait:** Bu fonksiyon aynı DELETE isteğini yapar, ancak async/await kullanılarak işlenir. `fetch` fonksiyonu bir Promise döndürdüğü için, bu fonksiyon içinde `await` kullanarak beklenir. Daha sonra yanıtın durumu kontrol edilir ve başarılı ise konsola "DELETE İsteği Başarıyla Tamamlandı" mesajı yazdırılır.

## Closure Nedir?

Closure, JavaScript’te bir fonksiyonun, tanımlandığı ortamda (scope’ta) bulunan değişkenlere erişimini koruması anlamına gelir.

Bir fonksiyon, başka bir fonksiyonun içinde tanımlandığında, o dış fonksiyondaki değişkenlere erişebilir. Ve o dış fonksiyon çalışmasını tamamladıktan sonra bile, içteki fonksiyon bu değişkenleri "hatırlamaya" devam eder.

İşte bir fonksiyonun bu "hatırlama" yeteneği, yani tanımlandığı scope’taki değişkenleri tutmaya devam etmesi, closure olarak adlandırılır.

**Not:** Closure, bir fonksiyonun tanımlandığı scope'taki değişkenlere, daha sonra başka bir yerden çalıştırılsa bile hatırlaması ve kullanabilmesidir.

**Örnek:**

```javascript
function sayacOlustur() {
  let sayi = 0;

  return function () {
    sayi++;
    console.log(sayi);
  };
}

const sayac = sayacOlustur();

sayac(); // 1
sayac(); // 2
sayac(); // 3
```

- `sayacOlustur()` fonksiyonu çağrıldığında, içinde `sayi` adında bir değişken tanımlanıyor.

- Bu fonksiyon, içinde `sayi`'yi artıran başka bir fonksiyon döndürüyor.

- Dıştaki fonksiyon çalışmayı bitirmiş olsa da, dönen iç fonksiyon `sayi` değişkenini hala "hatırlıyor" ve onu kullanabiliyor.

- İşte bu durum closure’dır. Çünkü iç fonksiyon, tanımlandığı scope'taki değişkeni (`sayi`) saklamış ve kullanmaya devam etmiştir.

### Closure Kullanım Alanları

- Private değişkenler oluşturmak (nesne dışından erişilemeyen veri).

- Fonksiyonel programlama teknikleri (currying, memoization vs).

- Event handler'lar ve async işlemlerde scope'u korumak.

**Örnek: setTimeout**

```javascript
function bekle(mesaj, süre) {
  setTimeout(function () {
    console.log(mesaj);
  }, süre);
}

bekle("Merhaba!", 2000); // 2 saniye sonra "Merhaba!" yazar
```

**Örnek: addEventListener**

```javascript
function butonDinle(butonID) {
  let sayac = 0;

  document.getElementById(butonID).addEventListener("click", function () {
    sayac++;
    console.log(`Butona ${sayac} kez tıkladın.`);
  });
}
```

**Örnek: Private Değişken Yaratmak**

```javascript
function kullaniciOlustur(isim) {
  let gizliSifre = "1234";

  return {
    isim: isim,
    sifreyiDogruMu: function (sifre) {
      return sifre === gizliSifre;
    },
  };
}

const ali = kullaniciOlustur("Ali");
console.log(ali.isim); // Ali
console.log(ali.sifreyiDogruMu("1234")); // true
console.log(ali.sifreyiDogruMu("0000")); // false
```

## DOM (Document Object Model) Nedir?

DOM (Document Object Model), bir web sayfasını tarayıcının anlayabileceği ve programatik olarak manipüle edilebilecek bir nesne modeline dönüştüren bir programlama arayüzüdür. Tarayıcı bir HTML veya XML belgesini yüklediğinde, bu belgeyi DOM ağacı (DOM tree) adı verilen hiyerarşik bir yapı olarak bellekte temsil eder. Bu yapı, sayfadaki tüm öğeleri (başlıklar, paragraflar, resimler, bağlantılar vb.) birer nesne olarak tanımlar ve bu nesneler birbirleriyle ebeveyn-çocuk ilişkileri kurar.

Bu nesne temelli yapı sayesinde geliştiriciler:

- Sayfa içeriğini dinamik olarak güncelleyebilir,

- Yeni öğeler ekleyebilir,

- Mevcut öğeleri kaldırabilir,

- Kullanıcı etkileşimlerine (tıklama, klavye girişi vb.) tepki verebilir.

### DOM Yapısı

DOM, hiyerarşik bir düğüm (node) ağacı şeklindedir:

```
Document
 └── html
     ├── head
     │    └── title
     └── body
          ├── h1
          └── p
```

### Neden Önemlidir?

DOM, web geliştiricilere kullanıcı etkileşimlerine yönelik dinamik ve etkileşimli içerikler oluşturma imkânı sunar. Kullanıcı bir butona tıkladığında ya da bir form gönderdiğinde, sayfa içeriği JavaScript DOM kullanılarak dinamik bir şekilde güncellenebilir. Bu yapı, modern web sitelerinin ve uygulamaların temelini oluşturur.

## DOM Elementleri

DOM yöntemleri, web sayfalarındaki HTML elementlerine JavaScript kullanarak erişmek ve bu elementleri değiştirmek için kullanılır. Bu yöntemler, belirli türdeki elementleri seçmek ve üzerinde değişiklik yapmak amacıyla kullanılır.

### getElementById()

Bu yöntem, sayfa üzerindeki bir elementin `id` (kimlik) özniteliğine göre seçim yapar.

### getElementsByClassName()

Bu yöntem, belirli bir `class` (sınıf) özniteliğine sahip tüm elementleri seçmek için kullanılır.

```javascript
const items = document.getElementsByClassName("myClass");
```

### getElementsByTagName()

Bu yöntem, belirli bir etiket adına (`tag` name) sahip tüm elementleri seçmek için kullanılır.

```javascript
const paragraphs = document.getElementsByTagName("p");
```

### querySelector() ve querySelectorAll()

`querySelector()`, verilen bir CSS seçicisi ile eşleşen ilk elementi seçer. `querySelectorAll()` ise, eşleşen tüm elementleri seçer.

```javascript
// Modern yöntem (CSS seçicileri)
var element = document.querySelector("#myElementId");
var elements = document.querySelectorAll(".myClassName");
```

## DOM Manipülasyonu

Web geliştiriciler, JavaScript kullanarak DOM üzerinde çeşitli manipülasyonlar gerçekleştirebilir. Bu işlemler arasında, sayfa içeriğinin dinamik olarak değiştirilmesi, yeni elementlerin eklenmesi, mevcut elementlerin kaldırılması ve stil (CSS) özelliklerinin güncellenmesi yer alır.

### Element İçeriğini Değiştirme

Bir elementin metin içeriğini değiştirmek için `innerHTML` veya `textContent` özelliklerini kullanabiliriz.

- `textContent`, sadece düz metin ekler.

- `innerHTML`, HTML etiketlerini de işler.

```javascript
const element = document.getElementById("myElementId");
element.textContent = "New content"; // Sadece metin
element.innerHTML = "<b>New</b> content"; // HTML destekli içerik
```

### Yeni Bir Element Oluşturma

Yeni bir HTML elementi oluşturmak için `document.createElement()` metodunu kullanabiliriz. Oluşturduğumuz elementi sayfaya eklemek için de `appendChild()` gibi yöntemlerle DOM’a dahil ederiz.

```javascript
let p = document.createElement("p");
p.textContent = "Merhaba dünya!";
document.body.appendChild(p); // <body>'nin sonuna paragraf ekler
```

### Elementleri Kaldırma

Var olan bir elementi kaldırmak için, önce o elementin ebeveyn (parent) elementini bulmamız ve ardından `removeChild()` yöntemini kullanmamız gerekir.

```javascript
var elementToRemove = document.getElementById("myElementId");
elementToRemove.parentNode.removeChild(elementToRemove);

// Modern yöntem
elementToRemove.remove();
```

### Elementlerin Stil ve Özelliklerini Değiştirme

Bir HTML elementinin CSS stilini doğrudan JavaScript ile değiştirebiliriz. `style` özelliği ile elementin görünümünü güncellemek mümkündür.

```javascript
var element = document.getElementById("myElementId");
element.style.color = "red"; // Metin rengini kırmızı yapar
```

### Özelliklerle Çalışmak (Attributes)

DOM manipülasyonunda, öğelerin HTML özellikleri (attributes) ile çalışabiliriz. HTML özellikleri, elementlerin davranışlarını ve görünümlerini belirler (örneğin, `id`, `class`, `style` gibi). JavaScript ile bu özelliklere erişebilir, değiştirebilir veya silebiliriz.

**Özellik Değeri Atamak: setAttribute()**

```javascript
const link = document.getElementById("myLink");
link.setAttribute("href", "https://www.example.com"); // Linkin href özelliğini https://www.example.com olarak değiştirir.
```

**Özellik Değeri Okumak: getAttribute()**

```javascript
const image = document.getElementById("myImage");
const srcValue = image.getAttribute("src");
console.log(srcValue); // Resmin "src" özelliğini yazdırır. Eğer resmin src özelliği yoksa, null döner.
```

**Özellik Silmek: removeAttribute()**

```javascript
const div = document.getElementById("myDiv");
div.removeAttribute("style"); // inline stil uygulamasını kaldırır.
```

### Sınıf Ekleme (classList)

`classList` bir DOMTokenList döner, yani elementin `class` attribute’unda tanımlı olan tüm sınıfların bir listesini (dizi gibi) sunar ve bu liste üzerinden kolayca işlem yapabilirsiniz.

```html
<div id="kutu" class="kirmizi aktif"></div>
```

```javascript
const kutu = document.getElementById("kutu");

console.log(kutu.classList); // DOMTokenList(2) ['kirmizi', 'aktif']

// Sınıf ekleme
kutu.classList.add("buyuk"); // 'buyuk' sınıfını ekler

// Sınıf kaldırma
kutu.classList.remove("aktif"); // 'aktif' sınıfını siler

// Sınıf varsa çıkarır, yoksa ekler
kutu.classList.toggle("gizli"); // 'gizli' varsa siler, yoksa ekler

// Sınıf var mı diye kontrol eder
console.log(kutu.classList.contains("kirmizi")); // true

// Sınıf değiştirme
kutu.classList.replace("kirmizi", "mavi"); // 'kirmizi' yerine 'mavi'
```

### after() ve before()

Seçilen elemanın öncesine ve sonrasına öğe eklemek için kullanılır.

```html
<div id="after-before">after-before</div>

<script>
  let div = document.getElementById("after-before");

  let h1 = document.createElement("h1");
  h1.textContent = "header";

  let p = document.createElement("p");
  p.textContent = "paragraph";

  div.before(h1);
  div.after(p);
</script>
```

### append() ve prepend()

Seçilen elemanın başına ve sonuna öğe eklemek için kullanılır. `after()` ve `before()` metotlarından farklı olarak bu iki metot ile seçilen öğenin içinde öncesine ve sonrasına öğeler eklenir.

```html
<div id="append-prepend" style="border: 10x solid red">append-prepend</div>

<script>
  let div = document.getElementById("append-prepend");

  let h1 = document.createElement("h1");
  h1.textContent = "header";

  let p = document.createElement("p");
  p.textContent = "paragraph";

  div.prepend(h1);
  div.append(p);
</script>
```

### closest()

Seçilen elemana en yakın belirtilen öğeyi döndürür.

```html
<ul>
  <li>liste</li>
  <li>liste</li>
  <li>
    liste
    <ul>
      <li>liste</li>
      <li>liste</li>
      <li>liste</li>
      <li>
        liste
        <ul>
          <li>liste</li>
          <li>liste</li>
          <li>liste</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>liste</li>
  <li>liste</li>
</ul>

<script>
  const liElements = document.querySelectorAll("li");

  for (const li of liElements) {
    li.addEventListener("click", (e) => {
      // e.stopPropagation()
      console.log(li.closest("ul"));
    });
  }
</script>
```

### preventDefault

Bazı etiketlerin varsayılan davranışları vardır. Örneğin bir `a` etiketine basınca ilgili linke yönlendirilirsiniz, ya da form içinde tipi submit olan bir `button` a basınca formu gönderir vs. Bu gibi varsayılan davranışları engellemek için `preventDefault` kullanabilirsiniz.

```html
<a href="about.html">Hakkımda</a>
<a href="https://sametcalisir.com">sametcalisir.com</a>

<script>
  const aTags = document.querySelectorAll("a");
  aTags.forEach((a) => {
    a.addEventListener("click", (e) => {
      // Eğer link dış bir bağlantı içeriyorsa varsayılan davranışı engelle
      if (e.target.getAttribute("href").includes("http")) {
        if (!confirm("Güvenli olmayan bir siteye gitmeye çalışıyorsunuz?")) {
          e.preventDefault();
        }
      }
    });
  });
</script>
```

Yukarıdaki örneklerde, DOM manipülasyonunu gösteren farklı örnekler yer almaktadır. Bu teknikler sayesinde, web sayfanızdaki içeriği dinamik olarak değiştirebilir ve kullanıcı etkileşimlerine tepki verebilirsiniz.

## DOM Tree Manipülasyonu

DOM Tree (DOM Ağacı), HTML veya XML belgelerinin içeriğini temsil eden bir ağaç yapısıdır. Bu yapı, her öğe, metin veya yorum gibi içerik öğelerini "node" (düğüm) olarak temsil eder. Bu düğümler arasındaki ilişkiler parent-child (ebeveyn-çocuk) ve sibling (kardeş) ilişkileriyle tanımlanır.

Node hiyerarşisi, DOM'un temel yapı taşlarıdır. JavaScript, bu yapıları kullanarak sayfa içeriğini değiştirebilir ve etkileşimli hale getirebilir.

### parentNode

Bir öğenin ebeveyn düğümünü almak için kullanılır. Ebeveyn, o öğeyi içeren üst düğümdür.

```html
<div>
  <p id="myElement">Paragraf 1</p>
  <p>Paragraf 2</p>
  <p>Paragraf 3</p>
</div>
```

```javascript
const element = document.getElementById("myElement");
const parent = element.parentNode;
console.log(parent); // Ebeveyn öğe (div)
```

Bu örnekte, `myElement` öğesinin ebeveyn öğesini alıyoruz. `parentNode`, doğrudan üst öğeyi döndürür.

### childNodes

Bir öğenin tüm çocuk düğümlerini döndüren bir özellik. Bu, öğedeki tüm elementler, metin düğümleri ve yorumları içerir.

```html
<div id="parentElement">
  <p>Paragraf 1</p>
  <p>Paragraf 2</p>
  <p>Paragraf 3</p>
</div>
```

```javascript
const parent = document.getElementById("parentElement");
const children = parent.childNodes;
console.log(children); // NodeList(7) [text, p, text, p, text, p, text]
```

Bu örnekte, `parentElement` öğesinin tüm çocuk düğümlerini alıyoruz. `childNodes`, sadece öğe düğümlerini değil, metin ve yorum düğümlerini de içerebilir.

**Not:** Çocuk düğümleri sadece element değil, aynı zamanda metin ve yorum gibi düğümleri de içerir. Çoğu zaman sadece element düğümleriyle çalışmak için `children` kullanılır.

### firstChild ve lastChild

`firstChild` ve `lastChild`, bir DOM elementinin ilk ve son çocuk düğümlerine erişim sağlayan özelliklerdir. Bu özellikler, bir öğenin `childNodes` koleksiyonundaki (çocuk düğümleri) ilk ve son öğeyi döndürür.

```html
<div id="parent">
  <p>Paragraf 1</p>
  <p>Paragraf 2</p>
  <p>Paragraf 3</p>
</div>
```

```javascript
const parent = document.getElementById("parent");

const firstChild = parent.firstChild;
const lastChild = parent.lastChild;

console.log(firstChild); // #text
console.log(lastChild); // #text
```

### nextSibling ve previousSibling

**nextSibling:** Mevcut öğenin sonraki kardeş öğesini döndürür. Yani, aynı ebeveyn altında, bu öğenin hemen ardından gelen öğeyi alır.

**previousSibling:** Mevcut öğenin önceki kardeş öğesini döndürür. Yani, aynı ebeveyn altında, bu öğenin hemen önceki öğesini alır.

```html
<div id="myElement">
  <p>Paragraf 1</p>
  <p>Paragraf 2</p>
  <p>Paragraf 3</p>
</div>
```

```javascript
const element = document.getElementById("myElement");
const next = element.nextSibling;
const prev = element.previousSibling;

console.log(next); // #text
console.log(prev); // #text

const nextEl = element.nextElementSibling;
const prevEl = element.previousElementSibling;

console.log(nextEl); // <script> elementi
console.log(prevEl); // null (önce başka bir element olmadığı için)
```

**Not:** `nextSibling` ve `previousSibling` özellikleri sadece doğrudan kardeşleri döndürür. Eğer metin düğümleri gibi boşluklar varsa, bu yöntemler beklenmedik sonuçlar verebilir. Daha doğru sonuçlar için `nextElementSibling` ve `previousElementSibling` kullanılabilir, çünkü bunlar yalnızca element düğümleriyle çalışır.

| Özellik                | Döndürdüğü Düğüm Türü                                      |
| ---------------------- | ---------------------------------------------------------- |
| nextSibling            | Her tür DOM düğümü (metin, yorum, element)                 |
| previousSibling        | Her tür DOM düğümü (metin, yorum, element)                 |
| nextElementSibling     | Sadece HTML element düğümleri (&lt;div&gt;, &lt;p&gt; vs.) |
| previousElementSibling | Sadece HTML element düğümleri (&lt;div&gt;, &lt;p&gt; vs.) |

## DOM Olayları (Events)

Web sayfalarında etkileşimler, kullanıcıların sayfa ile etkileşime geçebilmesi için olaylar (events) kullanılarak gerçekleştirilir. Olaylar, bir kullanıcının fareye tıklaması, bir tuşa basması, bir formu göndermesi gibi etkileşimleri temsil eder. JavaScript kullanarak, bu olayları dinleyebiliriz ve kullanıcı etkileşimlerine tepki verebiliriz.

### Olay Dinleyicileri (Event Listeners)

Belirli bir olayı dinlemek için `addEventListener()` fonksiyonunu kullanabiliriz. Örneğin, bir buton tıklama olayını dinlemek için:

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Butona tıkladınız!");
});
```

**Yaygın DOM Event’leri:**

- **click:** Bir öğeye tıklanması için.

- **submit:** Bir formun gönderilmesi için.

- **change:** Bir form öğesinin (örneğin bir input alanı veya select listesi) değerinin değişmesi için.

- **mouseover / mouseout:** Bir öğe üzerine gelinmesi ve öğeden uzaklaşılması için.

- **keydown / keyup:** Bir tuşa basılması ve tuş serbest bırakıldığında çalışması için.

### Olay Nesnesi (Event Object)

Olay dinleyicileri, bir olay gerçekleştiğinde bu olaya dair bilgileri içeren bir olay nesnesi (event object) alır. Bu nesne, olayın türü, hedefi (target) ve tuş bilgileri gibi bilgileri içerir.

Olay dinleyicileri sayesinde, web sayfanızın kullanıcı etkileşimlerine duyarlı olmasını sağlayabilir ve kullanıcı deneyimini geliştirebilirsiniz.

## Güvenlik ve DOM

DOM manipülasyonu yapılırken güvenlik, göz önünde bulundurulması gereken önemli bir faktördür. Kötü niyetli kullanıcılar, web sayfalarını kendi amaçları doğrultusunda manipüle etmeye çalışabilirler. Bu nedenle, güvenliği sağlamak için bazı önlemler almak oldukça önemlidir.

### XSS (Cross-Site Scripting) Saldırıları:

XSS saldırıları, kötü niyetli kullanıcıların sayfa içerisine JavaScript kodu enjekte etmesi ile meydana gelir. Bu durumda, kullanıcı verilerinin güvenli bir şekilde işlenmesi ve dışarıdan gelen verilerin güvenli bir şekilde gösterilmesi oldukça önemlidir.

- Kullanıcıdan gelen verileri asla doğrudan `innerHTML` ile DOM’a yerleştirme. Bunun yerine `textContent` veya `innerText` kullan.

- Formlardan alınan verileri sunucu tarafında doğrula.

- Güvenli veri çıktısı için HTML escape işlemleri uygula.

### Güvenli Yollarla Veri Ekleme

Kullanıcı girdilerini DOM'a eklerken, `textContent` veya `createElement` gibi güvenli yöntemler kullanılmalıdır. Kullanıcı verilerini içeren içeriği doğrudan `innerHTML` ile DOM’a eklemekten kaçınılmalıdır.

**Güvenli Kullanım:**

```javascript
const userInput = "<script>alert('XSS');</script>";
const p = document.createElement("p");
p.textContent = userInput; // <script> etiketi çalışmaz, sadece yazı olarak görünür
document.body.appendChild(p);
```

**Güvensiz Kullanım:**

```javascript
const userInput = "<script>alert('XSS');</script>";
document.body.innerHTML += `<p>${userInput}</p>`; // Zararlı script çalıştırılabilir!
```

### CSP (Content Security Policy) Kullanımı

CSP (İçerik Güvenlik Politikası), bir sayfanın kaynaklarının nerelerden yüklenebileceğini kontrol etmek için kullanılır.
CSP, XSS saldırılarını ve veri sızıntılarını önlemeye yardımcı olabilir. CSP politikaları, sayfanın `<head>` etiketinde bir `<meta>` etiketi ile veya HTTP yanıt başlıkları aracılığıyla tanımlanabilir.

**Örnek CSP Başlık Kullanımı (HTTP header):**

```
Content-Security-Policy: default-src 'self'; script-src 'self';
```

Bu örnekte sadece aynı kaynakta (origin) barındırılan script'lerin çalışmasına izin verilir. Dış kaynaklardan gelen potansiyel tehlikeli kodların çalışması engellenmiş olur.

### Güvenli Yöntemlerle Olay Dinleyicileri

Kullanıcı etkileşimlerini dinlerken, `onclick` veya `onmouseover` gibi HTML öznitelikleri yerine `addEventListener` kullanılmalıdır.
Bu yöntem, DOM üzerindeki etkileşimleri daha güvenli ve daha kontrol edilebilir bir şekilde yönetmeye yardımcı olur.

**Güvenli Kullanım:**

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Butona tıklandı!");
});
```

**Güvensiz Kullanım:**

```html
<button onclick="alert('Tıklandı')">Tıkla</button>
```

### Performans ve DOM

- `querySelectorAll` veya `getElementById` gibi seçim işlemleri pahalı olabilir, özellikle büyük DOM’larda.

- Reflow ve repaint olayları DOM değişiminde yavaşlamaya yol açabilir.
