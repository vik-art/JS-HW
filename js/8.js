function checkForSpam(message) {
  const blackListWord1 = 'spam';
  const blackLiskWord2 = 'sale';
  message = message.toLowerCase();
  if (message.includes(blackListWord1) || message.includes(blackLiskWord2)) {
    return false;
  } else {
    return true;
  }
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
