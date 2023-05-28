radio.onReceivedString(function (receivedString) {
    let current_channel = 0
    match_channel = current_channel
    music.ringTone(262)
    basic.showIcon(IconNames.Diamond)
    basic.pause(1000)
    while (true) {
        basic.showString("Channel")
        basic.showNumber(match_channel)
    }
})
let match_channel = 0
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
