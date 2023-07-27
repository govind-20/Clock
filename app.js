let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function displayTime(){
    let time= new Date()

    let hh=time.getHours();
    let mm=time.getMinutes();
    let ss=time.getSeconds();

    let hrot=30*hh+mm/2; 
    let mrot=6*mm;
    let srot=6*ss;
    
    hr.style.transform=`rotate(${hrot}deg)`;
    min.style.transform=`rotate(${mrot}deg)`;
    sec.style.transform=`rotate(${srot}deg)`;
    

}
setInterval(displayTime,1000);


