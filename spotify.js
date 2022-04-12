let audioElement= new Audio('1.mp3');
let masterplay=document.getElementById("masterplay");
let myprogressbar= document.getElementById('progressbar');
 let gif=document.getElementById('gif');
 let songitem=Array.from(document.getElementsByClassName('songitem'))
 let span=document.getElementById('span');
 let songs=[
     {songname:"Sorry",filepath:"1.mp3",coverpath:"sorrypic.jpg"},
     {songname:"Watermelon Sugar",filepath:"2.mp3",coverpath:"harry.png"},
     {songname:"Peaches",filepath:"3.mp3",coverpath:"justice.jpg"},
     {songname:"WDYM",filepath:"4.mp3",coverpath:"wdympic.jpg"},
     {songname:"Ghost",filepath:"5.mp3",coverpath:"justice.jpg"},
     {songname:"Lonely",filepath:"6.mp3",coverpath:"lonelypic.jpg"},
 ]

masterplay.addEventListener('click',function(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        gif.style.opacity=0;
    }
})
songitem.forEach((e,i)=>{
    document.getElementsByClassName('songname')[i].innerText=songs[i].songname;
    document.getElementsByTagName("img")[0].src=songs[i].coverpath;
})

audioElement.addEventListener('timeupdate',()=>{
    // console .log('audioElement.duration');
     progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
     myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
Array.from(document.getElementsByClassName('subbutton')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index=parseInt(e.target.id);
        audioElement.src=`${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        span.innerText=songs[index-1].songname;
    })
})