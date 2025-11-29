let date=document.querySelector("#date");
let time=document.querySelector("#time");

function update(){
    let now=new Date();
    let nowtime=now.toLocaleTimeString();
    let nowdate=now.toLocaleDateString();
    date.textContent=nowdate;
    time.textContent=nowtime;
}
setInterval(update,1000);
update();