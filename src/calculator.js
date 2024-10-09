class StringCalculator {
  add(numbers) {
    if (!numbers) {
      return 0;
    }
    let delimiter = ",";
    let numbersToProcess = numbers;

    if (numbers.startsWith("//")) {
      const firstNewLine = numbers.indexOf("\n");
      delimiter = numbers.substring(2, firstNewLine);
      numbersToProcess = numbers.substring(firstNewLine + 1);
    }

    const normalizedNumbers = numbersToProcess.replace(/\n/g, delimiter);
    const nums = normalizedNumbers.split(delimiter).map((num) => parseInt(num));

    const negativeNumbers = nums.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
