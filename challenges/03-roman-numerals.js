class RomanNumeral {
  static LETTERS = ["IVX", "XLC", "CDM", "M"];

  static _convertDigit(digit, pos) {
    switch (digit) {
      case 0:
        return "";
      case 4:
        return RomanNumeral.LETTERS[pos][0] + RomanNumeral.LETTERS[pos][1];
      case 9:
        return RomanNumeral.LETTERS[pos][0] + RomanNumeral.LETTERS[pos][2];
      default:
        let numeral = ""
        if (digit > 4) {
          numeral += RomanNumeral.LETTERS[pos][1];
        }
        for (let index = 0; index < digit % 5; index += 1) {
          numeral += RomanNumeral.LETTERS[pos][0];
        }
        return numeral; 
    }
  }

  constructor (decimal) {
    this.decimal = decimal;
  }

  toRoman() {
    return String(this.decimal).split("")
                               .reverse()
                               .map((element, index) => {
                                  return RomanNumeral._convertDigit(Number(element), index);
                                })
                               .reverse()
                               .join("");
  }
}

module.exports = RomanNumeral;