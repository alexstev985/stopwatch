var interval
var hours = 0
var mins = 0
var secs = 0
var tenths = 0
var start = false

window.addEventListener('load', loadStopwatch)

function loadStopwatch () {
    document.getElementById('hours').innerHTML = '0' + hours
    document.getElementById('mins').innerHTML = '0' + mins
    document.getElementById('secs').innerHTML = '0' + secs
    document.getElementById('tenths').innerHTML = '0' +  tenths
}

function startTime(){
    document.getElementById('tenths').innerHTML = '0' + tenths++

    if (tenths <= 9) {
        document.getElementById('tenths').innerHTML = '0' + tenths
    }

    if (tenths > 9) {
        document.getElementById('tenths').innerHTML = tenths
    }
    
    if (tenths > 99) {
        tenths = 0
        secs++
        document.getElementById('secs').innerHTML = secs
    }

    if (secs <= 9) {
        document.getElementById('secs').innerHTML = '0' + secs
    }
    if (secs > 9) {
        document.getElementById('secs').innerHTML = secs
    }
    if (secs > 59) {
        secs = 0
        mins++
        console.log(mins)
        document.getElementById('mins').innerHTML = mins
    }

    if (mins <= 9) {
        document.getElementById('mins').innerHTML = '0' + mins
    }
    if (mins > 9) {
        document.getElementById('mins').innerHTML =  mins
    }
    if (mins > 59) {
        mins = 0
        hours++
        document.getElementById('hours').innerHTML = hours
    }
    
    if (hours <= 9) {
        document.getElementById('hours').innerHTML = '0' + hours
    }
    if (hours > 9) {
        document.getElementById('hours').innerHTML =  hours
    }
}

var btnStart = document.getElementById('btn-start')
btnStart.innerHTML = 'START'
btnStart.addEventListener('click', function(){
    if (!start) {
        start = true
        interval = setInterval(startTime, 10)
        btnStart.innerHTML = 'PAUSE'
    }
    else {
            start = false
            clearInterval(interval)
            btnStart.innerHTML = 'START'
    }

    var btnReset = document.getElementById('btn-reset')
    if (btnReset == null) {
        var divButtons = document.getElementById('buttons')
        var btnReset = document.createElement('button')
        btnReset.classList.add('btn-danger')
        btnReset.innerHTML = 'RESET'
        btnReset.id = 'btn-reset'
        divButtons.appendChild(btnReset)
    }

    btnReset.addEventListener('click', function(){
        clearInterval(interval)
        hours = 0
        mins = 0
        secs = 0
        tenths = 0
        start = false
        document.getElementById('hours').innerHTML = '0' + hours
        document.getElementById('mins').innerHTML = '0' + mins
        document.getElementById('secs').innerHTML = '0' + secs
        document.getElementById('tenths').innerHTML = '0' +  tenths
        btnStart.innerHTML = 'START'
        this.remove()
    })
})

var mode = document.getElementById('customSwitch1')
mode.addEventListener('click', function () {
    var wrapper = document.getElementById('wrapper')
    wrapper.classList.toggle('dark')
})

