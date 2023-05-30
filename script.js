let Music=document.getElementById('music');
let Progressed=document.getElementById('ahead');
let myProgressbar=document.getElementById('bar');
Music.ontimeupdate=function(e){
    progress=parseInt((Music.currentTime/Music.duration)*100);
    Progressed.style.width=progress +"%";
    console.log('playing', progress);
}
myProgressbar.onclick=function(e){
    Music.currentTime=((e.offsetX/myProgressbar.offsetWidth)* Music.duration);
}