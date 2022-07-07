const submitButton = document.getElementById("checkButton");
console.log(submitButton);
const message = document.getElementById("message");
const lives =document.getElementById("attemptCount");
var live=10;
var inputValue;
let randonNumber=Math.round(Math.random()*100);
console.log(randonNumber);
submitButton.onclick=()=>{                    //fetch values using ()=>
    
    inputValue=document.getElementById("textBox").value;
    console.log(inputValue);
    live--;

if (inputValue == randonNumber){
    location.href="./win.html"
}
else if(live==0){
    location.href="./lose.html"
}
else if(inputValue > randonNumber){
      Text=`Your guess is  high. ${live} remaining`;
}
else if(inputValue < randonNumber){
    Text=`Your guess is  low. ${live} remaining`;
}
console.log(live);
console.log(Text);
message.style.display = "inherit";
message.innerHTML = Text;
lives.innerHTML = live;
}