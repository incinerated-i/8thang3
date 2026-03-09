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

/* CONFETTI */

function burstConfetti(times = 1){

for(let i=0;i<times;i++){

confetti({
particleCount:80,
spread:70,
origin:{y:0.6}
})

}

}

/* MUSIC BUTTON */

musicBtn.addEventListener("click", () => {

if(bgMusic.paused){

bgMusic.play().catch(()=>{})
musicBtn.textContent="⏸ Pause Music"

}else{

bgMusic.pause()
musicBtn.textContent="🎵 Play Music"

}

})

/* FLOWER CLICK */

flowerGif.addEventListener("click", () => {

burstConfetti()

if(!popupOpened){

popupOpened = true
popupWindow.classList.add("show")

lockedMessage.style.display="none"
surpriseBtn.disabled = true

startTyping()

}

})

/* CLOSE POPUP */

closeBtn.addEventListener("click", () => {

popupWindow.classList.remove("show")

voiceNote.pause()
voiceNote.currentTime = 0

})

/* TYPEWRITER */

function startTyping(){

const text="Có đôi lời gửi cho em."

typewriterEl.textContent=""

let i=0

const typing=setInterval(()=>{

typewriterEl.textContent += text[i]
i++

if(i>=text.length){

clearInterval(typing)

}

},40)

}

/* PLAY VOICE */

playButton.addEventListener("click", () => {

if(voiceNote.paused){

voiceNote.play().catch(()=>{})
playButton.textContent="Dừng 💖"

}else{

voiceNote.pause()
playButton.textContent="Phát 💖"

}

})

/* PROGRESS BAR */

voiceNote.addEventListener("timeupdate", () => {

if(!voiceNote.duration) return

const percent=(voiceNote.currentTime/voiceNote.duration)*100

voiceProgressBar.style.width = percent + "%"

voiceTime.textContent =
formatTime(voiceNote.currentTime) + " / " +
formatTime(voiceNote.duration)

})

/* UNLOCK MESSAGE */

voiceNote.addEventListener("ended", () => {

lockedMessage.style.display="block"
surpriseBtn.disabled = false

})

function formatTime(sec){

const m=Math.floor(sec/60)
const s=Math.floor(sec%60)

return m + ":" + (s<10?"0":"") + s

}

/* SLIDESHOW */

const photos=[
 "./assets/images/photoa.jpg",
 "./assets/images/photob.jpg",
 "./assets/images/photoc.jpg",
 "./assets/images/photod.jpg",
 "./assets/images/photoe.jpg",
 "./assets/images/photof.jpg",
 "./assets/images/photog.jpg",
 "./assets/images/photoh.jpg"
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

/* SURPRISE */

surpriseBtn.addEventListener("click", () => {

burstConfetti(2)

alert("Cảm ơn em vì thời gian qua.")

})

/* FINAL GIF */

finalGifLink.addEventListener("click", (e) => {

e.preventDefault()

burstConfetti(3)

alert("Anh mong em thích món quà này 🎁")

})

/* MAPS */

const maps = [

"https://www.google.com/maps/embed?pb=!4v1767774687928!6m8!1m7!1sqjIOYIB_OujEayuPBsUXzw!2m2!1d54.10768613335556!2d159.9851103911956!3f93.44184358199071!4f36.55819411358391!5f1.1065099421335651",

"https://www.google.com/maps/embed?pb=!4v1767776522007!6m8!1m7!1sCAoSLEFGMVFpcE02Z2dwSFk3UzlQUkVXMHhya3dNVTB2dE83UG1xNDNJUWhiTV94!2m2!1d43.7832745612107!2d144.3124974986362!3f173.61681100620956!4f-2.2664889671150803!5f0.7820865974627469",

"https://www.google.com/maps/embed?pb=!4v1767778389908!6m8!1m7!1sCAoSLEFGMVFpcE5NZUJkVDdIbXktR1ROTnlBa3kxSWZIeHh0THJiT3pGYUx5QWl4!2m2!1d50.70760689211924!2d4.289669853032678!3f16.35!4f3.45!5f0.7820865974627469",

"https://www.google.com/maps/embed?pb=!4v1767778484598!6m8!1m7!1sEfbVA6jzxMkAAAQ7LwOTxw!2m2!1d62.04464795882912!2d129.6241284429345!3f284.16908070457873!4f-24.663824262789092!5f0.7820865974627469",

"https://www.google.com/maps/embed?pb=!4v1767778569079!6m8!1m7!1sjSiHYOytVDMAAAQIt04LdA!2m2!1d49.98274918243075!2d20.05448614134913!3f133.19!4f8.99!5f0.4",

"https://www.google.com/maps/embed?pb=!4v1767778620699!6m8!1m7!1ss3FnKTrZWhG_xk_97KZr0A!2m2!1d69.20794114556811!2d-51.16312198207455!3f245.56!4f-13.5!5f0.4",

"https://www.google.com/maps/embed?pb=!4v1767778653552!6m8!1m7!1skJPO1zlKRtMAAAQZLDcQIQ!2m2!1d68.50904688685114!2d27.48180793176623!3f327.98!4f23.72!5f0.4",

"https://www.google.com/maps/embed?pb=!4v1767778888141!6m8!1m7!1sebD0tfckmx0M63FdVsQeCw!2m2!1d-36.84211890042714!2d174.764817313202!3f83.50!4f-9.39!5f0.4"

]

window.changeMap = function(index){

const iframe=document.getElementById("mapFrame")

if(maps[index]) iframe.src = maps[index]

}

})
