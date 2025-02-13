function 左轉 () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    0,
    0
    )
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorC,
    40,
    0
    )
}
function 右轉 () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    40,
    1
    )
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorC,
    0,
    0
    )
}
function 前進 () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    30,
    1
    )
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorC,
    30,
    0
    )
}
function 停止 () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    0,
    0
    )
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorC,
    0,
    0
    )
}
let STOP = 0
basic.forever(function () {
    if (STOP >= 2) {
        停止()
        basic.showIcon(IconNames.Yes)
    } else if (STOP < 1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            前進()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            左轉()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            右轉()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            前進()
            basic.pause(1000)
            STOP += 1
        }
    }
})
