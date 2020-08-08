/*const min = 3;
const max = 50;
let total = 0;
for (let i = min; i <= max; i += 1) {
  if (i % 2 === 0) {
    console.log('Четное ', i);
    total += i;
  }
}
console.log('Тотал', total);*/

/*const minSalary = 50;
const maxSalary = 5000;
const emploeers = 7;
let total = 0;
for (let i = 1; i <= 7; i += 1) {
  let salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
  console.log(`Зарплата работника ${i} составляет ${salary}`);
  total += salary;
  console.log('Тотал', total);
}*/

/*let balance = 15000;
const payment = 500;
console.log(`Общая сумма покупки составляет ${payment} кредитов`);
if (payment <= balance) {
  balance -= payment;
  console.log('ок');
  console.log(`На счету осталось ${balance} кредитов`);
} else {
  console.log('У вас недостаточно средств!');
}*/
const totalSpent = 1000;
let payment = 200;
let discount = 0;
if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('Бронзовый партнер, скидка 2 %');
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log('Сребрянный партнер, скидка 5 %');
  discount = 0.05;
} else if (totalSpent >= 5000 && totalSpent < 10000) {
  console.log('Золотой партнер, скидка 10 %');
  discount = 0.1;
} else {
  console.log('Не партнер');
}
console.log(
  `Оформляем заказ на сумму ${totalSpent}, скидка составляет ${
    discount * 100
  } %`,
);
