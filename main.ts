radio.onReceivedString(function (receivedString) {
    music.ringTone(262)
    basic.showIcon(IconNames.Diamond)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    while (true) {
        for (let current_channel = 0; current_channel <= 40; current_channel++) {
            radio.setGroup(current_channel)
            basic.pause(500)
        }
    }
})
