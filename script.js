function startExperience(){
document.getElementById("opening").style.display="none";
document.getElementById("mainContent").style.display="block";
document.getElementById("bgMusic").play().catch(()=>{});
typeLetter();
}

const letter="Charu, I built this because my love for you is beyond words. You are my forever ❤️";
let letterIndex=0;

function typeLetter(){
if(letterIndex<letter.length){
document.getElementById("letterText").innerHTML+=letter.charAt(letterIndex);
letterIndex++;
setTimeout(typeLetter,40);
}
}

const vows=[
"I promise to love you every day.",
"I promise to stand beside you always.",
"I promise to choose you forever.",
"You are my forever Charu."
];

let vowIndex=0;
function nextVow(){
document.getElementById("vowText").innerText=vows[vowIndex];
vowIndex=(vowIndex+1)%vows.length;
}

function sayYes(){
document.getElementById("yesPopup").style.display="flex";
explodeHearts();
}

function explodeHearts(){
for(let i=0;i<40;i++){
let heart=document.createElement("div");
heart.innerHTML="❤️";
heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top=Math.random()*100+"vh";
heart.style.animation="fade 2s forwards";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),2000);
}
}

const style=document.createElement("style");
style.innerHTML="@keyframes fade{to{opacity:0;transform:scale(2)}}";
document.head.appendChild(style);

const defaultReplies=[
"You are my peace ❤️",
"I built this only for you.",
"I love you endlessly."
];

function sendMessage(){
let input=document.getElementById("userInput");
let chat=document.getElementById("chatBox");
let msg=input.value.toLowerCase();
if(!input.value.trim())return;

chat.innerHTML+=`<div class="charu">Charu: ${input.value}</div>`;
input.value="";

setTimeout(()=>{
chat.innerHTML+=`<div class="wagish">Wagish: ${generateReply(msg)}</div>`;
chat.scrollTop=chat.scrollHeight;
},1000);
}

function generateReply(msg){
if(msg.includes("love")) return "I love you more ❤️";
if(msg.includes("miss")) return "I miss you too 🥺";
if(msg.includes("forever")) return "Forever with you 💍";
return defaultReplies[Math.floor(Math.random()*defaultReplies.length)];
}

let score=0;
let gameInterval;

function startGame(){
score=0;
document.getElementById("score").innerText=score;

gameInterval=setInterval(createFallingHeart,800);

setTimeout(()=>{
clearInterval(gameInterval);
alert("You caught "+score+" hearts ❤️");
},15000);
}

function createFallingHeart(){
const gameArea=document.getElementById("gameArea");
const heart=document.createElement("div");
heart.innerHTML="❤️";
heart.classList.add("heart");

heart.style.left=Math.random()*90+"%";
gameArea.appendChild(heart);

let fall=setInterval(()=>{
heart.style.top=(heart.offsetTop+5)+"px";
let basket=document.getElementById("basket");

if(heart.offsetTop>260 &&
heart.offsetLeft>basket.offsetLeft-30 &&
heart.offsetLeft<basket.offsetLeft+30){
score++;
document.getElementById("score").innerText=score;
heart.remove();
clearInterval(fall);
}

if(heart.offsetTop>300){
heart.remove();
clearInterval(fall);
}

},30);
}

document.addEventListener("mousemove",function(e){
const basket=document.getElementById("basket");
const gameArea=document.getElementById("gameArea");
let rect=gameArea.getBoundingClientRect();
basket.style.left=(e.clientX-rect.left)+"px";
});

function quizAnswer(answer){
let result=document.getElementById("quizResult");
if(answer==="everything"){
result.innerText="Correct ❤️ Because everything about you is perfect.";
}else{
result.innerText="Wrong 😌 The correct answer is EVERYTHING.";
}
}

const memories=[
"Our first smile together meant everything.",
"The way you look at me melts my heart.",
"You made my life brighter from day one.",
"I want to grow old with you."
];

function revealMemory(){
let random=memories[Math.floor(Math.random()*memories.length)];
document.getElementById("memoryText").innerText=random;
}

function hiddenSurprise(){
alert("Charu ❤️ You are the best thing that ever happened to Wagish.");
}