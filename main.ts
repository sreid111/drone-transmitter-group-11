input.onButtonPressed(Button.A, function () {
    throttle += 0 - 5
})
input.onButtonPressed(Button.AB, function () {
    throttle = 0
    if (arm == 0) {
        arm = 1
    } else {
        arm = 0
    }
})
input.onButtonPressed(Button.B, function () {
    throttle += 5
})
input.onGesture(Gesture.Shake, function () {
    arm = 0
})
let roll2 = 0
let pitch2 = 0
let arm = 0
let throttle = 0
let roll = 0
let pitch = 0
let radio_group = 11
radio.setGroup(radio_group)
basic.showNumber(radio_group)
basic.forever(function () {
    let yaw = 0
    // basic.show_number(arm)
    pitch2 = input.rotation(Rotation.Pitch)
    roll2 = input.rotation(Rotation.Roll)
    basic.clearScreen()
    if (arm == 1) {
        led.plot(0, 0)
    }
    led.plot(0, Math.map(throttle, 0, 100, 4, 0))
    led.plot(Math.map(roll2, -45, 45, 0, 4), Math.map(pitch2, -45, 45, 0, 4))
    radio.sendValue("P", pitch2)
    radio.sendValue("A", arm)
    radio.sendValue("R", roll2)
    radio.sendValue("T", throttle)
    radio.sendValue("Y", yaw)
})
