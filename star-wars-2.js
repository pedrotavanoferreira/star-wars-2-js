let _0 = 0
let _1 = 0
let _2 = 0
basic.forever(function () {
    _0 = pins.digitalReadPin(DigitalPin.P1)
    _1 = pins.digitalReadPin(DigitalPin.P8)
    _2 = pins.digitalReadPin(DigitalPin.P2)
    if (_0 && _1 && _2) {
        basic.pause(30)
        if (!(_2) && !(_1) && _0) {
            music.playTone(262, music.beat(BeatFraction.Half))
        }
        if (_2 && (!(_1) && !(_0))) {
            music.playTone(294, music.beat(BeatFraction.Half))
        }
        if (!(_2) && (!(_1) && _0)) {
            music.playTone(330, music.beat(BeatFraction.Half))
        }
    }
})