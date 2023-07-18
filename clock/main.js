let screen=document.querySelector('.clock');
let c=0

function timer(){
    const date =new Date()
    let h= date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
    let session='AM'
    if(h==0){
        h=12;
    }
    if(h>11){
        session='PM'
    }
    if(h>12){
        h=h-12;
    }

    m=(m<10)?`0${m}`:m;
    s=(s<10)?`0${s}`:s
    screen.innerText=`${h}:${m}:${s} ${session}`;
}
setInterval(timer,1000);
