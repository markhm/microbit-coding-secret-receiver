radio.onReceivedString(function (receivedString) {
    match_channel = current_channel
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.showIcon(IconNames.Diamond)
    basic.pause(1000)
    while (true) {
        basic.showString("Ch")
        basic.showNumber(match_channel)
    }
})
let match_channel = 0
let current_channel = 0
current_channel = 0
match_channel = 0
basic.forever(function () {
    while (match_channel == 0) {
        for (let index = 0; index <= 24; index++) {
            if (index < 5) {
                led.plot(index, 0)
            } else if (index < 10) {
                led.plot(index - 5, 1)
            } else if (index < 15) {
                led.plot(index - 10, 2)
            } else if (index < 20) {
                led.plot(index - 15, 3)
            } else if (index < 25) {
                led.plot(index - 20, 4)
            }
            current_channel = index
            radio.setGroup(current_channel)
            basic.pause(200)
        }
        basic.clearScreen()
    }
})
