class BeerSong {
  static BOTTLES = [
    " bottles of beer on the wall, ",
    " bottles of beer.\nTake one down and pass it around, ",
    " bottles of beer on the wall.\n"
  ];

  static TWO_BOTTLES = "2 bottles of beer on the wall, 2 bottles of beer.\n" +
  "Take one down and pass it around, 1 bottle of beer on the wall.\n";

  static FINAL_BOTTLE = "1 bottle of beer on the wall, 1 bottle of beer.\n" +
  "Take it down and pass it around, no more bottles of beer on the wall.\n";

  static NO_BOTTLES = "No more bottles of beer on the wall, no more bottles of beer.\n" +
  "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

  static reciteVerse(verse) {
    switch (verse) {
      case 2:
        return BeerSong.TWO_BOTTLES;
      case 1:
        return BeerSong.FINAL_BOTTLE;
      case 0:
        return BeerSong.NO_BOTTLES;
      default:
        return verse + BeerSong.BOTTLES[0] + verse + BeerSong.BOTTLES[1] + (verse - 1) + BeerSong.BOTTLES[2]
    }
  }

  static verse(verse) {
    return BeerSong.reciteVerse(verse);
  }

  static verses(start, end) {
    let verseArray = [];
    for (let verse = start; verse >= end; verse -= 1) {
      verseArray.push(BeerSong.reciteVerse(verse));
    }
    return verseArray.join("\n");
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;