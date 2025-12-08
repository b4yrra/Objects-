///// Object-Map-Filter-Reduce /////

// 1.

// People array-аас 18 ба түүнээс дээш настай хүмүүсийн нэрийг шүүж гарга.
const people = [
  { name: "John", age: 17 },
  { name: "Jane", age: 20 },
  { name: "Jack", age: 18 },
];

filteredAge = people.filter((ages) => {
  if (ages.age >= 18) {
    return true;
  } else {
    return false;
  }
});

mapPeople = filteredAge.map((names) => {
  return names.name;
});

console.log("1.", mapPeople);

// 2.

// Зөвхөн эерэг тоонуудаар массив үүсгэ.
const nums = [-5, 3, -1, 7, 0];

filteredNums = nums.filter((num) => {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
});

console.log("2.", filteredNums);

// 3.

// 3 аас дээш тооны урттай элементүүдээр массив үүсгэ.
const words = ["hi", "hello", "yo", "world"];

filteredWords = words.filter((word) => {
  if (word.length > 3) {
    return true;
  } else {
    return false;
  }
});

console.log("3.", filteredWords);

// 4.

// Доорх array аас сондгой тоонуудыг 2 дахин ихэсгэсэн массив үүсгэ.
const numbers = [1, 2, 3, 4, 5];

filteredNumbers = numbers.filter((number) => {
  if (number % 2 === 1) {
    return true;
  } else {
    return false;
  }
});

mapNumbers = filteredNumbers.map((number) => {
  return number * 2;
});

console.log("4.", mapNumbers);

// 5.

// Pass хийсэн сурагдын firstname ийг нь upperCase болгосон array үүсгэ
const students = [
  { firstName: "John", lastName: "Doe", passed: true },
  { firstName: "Jane", lastName: "Smith", passed: false },
  { firstName: "Alice", lastName: "Jones", passed: true },
];

filteredStudens = students.filter((student) => {
  if (student.passed === true) {
    return true;
  } else {
    return false;
  }
});

mapStudents = filteredStudens.map((student) => {
  firstNames = student.firstName.toUpperCase();
  lastNames = student.lastName.toUpperCase();
  mergeNames = `${firstNames} ${lastNames}`;
  return mergeNames;
});

console.log("5.", mapStudents);

// 6.

// хамгийн өндөр оноотой 3 дүнгээр нь массив үүсгэ.
const students1 = [
  { name: "A", score: 88 },
  { name: "B", score: 95 },
  { name: "C", score: 72 },
  { name: "D", score: 99 },
  { name: "E", score: 91 },
];

let top3number = [
  { name: "", score: 0 },
  { name: "", score: 0 },
  { name: "", score: 0 },
];

for (let i = 0; i < students1.length; i++) {
  const studentss = students1[i];

  if (top3number[0].score < studentss.score) {
    top3number[2] = top3number[1];
    top3number[1] = top3number[0];
    top3number[0] = studentss;
  } else if (top3number[1].score < studentss.score) {
    top3number[2] = top3number[1];
    top3number[1] = studentss;
  } else if (top3number[2].score < studentss.score) {
    top3number[2] = studentss;
  }
}

mapTop3 = top3number.map((s) => s.name);
console.log("6.", mapTop3);

// 7.

// cart дахь бүх бараануудын үнийн дүнгийн нийлбэрийг ол
const carts = [
  { name: "Book", price: 10, quantity: 2 },
  { name: "Pen", price: 2, quantity: 5 },
  { name: "Notebook", price: 5, quantity: 3 },
];

mapCarts = carts.map((cart) => {
  return cart.price * cart.quantity;
});

reduceCarts = mapCarts.reduce((a, b) => {
  return a + b;
});

console.log("7.", reduceCarts);

// 8.

// Өгөгдсөн string төрлийн массив дотроос хамгийн урт үгийг ол.
const greetings = ["hello", "world", "typescript", "js"];

reduceGreetings = greetings.reduce((a, b) => {
  return b.length > a.length ? b : a;
});

console.log("8.", reduceGreetings);

// 9.

// Доорх массивын бүх элементүүдийн үсгийн нийлбэрийг ол

const greetingWords = ["hi", "hello", "hey"];

mapGreetin = greetingWords.map((words) => {
  return words.length;
});

reduceGreetinWord = mapGreetin.reduce((a, b) => {
  return a + b;
});

console.log("9.", reduceGreetinWord);

// 10.

// Хамгийн үнэтэй бүтээгдэхүүнийг харуул

const products = [
  { name: "Laptop", price: 900 },
  { name: "Phone", price: 700 },
  { name: "Monitor", price: 300 },
];

let highestPrice = { name: "", price: 0 };

for (i = 0; i < products.length; i++) {
  const eachProduct = products[i];

  if (highestPrice.price < eachProduct.price) {
    highestPrice = eachProduct;
  }
}

console.log("10.", highestPrice);

// 11.

// бүх бүтээгдэхүүний нийлбэр үнийн дүнг ол
const items = [
  { name: "Chair", price: 80 },
  { name: "Desk", price: 120 },
  { name: "Lamp", price: 150 },
];

mapItems = items.map((item) => {
  return item.price;
});

reduceItems = mapItems.reduce((a, b) => {
  return a + b;
});

console.log("11.", reduceItems);
