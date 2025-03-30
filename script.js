let allboxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnX=true;
const winPossibilities=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],];
const resetGame=()=>{
turnO=true;
enableBoxes();
msgContainer.classList.add("hide");
};

let turnO=true;
allboxes.forEach((box)=> {
    box.addEventListener("click",function (){
console.log("box was clicked");

if(turnO){
    box.innerText="O";
   
} else{
        box.innerText="X";
       
    }
    turnO = !turnO;
    box.disabled=true;
   
    checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of allboxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of allboxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    
msg.innerText=`Congratulations, Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
};
const checkWinner=()=>{
    for(pattern of winPossibilities){
       let pos1val=allboxes[pattern[0]].innerText;
       let pos2val=allboxes[pattern[1]].innerText;
       let pos3val=allboxes[pattern[2]].innerText;
       if (pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val){
            console.log("winner",pos1val);
           
            showWinner(pos1val);
        }
       }
    }

};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

