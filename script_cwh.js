let li_arr =[ "All We Know", "Cheap Thrills", "Closer","Delicate" ,"I Like Me Better", "Interstellar" ,"Kesariya", "Kun Faya Kun" ,"One Direction" ,"Perfect" ,"Treat You Better" ,"We Dont Talk" ,"Who Says" ,"Wildest Dreams" ]
let card_arr =[ "All We Know", "Cheap Thrills", "Closer", "Delicate" ,"I Like Me Better", "Interstellar" ,"Kesariya", "Kun Faya Kun" ,"One Direction" ,"Perfect" ,"Treat You Better" ,"We Dont Talk" ,"Who Says" ,"Wildest Dreams" ]


// Initialize the Variables
let index =0;
let songIndex = 0;
let audioelement = new Audio('./songs/3.mp3');
let masterPlay = document.getElementById('play');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songli = Array.from(document.querySelector(".song-list").getElementsByTagName("ul")[0])

// audioelement.play();
// console.log(songli);



// this code is from chat gpt 
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


let songli = Array.from(document.querySelector(".song-list").getElementsByTagName("ul")[0].children)


let songs = [
    {songName: "All We Know", filePath: "./songs/1.mp3", coverPath: "./image/1.jpeg"},
    {songName: "Cheap Thrills", filePath: "./songs/2.mp3", coverPath: "./image/2.jpeg"},
    {songName: "Closer", filePath: "./songs/3.mp3", coverPath: "./image/3.jpeg"},
    {songName: "Delicate", filePath: "./songs/4.mp3", coverPath: "./image/4.jpeg"},
    {songName: "I Like Me Better", filePath: "./songs/5.mp3", coverPath: "./image/5.jpeg"},
    {songName: "Interstellar", filePath: "./songs/6.mp3", coverPath: "./image/6.jpeg"},
    {songName: "Kesariya", filePath: "./songs/7.mp3", coverPath: "./image/7.jpeg"},
    {songName: "Kun Faya Kun", filePath: "./songs/8.mp3", coverPath: "./image/8.jpeg"},
    {songName: "One Direction", filePath: "./songs/9.mp3", coverPath: "./image/9.jpeg"},
    {songName: "Perfect", filePath: "./songs/10.mp3", coverPath: "./image/10.jpeg"},
    {songName: "Treat You Better", filePath: "./songs/11.mp3", coverPath: "./image/11.jpeg"},
    {songName: "We Dont Talk", filePath: "./songs/12.mp3", coverPath: "./image/12.jpeg"},
    {songName: "Who Says", filePath: "./songs/13.mp3", coverPath: "./image/13.jpeg"},
    {songName: "Wildest Dreams", filePath: "./songs/14.mp3", coverPath: "./image/14.jpeg"},
]


audioelement.addEventListener("timeupdate" , ()=>{
    // console.log(audioelement.currentTime , audioelement.duration);
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(audioelement.currentTime)}/${secondsToMinutesSeconds(audioelement.duration)}`
    document.querySelector(".circle").style.left = (audioelement.currentTime/audioelement.duration)*100+"%";
    
})
document.querySelector(".seekbar").addEventListener("click", e => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    audioelement.currentTime = ((audioelement.duration) * percent) / 100
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




let ul_li =  Array.from(document.getElementById("ul_li").children).forEach(e=>{
    e.addEventListener("click", element =>{
        index = li_arr.indexOf(e.querySelector(".info").firstElementChild.innerHTML)
        audioelement.src = `./songs/${index+1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        play.src="./svg/pause.svg" 
        document.querySelector(".songinfo").innerHTML = li_arr[index];


      
    })
 })

 Array.from(document.querySelector(".card-container").getElementsByClassName("card")).forEach((element) => {
    element.addEventListener("click" , ()=>{
        // console.log(element.querySelector("h2").innerHTML)
        index = card_arr.indexOf(element.querySelector("h2").innerHTML)
        // console.log(index);
        audioelement.src = `./songs/${index+1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        play.src="./svg/pause.svg" 
        document.querySelector(".songinfo").innerHTML = li_arr[index];
        


    })
});







masterPlay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        play.src="./svg/pause.svg" 
        document.querySelector(".songinfo").innerHTML = li_arr[index]

    }
    else{
        audioelement.pause();
        play.src="./svg/playsong.svg"
    }
})

document.getElementById('next').addEventListener('click', ()=>{
    if(index>=13){
        songIndex = 0
        index =0;

    }
    else{
        songIndex += 1;
        index +=1;
    }
    audioelement.src = `./songs/${index+1}.mp3`;
    console.log(index);
    play.src="./svg/pause.svg" 
    document.querySelector(".songinfo").innerHTML = li_arr[index]
    audioelement.currentTime = 0;
    audioelement.play();
    // masterPlay.classList.remove('fa-play-circle');
    // masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(index<=0){
        songIndex = 0
        index=0;
        // play.src="./svg/pause.svg" 

    }
    else{
        songIndex -= 1;
        index -=1;
    }
    audioelement.src = `songs/${index+1}.mp3`;
    document.querySelector(".songinfo").innerHTML = li_arr[index]
    play.src="./svg/pause.svg" 
    audioelement.currentTime = 0;
    audioelement.play();
  
})