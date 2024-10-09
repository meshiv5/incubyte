class StringCalculator {
  add(numbers) {
    if (!numbers) {
      return 0;
    }
    const normalizedNumbers = numbers.replace(/\n/g, ",");
    const nums = normalizedNumbers.split(",").map((num) => parseInt(num));
    return nums.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
