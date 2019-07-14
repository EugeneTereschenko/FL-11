function reverseNumber(num) {
  let revNum = 0;
  while (num) {
    revNum = revNum * 10 + num % 10;
    num = num - num % 10;
    num /= 10;

  }
  return revNum;
}

reverseNumber(123);
reverseNumber(1000);
reverseNumber(-456);