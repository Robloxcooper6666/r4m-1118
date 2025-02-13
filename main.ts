function 左轉 () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    10,
    0
    )
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorC,
    50,
    0
    )
}
function 右轉 () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    50,
    1
    )
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorC,
    10,
    0
    )
}
function 前進 () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    100,
    1
    )
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorC,
    100,
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
    } else if (STOP < 2) {
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
