document.addEventListener("DOMContentLoaded", () => {

const flowerGif = document.getElementById("flowerGif")
const popupWindow = document.getElementById("popupWindow")

const voiceNote = document.getElementById("voiceNote")
const playButton = document.getElementById("playButton")
const closeBtn = document.getElementById("closeBtn")
const surpriseBtn = document.getElementById("surpriseBtn")
const lockedMessage = document.getElementById("lockedMessage")

const voiceProgressBar = document.getElementById("voiceProgressBar")
const voiceTime = document.getElementById("voiceTime")

const bgMusic = document.getElementById("bgMusic")
const musicBtn = document.getElementById("music")

const typewriterEl = document.getElementById("typewriter")

const slide = document.getElementById("slide")

const finalGifLink = document.getElementById("finalGifLink")

let popupOpened = false

function burstConfetti(times=1){

for(let i=0;i<times;i++){

confetti({
particleCount:80,
spread:70,
origin:{y:0.6}
})

}

}

musicBtn.addEventListener("click",()=>{

if(bgMusic.paused){

bgMusic.play().catch(()=>{})
musicBtn.textContent="⏸ Pause Music"

}else{

bgMusic.pause()
musicBtn.textContent="🎵 Play Music"

}

})

flowerGif.addEventListener("click",()=>{

burstConfetti()

if(!popupOpened){

popupOpened=true

popupWindow.classList.add("show")

lockedMessage.style.display="none"

startTyping()

}

})

closeBtn.addEventListener("click",()=>{

popupWindow.classList.remove("show")

voiceNote.pause()
voiceNote.currentTime=0

})

function startTyping(){

const text="Có đôi lời gửi cho em."

typewriterEl.textContent=""

let i=0

const typing=setInterval(()=>{

typewriterEl.textContent+=text[i]

i++

if(i>=text.length){

clearInterval(typing)

}

},40)

}

playButton.addEventListener("click",()=>{

if(voiceNote.paused){

voiceNote.play()

playButton.textContent="Dừng 💖"

}else{

voiceNote.pause()

playButton.textContent="Phát 💖"

}

})

voiceNote.addEventListener("timeupdate",()=>{

if(!voiceNote.duration)return

const percent=(voiceNote.currentTime/voiceNote.duration)*100

voiceProgressBar.style.width=percent+"%"

voiceTime.textContent=formatTime(voiceNote.currentTime)+" / "+formatTime(voiceNote.duration)

})

voiceNote.addEventListener("ended",()=>{

lockedMessage.style.display="block"

surpriseBtn.disabled=false

})

function formatTime(sec){

const m=Math.floor(sec/60)
const s=Math.floor(sec%60)

return m+":"+(s<10?"0":"")+s

}

const photos=[
"assets/images/photoa.png",
"assets/images/photob.png",
"assets/images/photoc.png",
"assets/images/photod.png",
"assets/images/photoe.png",
"assets/images/photof.png",
"assets/images/photog.png",
"assets/images/photoh.png"
]

let slideIndex=0

setInterval(()=>{

slide.style.opacity=0

setTimeout(()=>{

slideIndex=(slideIndex+1)%photos.length
slide.src=photos[slideIndex]
slide.style.opacity=1

},500)

},3000)

surpriseBtn.addEventListener("click",()=>{

burstConfetti(2)

alert("Cảm ơn em vì thời gian qua.")

})

finalGifLink.addEventListener("click",(e)=>{

e.preventDefault()

burstConfetti(3)

alert("Anh mong em thích món quà này 🎁")

})

})
