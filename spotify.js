let audioElement= new Audio('music.mp3');
let x=document.getElementsByClassName("masterplay");
let myprogressbar= document.getElementById('progressbar');
 
// masterplay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//     }
// })

x.addEventListener('click',function(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})