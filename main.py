def on_received_string(receivedString):
    global match_channel
    match_channel = current_channel
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
    basic.pause(100)
    basic.show_icon(IconNames.SMALL_DIAMOND)
    basic.pause(100)
    basic.show_icon(IconNames.DIAMOND)
    basic.pause(1000)
    while True:
        basic.show_string("Ch")
        basic.show_number(match_channel)
radio.on_received_string(on_received_string)

match_channel = 0
current_channel = 0
current_channel = 0
match_channel = 0

def on_forever():
    global current_channel
    while match_channel == 0:
        for index in range(25):
            if index < 5:
                led.plot(index, 0)
            elif index < 10:
                led.plot(index - 5, 1)
            elif index < 15:
                led.plot(index - 10, 2)
            elif index < 20:
                led.plot(index - 15, 3)
            elif index < 25:
                led.plot(index - 20, 4)
            current_channel = index
            radio.set_group(current_channel)
            basic.pause(200)
        basic.clear_screen()
basic.forever(on_forever)
