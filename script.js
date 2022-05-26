console.log("welcome to TIC-TAC-TOE")
let change=new Audio("beep.mp3")
let winmusic=new Audio("winning.mp3")
let turn="x"
let isgameover=false;
const changeturn=()=>{
    return turn==="x"?"0":"x"
}
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText===boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" Won!!"
            isgameover=true
            document.querySelector('.imgd').getElementsByTagName('img')[0].style.height="200px";
            winmusic.play
        }
    })
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeturn();
            change.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="turn for "+turn;
            }
        }
    })
})
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
