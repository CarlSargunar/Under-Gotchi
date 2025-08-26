// Create a player sprite
const PlayerKind = SpriteKind.create();

scene.setBackgroundColor(9); // Set background color
showControls();
startGame();


function showControls() {
    // showLongText automatically pauses until A is pressed
    game.showLongText("Move Froggit around", DialogLayout.Center);
}

// This is the main game function. Once it's started, while the game is running, this function will be running.
function startGame() {
    // Create the player sprite using the "Froggit" asset
    const mySprite = sprites.create(assets.image`FroggitSprite`, PlayerKind);
    animation.runImageAnimation(mySprite, assets.animation`Froggit`, 100, true);
    controller.moveSprite(mySprite);
}