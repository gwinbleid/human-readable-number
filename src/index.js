module.exports = function toReadable (number) {
    if (number === 0) return 'zero';

    let digitCount = 0;
    let ones = [
        '', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    let tens = [
        'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (number < 20) return ones[number];
    if (number < 100) {
        if (number % 10 === 0) {
            return tens[Math.floor(number/10)-2];
        }
        digitCount = number % 10;

        return tens[Math.floor(number/10)-2] + " " + (digitCount > 0 ? ones[digitCount] : "");
    }
    if (number < 1000) {
        if (number % 100 === 0) {
            return ones[Math.floor(number/100)] + " hundred"
        }
        return ones[Math.floor(number/100)] + " hundred " + (number % 100 > 0 ? toReadable(number % 100) : "");
    }
}
