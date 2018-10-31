

window.onload = function(){
    
    let btnStart = document.getElementById('btnStart');
    let btnStop = document.getElementById('btnStop');
<<<<<<< HEAD
    let btnRelax = document.getElementById('btnRelax');
    let time = document.getElementById('time');
    btnStop.style.display = 'none';
    isRelaxRunning = false;
    isStartRunning = false;
    
    btnStart.addEventListener('click', function(){
        if(isRelaxRunning !== true){
            isStartRunning = true;
        var num = 5;
        var x = setInterval(function(){
            btnStart.style.display = 'none';
            btnStop.style.display = 'inline-block';
=======
    let time = document.getElementById('time');
    
    btnStart.addEventListener('click', function(){
        var num = 1499;
        var x = setInterval(function(){
>>>>>>> origin/master
            var minutes = Math.floor(num / 60);
            var seconds = num-60*minutes

            if(minutes < 10){
                minutes = '0' + minutes;
            }

            if(seconds < 10){
                seconds = '0' + seconds;
            }

<<<<<<< HEAD
            time.innerHTML = minutes + ':' + seconds;

            if(num !== 0){
                num -= 1;

            }else{
                isStartRunning = false;
                clearInterval(x);
                btnStop.style.display = 'none';
                btnStart.style.display = 'inline-block';
            }
        btnStop.addEventListener('click', function(){
            isStartRunning = false;
            clearInterval(x);
            btnStop.style.display = 'none';
            btnStart.style.display = 'inline-block';
            time.innerHTML = "00:00";

        })
        }, 1000);
        }
        
    })

    btnRelax.addEventListener('click', function(){
        if(isStartRunning !== true){
            isRelaxRunning = true;

            btnRelax.style.display = 'none';
            btnStop.style.display = 'inline-block';
            // Change color to green 
            var darkElements = document.getElementsByClassName('dark-color');
            for(var i = 0; i < darkElements.length; i++){
                darkElements[i].style.background = '#7dad41';
            }
            var lightElement = document.getElementById('bodyApp');
            lightElement.style.background = '#8DC34B';
            var shdw = document.getElementsByClassName('shdw');
            for(var item in shdw){
                if(typeof shdw[item].textContent == 'string'){
                    shdw[item].style.boxShadow = '0px 2px 7px #507028';
                }
            }
    
            var rest = 10;
            var y = setInterval(function(){
                var minutes = Math.floor(rest / 60);
                var seconds = rest-60*minutes
    
                if(minutes < 10){
                    minutes = '0' + minutes;
                }
    
                if(seconds < 10){
                    seconds = '0' + seconds;
                }
    
                time.innerHTML = minutes + ':' + seconds;
    
                if(rest !== 0){
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
                    btnStop.style.display = 'none';
                    clearInterval(y);
                }
            btnStop.addEventListener('click', function(){
                isRelaxRunning = false;
                clearInterval(y);
                btnRelax.style.display = 'inline-block';
                btnStop.style.display = 'none';
                time.innerHTML = "00:00";
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

=======

            time.innerHTML = minutes + ':' + seconds;

             num -= 1;
        btnStop.addEventListener('click', function(){
            clearInterval(x);
            time.innerHTML = "25:00";


        })


        }, 1000);


    })
>>>>>>> origin/master



};