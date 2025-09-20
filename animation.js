let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let reset=document.querySelector("#reset");
let hour= document.querySelector("#hour");
let minute= document.querySelector("#minute");
let seconds= document.querySelector("#seconds");

let time=[0,0,0];
let timerid=0;
start.addEventListener("click",function(){
    if(timerid!=0)
    {
        return;
    }
    start.classList.add("disable");
    timerid=setInterval(()=>{
        time[2]++;
        if(time[2]==60)
        {
            time[1]++;
            time[2]=0;
        }
        if(time[1]==60)
        {
            time[0]++;
            time[1]=0;
        }
        console.log(time);
        display_time();
    },1000);
});

stop.addEventListener("click",function()
{
    stop.classList.add("disable");
    clearInterval(timerid);
})

reset.addEventListener("click",function()
{
    start.classList.remove("disable");
    stop.classList.remove("disable");
  clearInterval(timerid);
time=[0,0,0];
timerid=0;

display_time();
})
function display_time()
{
hour.innerText=time[0].toString().padStart(2,"0").padEnd(4," :");
minute.innerText=time[1].toString().padStart(2,"0").padEnd(4," :");
seconds.innerText=time[2].toString().padStart(2,"0");
}





let canvas1=document.querySelector('canvas');
function make ()
{let c=canvas.getContext('2d');
c.strokeStyle="#de0a0aff";
let i=2,j=2;
let height=150;
let width=300;
let x=Math.random()*width,y=Math.random()*height;
function repeat()
{ 
  requestAnimationFrame(repeat);
c.clearRect(0,0,width,height);
c.beginPath()*width;

c.arc(x,y,5,Math.PI*2,0);
c.stroke(); 
if(x+5>width||x-5<0)
{    i=-i;
}

if(y+5>height||y-5<0)
{
    j=-j;
}
y+=j;
x+=i;
}
}
repeat();
