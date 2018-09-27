module.exports = function getZerosCount(number) {
	
  let zero_count = 0;

  while (Math.floor( number ) > 0) {
    number = number / 5;
    zero_count = zero_count + Math.floor(number);
  }

  return zero_count;

}
