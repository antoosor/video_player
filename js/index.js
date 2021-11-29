const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", handlePlay);
function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    console.log("le diste click al boton de play");
}

$pause.addEventListener("click", handlePause);
function handlePause() {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
    console.log("le diste click al boton de pause");
}

$backward.addEventListener("click",handleBackward)
function handleBackward(){
    $video.currentTime = $video.currentTime - 10
console.log("retrasando 10 segundos",$video.currentTime)
}
$forward.addEventListener("click",handleForward)
function handleForward(){
    $video.currentTime = $video.currentTime + 10
console.log("Adelantando 10 segundos",$video.currentTime)
}

const $progress = document.querySelector("#progress")
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
    $progress.mex = $video.duration
    console.log("ha cargado mi video", $video.duration)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
/*console.log("tiempo actual",$video.currentTime)*/
}
$progress.addEventListener("input",handleInput)

function handleInput(){
    console.log($progress.value)
    $video.currentTime = $progress.value

}
