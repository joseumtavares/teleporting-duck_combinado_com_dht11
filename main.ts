input.onButtonPressed(Button.A, function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
    basic.showString("Humidity" + dht11_dht22.readData(dataType.humidity) + "%")
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("DUCK")
})
input.onButtonPressed(Button.B, function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
    basic.showString("Temp" + dht11_dht22.readData(dataType.temperature) + "ºC")
})
radio.onReceivedStringDeprecated(function (receivedString) {
    basic.showIcon(IconNames.Duck)
})
radio.setGroup(23)
