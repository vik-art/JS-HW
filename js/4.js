const names = ['Mango', 'Kiwi', 'Sasha', 'jelly'];
const loginToFind = 'Kiwi';
let message;
for (let i = 0; i < names.length; i += 1) {
  const login = names[i];
  if (login === loginToFind) {
    message = 'Мы нашли нужного человека';
    break;
  } else {
    message = 'Логин не найден';
  }
}
console.log(message);
