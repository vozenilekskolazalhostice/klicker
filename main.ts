input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Skull)
    Počet += -1
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.House)
    Počet = 0
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    Počet += 1
    basic.showIcon(IconNames.StickFigure)
})
let Počet = 0
Počet = 0
music.setVolume(58)
basic.forever(function () {
    basic.showNumber(Počet)
})
