class Game {
  constructor() {}

  getState() {
    //function getState acquires the information from the firebase datbase about the current gamestate of the the game
    var gameStateRef = database.ref("gameState");
   //changes and updates are stored in the gamestate variable using the on keyword
    gameStateRef.on("value", function(data) {
      //copying the values from the database and storing it in the variable
      gameState = data.val();
    });
  }

  update(state) {
    //updating in the firebase database the current gamestate of a particular player
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    //new player is created
    player = new Player();
    //the information about the number of player who have entered the game is acquired and stored in the playerCount variable
    playerCount = player.getCount();

//new form is created
    form = new Form();
    //form is daiplayed
    form.display();

    //car 1 sprite is created
    car1 = createSprite(width / 2 - 50, height - 100);
    //the car1 sprite is assigned a position 
    car1.addImage("car1", car1_img);
    //the size of the car1 is scaled
    car1.scale = 0.07;

    //car 2 sprite is created
    car2 = createSprite(width / 2 + 100, height - 100);
    //the car2 sprite is assigned a position 
    car2.addImage("car2", car2_img);
    //the size of the car2 is scaled
    car2.scale = 0.07;

    //both the car sprites are stored in the cars array
    cars = [car1, car2];
  }

  handleElements() {
    //the form is hidden
    form.hide();
    //the posiition of the title is changed
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    //handle element function is called
    this.handleElements();
    
    //the information of the player is acquired and the function getplayersInfo is called
    Player.getPlayersInfo();

    //if condition states that if some players are present in the game the images will be displayed
    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      //the car sprites created are displayed
      drawSprites();
    }
  }
}
