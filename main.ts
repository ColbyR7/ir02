maqueen.IR_callbackUser(function (message) {
    if (message == 66) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    }
    if (message == 25) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 150)
    }
    if (message == 90) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
    }
    if (message == 82) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (message == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
