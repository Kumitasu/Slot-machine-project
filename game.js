// Klasa WAllet
class Wallet {
  constructor(money) {
    let _money = money;
    //pobieranie aktualnej zawartości portfela
    this.getWalletValue = () => _money;

    //Sprawdzanie czy użytkonik ma odpowiednią ilość środków

    this.checkCanPlay = (value) => {
      if (_money >= value) return true;
      return false;
    };

    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return (_money += value);
        } else if (type === "-") {
          return (_money -= value);
        } else {
          throw new Error("bad operation");
        }
      } else {
        console.log(typeof value);
        throw new Error("bad sign");
      }
    };
  }
}

//const wallet = new Wallet(200)

// Klasa Statistics

class Statistics {
    constructor() {
        this.gameResults = [{win: true, bid: 2}, {win:false, bid: -10}];
    }

    addGameToStatistics(win, bid){
        let gameResult ={
            win: win,
            bid: bid
        }
        console.log(gameResult);
        this.gameResults.push(gameResult)
    }

}

const stats = new Statistics();
