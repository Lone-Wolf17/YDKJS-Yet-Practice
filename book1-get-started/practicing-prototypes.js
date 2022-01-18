// Practicing Prototypes
// Finally, let's work on this and objects linked via prototype (Chapter 4, Pillar 2).

// Define a slot machine with three reels that can individually spin(), and then display() the current contents of all the reels.

// The basic behavior of a single reel is defined in the reel object below.
// But the slot machine needs individual reels—objects that delegate to reel, and which each have a position property.

// A reel only knows how to display() its current slot symbol, but a slot machine typically shows three symbols per reel:
//  the current slot (position), one slot above (position - 1), and one slot below (position + 1).
//So displaying the slot machine should end up displaying a 3 x 3 grid of slot symbols.

function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
  symbols: ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

var slotMachine = {
  reels: [
    // this slot machine needs 3 separate reels
    Object.create(reel),
    Object.create(reel),
    Object.create(reel),
  ],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    let printOut = `***************************************\n`;

    /// line one
    for (let [index, reel] of this.reels.entries()) {
      // get position -1
      let tempReel = Object.create(reel);
      // Modulus is used to ensure index doesn't go out of bounds
      tempReel.position =
        (tempReel.position - 1 + tempReel.symbols.length) %
        tempReel.symbols.length;

      printOut += `${tempReel.display()}`;
      if (index < this.reels.length - 1) {
        printOut += "\t|\t";
      }
    }

    printOut += "\n";

    /// Line two
    for (let [index, reel] of this.reels.entries()) {
      // this is the main position no need of special computations
      printOut += `${reel.display()}`;
      if (index < this.reels.length - 1) {
        printOut += "\t|\t";
      }
    }

    printOut += "\n";

    /// line two
    for (let [index, reel] of this.reels.entries()) {
      // get position + 1
      let tempReel = Object.create(reel);
      // Modulus is used to ensure index doesn't go out of bounds
      tempReel.position =
        (tempReel.position + 1 + tempReel.symbols.length) %
        tempReel.symbols.length;

      printOut += `${tempReel.display()}`;
      if (index < this.reels.length - 1) {
        printOut += "\t|\t";
      }
    }

    printOut += "\n***************************************\n\n\n";
    console.log(printOut);
  },
};

slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
slotMachine.display();
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
