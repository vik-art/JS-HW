const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
function isLoginValid(login, min = 4, max = 16) {
  if (login.length >= min && login.length <= max) {
    return true;
  } else {
    return false;
  }
}
console.log(isLoginValid('Sanya'));

function isLoginUnique(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }
  return true;
}

console.log(isLoginUnique(logins, 'Sanya'));

function addLogin(allLogins, login) {
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message = '';
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    allLogins = allLogins.push(login);
    message = SUCCESS;
  } else if (isLoginUnique(allLogins, login)) {
    message = ERROR;
  } else if (isLoginValid(login)) {
    message = REFUSAL;
  }
  return message;
}

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
