input.onButtonPressed(Button.A, function () {
    A.move(-1)
    if (A.isTouching(B)) {
        game.addScore(1)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.B, function () {
    A.move(1)
    if (A.isTouching(B)) {
        game.addScore(1)
    }
})
let B: game.LedSprite = null
let A: game.LedSprite = null
A = game.createSprite(2, 2)
B = game.createSprite(4, 2)
B.set(LedSpriteProperty.Brightness, 50)
game.setScore(0)
game.startCountdown(10000)
