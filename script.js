function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    
    let time = (h + ' : ' + m + ' : ' + s);
    const clock = document.querySelector('.clock');
    clock.innerHTML = time;
    setTimeout(showTime, 1000);
}


showTime()