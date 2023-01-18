module.exports = function toReadable (number) {
  const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const numbers20 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const numbers100 = ['', '','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = '';
  let stringNumber = String(number);
  //0
  if (number === 0) return 'zero';
  //1 ... 19
  else if (number > 0 && number < 20) {
    return digits[stringNumber]
  }
  //20 ... 99
  else if (number >= 20 && number < 100) {
    result = `${numbers100[stringNumber[0]]} ${digits[stringNumber[1]]}`;
    return result.trim()
  }
  //100 200 300 400 500 600 700 800 900
  else if (stringNumber >= 100 && stringNumber[1] == 0 && stringNumber[2] == 0){
    result = `${digits[stringNumber[0]]} hundred`;
    return result.trim();
  }
  //101 ... 109
  //201 ... 209
  // ...
  else if (stringNumber >= 100 && stringNumber[1] == 0) {
    result = `${digits[stringNumber[0]]} hundred ${digits[stringNumber[2]]}`;
    return result.trim();
  }
  //111 ... 119
  //211 ... 219
  // ...
  else if (stringNumber >= 100 && stringNumber[1] == 1 && stringNumber[1] != 0) {
    result = `${digits[stringNumber[0]]} hundred ${numbers20[stringNumber[2]]}`;
    return result.trim();
  }
  //121 122 ... 199
  //221 222 ... 299
  // ...
  else   {
    result = `${digits[stringNumber[0]]} hundred ${numbers100[stringNumber[1]]} ${digits[stringNumber[2]]}`;
    return result.trim();
  }
}
