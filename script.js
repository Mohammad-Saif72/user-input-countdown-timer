let startBtn = document.querySelector("#startBtn");
let countdown = document.querySelector("#countdown");
let num =null;
let intervalid;
startBtn.addEventListener("click",function(e){
    if(intervalid){
        clearInterval(intervalid);
    }
 num = parseInt(document.querySelector("#inputNumber").value);
console.log(num);

 intervalid = setInterval(function(){

countdown.textContent = num;

if(num<=0){
countdown.textContent="Time Up"
clearInterval(intervalid);
}
num--;
},1000)
})