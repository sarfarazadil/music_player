let currentsong = new Audio();
let songs;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}


async function getsongs(){
let a = await fetch("http://127.0.0.1:5500/music_player/songs/");
let response = await a.text();
// console.log(response);
let div = document.createElement("div");
div.innerHTML = response;
let as= div.getElementsByTagName("a");
let songs =[];
for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if(element.href.endsWith(".mp3")){
        songs.push(((element.href.split("/songs/")[1]).replace(".mp3", "" )).replaceAll("%20", " "));
    }  
}
return songs;
// console.log(songs)
}


const playmusic = (track, pause= false )=>{
    // let audio = new Audio("http://127.0.0.1:5501/songs/" +track+ ".mp3");
    currentsong.src = "http://127.0.0.1:5500/music_player/songs/"+track+".mp3"
    if(!pause){
        currentsong.play();
        play.src = "./svg/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = track
    document.querySelector(".songtime").innerHTML = "00:00"



}






async function main(){
    songs = await getsongs();
    
    playmusic(songs[0], true)




    
    console.log(songs);
    let songul = document.querySelector(".song-list").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + ` <li>
        <img  class="invert " src="./svg/music.svg" alt="">
        <div class="info">
            <div>${song}</div>
            
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="./svg/playsong.svg" alt="">
        </div>
        
    </li>` ;
    }

     //apply event Listener to songlist leftside
     Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click" , element=>{
            // console.log("hello");
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playmusic(e.querySelector(".info").firstElementChild.innerHTML)
        })
    })





    let album = document.querySelector(".spotify-playlist").getElementsByTagName("div")[0]
    for (const song of songs) {
        album.innerHTML = album.innerHTML +  `<div class="card ">
        <div class="play">
            <div class="play_logo"><img id="1"  class="icon_size  icon" src="./icon/play-button.png" alt=""></div>
        </div>
            <img src="./image/${song}.jpeg"  alt="closer">
            <h3>${song}</h3>
            
            </div>`;
    }

    //apply event Listener to card
    Array.from(document.querySelector(".spotify-playlist").getElementsByTagName("div")).forEach(f=>{
        f.addEventListener("click" , element=>{
            // console.log("hello");
            console.log(f.querySelector("h3").innerHTML);
            // f. stopPropagation() 
            playmusic(f.querySelector("h3").innerHTML);
            // f.querySelector(".play_logo").firstElementChild.src = "./icon/pause.png"
            console.log(f.querySelector(".play_logo").firstElementChild.src);

        } ,true)
    })


   




    // attached event listener to seekbar button
    play.addEventListener("click", ()=>{
        if(currentsong.paused){
            currentsong.play()
            play.src = "./svg/pause.svg"
        }
        else{
            currentsong.pause()
            play.src = "./svg/playsong.svg"
        }
    })




       // eventlistener for timeupdate
    currentsong.addEventListener("timeupdate" , ()=>{
        // console.log(currentsong.currentTime , currentsong.duration);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)}/${secondsToMinutesSeconds(currentsong.duration)}`
        document.querySelector(".circle").style.left = (currentsong.currentTime/currentsong.duration)*100 + "%";
        // document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";

    })





     // changing time of song play in seekbaar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = ((currentsong.duration) * percent) / 100
        // console.log(e.offsetX , e.target.getBoundingClientRect().width)
        // console.log(percent);
    })

     // Add an event listener for hamburger
     document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

     // Add an event listener for close button
     document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })




       // add an event listener to previous
    previous.addEventListener("click", () => {
        // currentsong.pause()
        console.log("Previous clicked")
        // let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        let index = songs.indexOf(currentsong.src.split("songs/")[1].replace(".mp3" , "").replaceAll("%20" , " "))
        // console.log(index);
        // console.log(currentsong.src.split("songs/")[1].replace(".mp3" , "").replaceAll("%20" , " "));
        if ((index - 1) >= 0) {
            playmusic(songs[index - 1])
        }
    })





      // Add an event listener to next 
      next.addEventListener("click", () => {
        // currentsong.pause()
        console.log("Next clicked")

        let index = songs.indexOf(currentsong.src.split("songs/")[1].replace(".mp3" , "").replaceAll("%20" , " "))
        if ((index + 1) < songs.length) {
            playmusic(songs[index + 1])
        }
    })


}
main()




