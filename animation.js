let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let reset=document.querySelector("#reset");
let hour= document.querySelector("#hour");
let minute= document.querySelector("#minute");
let seconds= document.querySelector("#seconds");
let height=150;
let width=300;
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
        make3();
        if(time[2]==60)
        {   
            time[1]++;
            time[2]=0;
            make2();
            c3.clearRect(0,0,width,height);
        }
        if(time[1]==60)
        { 
            time[0]++;
            time[1]=0;
            make();
            c2.clearRect(0,0,width,height);
        }
        display_time();
    },1000);
});

stop.addEventListener("click",function()
{
    stop.classList.add("disable");
    clearInterval(timerid);
})

reset.addEventListener("click",function()
{  c.clearRect(0,0,width,height);
    c2.clearRect(0,0,width,height);
    c3.clearRect(0,0,width,height);
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




let radius =5;

let canvas1=document.querySelector("#hours");
let c=canvas1.getContext('2d');
c.strokeStyle="#ffffffff";

let canvas2=document.querySelector("#minutes");
let c2=canvas2.getContext('2d');
c2.strokeStyle="#ffffffff";

let canvas3=document.querySelector("#second");
let c3=canvas3.getContext('2d');
c3.strokeStyle="#ffffffff";

color=["#de0a0aff","#3cff00ff","#0ad7debd","#9e0adeff","#d7de0aff","#0a46deff"
];
let i=0;
function make()
{ i=Math.floor(Math.random()*6);
c.beginPath();
let x=Math.random()*width,y=Math.random()*height;
c.arc(x,y,radius,Math.PI*2,0);
c.stroke();
c.fillStyle=color[i];
c.fill();
}

function make2()
{i=Math.floor(Math.random()*6);
c2.beginPath();
let x=Math.random()*width,y=Math.random()*height;

c2.arc(x,y,radius,Math.PI*2,0);
c2.stroke();
c2.fillStyle=color[i]
c2.fill();
}
function make3()
{i=Math.floor(Math.random()*6);
c3.beginPath();
let x=Math.random()*width,y=Math.random()*height;
c3.arc(x,y,radius,Math.PI*2,0);
c3.stroke();
c3.fillStyle=color[i];
c3.fill();
}