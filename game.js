// WAllet Class
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

// Statistics Class

class Statistics {
    constructor() {
        this.gameResults = [{win: true, bid: 2}, {win:false, bid: -10}];
    }

    addGameToStatistics(win, bid){
        let gameResult ={
            win,
            bid
        }
        console.log(gameResult);
        this.gameResults.push(gameResult)
    }

    showGameStatistics(){
        let games = this.gameResultslength
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        console.log(wins, losses);
        return[games, wins, losses]
    }

}

const stats = new Statistics();

// Draw class

class Draw {
  constructor() {
    this.options = ['red', 'green', 'blue'];
    let _result = this.drawResult();
    this.getDrawResult = () => _result;
  }

  drawResult() {
    let colors = [];
    for (let i =0; i < this.options.length; i++) {
      const index = Math.floor(Math.random() * this.options.length)
      const color = this.options[index]
      console.log(color);
      colors.push(color);
    }
    return colors;
  }
}

//const draw = new Draw()


// Result Class

class Result {
  static moneyWinInGame(result, bid){
    if(result) return 3 * bid;
    else return 0;
    
  }
}

Result.moneyWinInGame(true, 10)

