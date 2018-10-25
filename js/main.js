

window.onload = function(){
    
    let btnStart = document.getElementById('btnStart');
    let btnStop = document.getElementById('btnStop');
    let time = document.getElementById('time');
    
    btnStart.addEventListener('click', function(){
        var num = 1500;
        var x = setInterval(function(){
            var minutes = Math.floor(num / 60);
            var seconds = num-60*minutes

            if(minutes < 10){
                minutes = '0' + minutes;
            }

            if(seconds < 10){
                seconds = '0' + seconds;
            }


            time.innerHTML = minutes + ':' + seconds;


             num -= 1;


        btnStop.addEventListener('click', function(){
            clearInterval(x);
            time.innerHTML = "25:00";


        })


        }, 1000);


    })



};