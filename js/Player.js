class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY
    });
  }

  
  getCount() {
    //the functions gets the information from the database about the nuner of players that have entered the game 
    var playerCountRef = database.ref("playerCount");
    //the different updates and changes in the database are acquired using the on keyword which is like a 'listener'
    playerCountRef.on("value", data => {
      //the values from the database are copied and stored in the playerCount variable
      playerCount = data.val();
    });
  }

  updateCount(count) {
    //the function updates to the database the number of player present in the game throught the database reference
    database.ref("/").update({
      //the count is to be updated
      playerCount: count
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }
}
