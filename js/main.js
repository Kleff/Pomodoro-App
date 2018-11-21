window.onload = function () {

    let btnStart = document.getElementById('btnStart');
    let btnPauseStart = document.getElementById('btnPauseStart');
    let btnPauseRelax = document.getElementById('btnPauseRelax');
    let btnRelax = document.getElementById('btnRelax');
    let btnStop = document.getElementById('btnStop');
    let time = document.getElementById('time');
    let message = document.getElementById('message');
    btnPauseStart.style.display = 'none';
    btnPauseRelax.style.display = 'none';
    let isRelaxRunning = false;
    let isStartRunning = false;

    let isPaused = false;

    let timeWork = 5;
    let num = timeWork;
    let timeRelax = 10;
    let rest = timeRelax;

    // Start Button
    btnStart.addEventListener('click', function () {
        if (isRelaxRunning !== true) {
            isStartRunning = true;
            message.textContent = "Working..."
            if (!isPaused) {
                num = timeWork;
            }
            isPaused = false;
            var x = setInterval(function () {
                if (!isPaused) {
                    // Show button Pause
                    btnPauseStart.style.display = 'inline-block';
                    // Hide button Start 
                    btnStart.style.display = 'none';
                    var minutes = Math.floor(num / 60);
                    var seconds = num - 60 * minutes

                    if (minutes < 10) {
                        minutes = '0' + minutes;
                    }

                    if (seconds < 10) {
                        seconds = '0' + seconds;
                    }

                    time.innerHTML = minutes + ':' + seconds;

                    if (num !== 0) {
                        num -= 1;

                    } else {
                        message.textContent = "Let's start!";
                        isStartRunning = false;
                        clearInterval(x);
                        btnPauseStart.style.display = 'none';
                        btnStart.style.display = 'inline-block';
                    }
                }
                // Button Pause
                btnPauseStart.addEventListener('click', function () {
                    clearInterval(x);
                    isPaused = true;
                    btnPauseStart.style.display = 'none';
                    btnStart.style.display = 'inline-block';
                    message.innerHTML = 'paused!';
                })
            }, 1000);
        }

        btnStop.addEventListener('click', function () {
            num = timeWork;
            message.textContent = "Let's Start!"
            btnPauseStart.style.display = 'none';
            btnStart.style.display = 'inline-block';
            isStartRunning = false;
            clearInterval(x);
            time.innerHTML = "00:00";
        })
    })

    btnRelax.addEventListener('click', function () {
        if (isStartRunning !== true) {
            isRelaxRunning = true;
            message.textContent = "Relax Time!"
            btnRelax.style.display = 'none';
            btnPauseRelax.style.display = 'inline-block';
            // Change color to green 
            var darkElements = document.getElementsByClassName('dark-color');
            for (var i = 0; i < darkElements.length; i++) {
                darkElements[i].style.background = '#7dad41';
            }
            var lightElement = document.getElementById('bodyApp');
            lightElement.style.background = '#8DC34B';
            var shdw = document.getElementsByClassName('shdw');
            for (var item in shdw) {
                if (typeof shdw[item].textContent == 'string') {
                    shdw[item].style.boxShadow = '0px 2px 7px #507028';
                }
            }
            // -End

            if (!isPaused) {
                rest = timeRelax;
            }
            isPaused = false;
            var y = setInterval(function () {
                var minutes = Math.floor(rest / 60);
                var seconds = rest - 60 * minutes

                if (minutes < 10) {
                    minutes = '0' + minutes;
                }

                if (seconds < 10) {
                    seconds = '0' + seconds;
                }

                time.innerHTML = minutes + ':' + seconds;

                if (rest !== 0) {
                    rest -= 1;
                } else {
                    isRelaxRunning = false;
                    // Back background color to red 
                    for (var i = 0; i < darkElements.length; i++) {
                        darkElements[i].style.background = '#ff2b2b';
                    }
                    var lightElement = document.getElementById('bodyApp');
                    lightElement.style.background = '#FF4444';
                    var shdw = document.getElementsByClassName('shdw');
                    for (var item in shdw) {
                        if (typeof shdw[item].textContent == 'string') {
                            shdw[item].style.boxShadow = '0px 2px 7px #991616';
                        }
                    }

                    btnRelax.style.display = 'inline-block';
                    btnPauseRelax.style.display = 'none';
                    clearInterval(y);
                }

                btnPauseRelax.addEventListener('click', function () {
                    clearInterval(y);
                    isPaused = true;
                    message.textContent = "paused!"
                    btnPauseRelax.style.display = 'none';
                    btnRelax.style.display = 'inline-block';
                })

                btnStop.addEventListener('click', function () {
                    message.textContent = "Let's Start!"
                    rest = timeRelax;
                    isRelaxRunning = false;
                    clearInterval(y);
                    time.innerHTML = "00:00";
                    btnRelax.style.display = 'inline-block';
                    btnPauseRelax.style.display = 'none';
                    // Back background color to red 
                    for (var i = 0; i < darkElements.length; i++) {
                        darkElements[i].style.background = '#ff2b2b';
                    }
                    var lightElement = document.getElementById('bodyApp');
                    lightElement.style.background = '#FF4444';
                    var shdw = document.getElementsByClassName('shdw');
                    for (var item in shdw) {
                        if (typeof shdw[item].textContent == 'string') {
                            shdw[item].style.boxShadow = '0px 2px 7px #991616';
                        }
                    }

                })
            }, 1000);
        }

    })




};