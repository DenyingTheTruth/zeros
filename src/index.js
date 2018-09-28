module.exports = function getZerosCount(number) {
  let result = 0;
  
  while (number > 0){
    number = number/5;
    result += Math.floor(number);
  }
  return result;
}
