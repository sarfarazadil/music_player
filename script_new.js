let song_arr =[ "All We Know", "Cheap Thrills", "Closer","Delicate" , "I Like Me Better", "Interstellar" ,"Kesariya", "Kun Faya Kun" ,"One Direction" ,"Perfect" ,"Treat You Better" ,"We Dont Talk" ,"Who Says" ,"Wildest Dreams" ]
let image_arr =[ "All We Know", "Cheap Thrills", "Closer","Delicate" , "I Like Me Better", "Interstellar" ,"Kesariya", "Kun Faya Kun" ,"One Direction" ,"Perfect" ,"Treat You Better" ,"We Dont Talk" ,"Who Says" ,"Wildest Dreams" ]
let card_arr =[ "All We Know", "Cheap Thrills", "Closer", "Delicate" ,"I Like Me Better", "Interstellar" ,"Kesariya", "Kun Faya Kun" ,"One Direction" ,"Perfect" ,"Treat You Better" ,"We Dont Talk" ,"Who Says" ,"Wildest Dreams" ]
let li_arr =[ "All We Know", "Cheap Thrills", "Closer","Delicate" ,"I Like Me Better", "Interstellar" ,"Kesariya", "Kun Faya Kun" ,"One Direction" ,"Perfect" ,"Treat You Better" ,"We Dont Talk" ,"Who Says" ,"Wildest Dreams" ]
// let audio;
// let audio = new Audio(`./songs/${song_arr[5]}.mp3`);
// audio.play()
let isplay = false;
let index_song = new Audio;
let index_song1 =new Audio("./songs/All We Know.mp3");
let index_song2 =new Audio("./songs/Cheap Thrills.mp3");
let index_song3 =new Audio("./songs/Closer.mp3");
let index_song4 =new Audio("./songs/I Like Me Better.mp3");
let index_song5 =new Audio("./songs/Interstellar.mp3");
let index_song6 =new Audio("./songs/Kesariya.mp3");
let index_song7 =new Audio("./songs/Kun Faya Kun.mp3");
let index_song8 =new Audio("./songs/One Direction.mp3");
let index_song9 =new Audio("./songs/Perfect.mp3");
let index_song10 =new Audio("./songs/Treat You Better.mp3");
let index_song11 =new Audio("./songs/We Dont Talk.mp3");
let index_song12 =new Audio("./songs/Who Says.mp3");
let index_song13 =new Audio("./songs/Wildest Dreams.mp3");




const playmusic = (track)=>{
    index_song.src= `./songs/${song_arr[track]}.mp3`;
    index_song.play();



}




async function main(){
    let songli = document.querySelector(".song-list").getElementsByTagName("ul")[0]
    for (const song of li_arr) {
        songli.innerHTML = songli.innerHTML + ` <li>
        <img  class="invert " src="./svg/music.svg" alt="">
        <div class="info">
            <div id="li_name" >${song}</div>
            
        </div>
        <div class="playnow">
            <span>Play Now</span>
            <img class="invert" src="./svg/playsong.svg" alt="">
        </div>
        
    </li>` ;
    }
     let ul_li =  Array.from(document.getElementById("ul_li").children).forEach(e=>{
        e.addEventListener("click", element =>{
            let index = li_arr.indexOf(e.querySelector(".info").firstElementChild.innerHTML)
            //  console.log(index)
            let audio = new Audio(`./songs/${song_arr[index]}.mp3`);
            if(isplay== true){
                index_song.pause();
                index_song =audio;
                index_song.play()
                // audio.play();
                // playmusic(audio);
                isplay =true
                play.src = "./svg/pause.svg"
            }
            else{
                index_song = audio;
                audio.play();
                // playmusic(audio)
                isplay =true
                // console.log(index_song.currentTime)
                // console.log(audio.currentTime)
                play.src = "./svg/pause.svg"

            }
        })
     })

     let album = document.querySelector(".spotify-playlist").getElementsByTagName("div")[0]
     for (const song of card_arr) {
        // console.log(card_arr.indexOf("song"))
         album.innerHTML = album.innerHTML + 
          `<div   class="card ">
         <div class="play">
             <div class="play_logo"><img id="1"  class="icon_size  icon" src="./icon/play-button.png" alt=""></div>
         </div>
             <img src="./image/${song}.jpeg"  alt="closer">
             <h3>${song}</h3>
             
             </div>`;

     }
     


        Array.from(document.querySelector(".card-container").getElementsByClassName("card")).forEach((element) => {
            element.addEventListener("click" , ()=>{
                console.log(element.querySelector("h3").innerHTML)
                let index = card_arr.indexOf(element.querySelector("h3").innerHTML)
                let audio = new Audio(`./songs/${card_arr[index]}.mp3`);
                if(isplay== true){
                    index_song.pause();
                    index_song =audio;
                    index_song.play()
                    // audio.play();
                    // playmusic(audio);
                    isplay =true
                }
                else{
                    index_song = audio;
                    audio.play();
                    // playmusic(audio)
                    isplay =true
                    // console.log(index_song.currentTime)
                    // console.log(audio.currentTime)
    
                }


            })
        });


          
    

     play.addEventListener("click", ()=>{
        if(index_song.paused){
            index_song.play()
            play.src = "./svg/pause.svg"
        }
        else{
            index_song.pause()
            play.src = "./svg/playsong.svg"
        }
    })








    
    //     index_song.addEventListener("timeupdate" , ()=>{
    //     console.log(index_song.currentTime , index_song.duration);
    //     // document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentsong.currentTime)}/${secondsToMinutesSeconds(currentsong.duration)}`
    //     document.querySelector(".circle").style.left = (index_song.currentTime/index_song.duration)*100+"%";
        
    // })
   

 
 






             // Add an event listener for hamburger
     document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

     // Add an event listener for close button
     document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })



    index_song.addEventListener("timeupdate", ()=>{
        document.querySelector(".circle").style.left = (index_song.currentTime/index_song.duration)*100+"%"
        console.log((index_song.currentTime/index_song.duration)*100+"%");
    })





    // // +++++++++++++++++++++++++++++++++   card   +++++++++++++++++++++++++++++++++++++++++++++++
    // document.getElementById("c1").addEventListener("click", ()=>{
    //     index_song.pause(); index_song2.pause(); index_song3.pause(); index_song4.pause(); index_song5.pause(); index_song6.pause(); index_song7.pause();index_song8.pause(); index_song9.pause();index_song10,pause(); index_song11.pause(); index_song12.pause();index_song13.pause();
    //     index_song1.play();
    // })
    // document.getElementById("c2").addEventListener("click", ()=>{
    //     index_song.pause(); index_song1.pause(); index_song3.pause(); index_song4.pause(); index_song5.pause(); index_song6.pause(); index_song7.pause();index_song8.pause(); index_song9.pause();index_song10,pause(); index_song11.pause(); index_song12.pause();index_song13.pause();
    //     index_song2.play();
    // })
    // document.getElementById("c3").addEventListener("click", ()=>{
    //     index_song.pause(); index_song1.pause(); index_song2.pause(); index_song4.pause(); index_song5.pause(); index_song6.pause(); index_song7.pause();index_song8.pause(); index_song9.pause();index_song10,pause(); index_song11.pause(); index_song12.pause();index_song13.pause();
    //     index_song3.play();
    // })
    // document.getElementById("c4").addEventListener("click", ()=>{
    //     index_song.pause(); index_song1.pause(); index_song2.pause(); index_song3.pause(); index_song5.pause(); index_song6.pause(); index_song7.pause();index_song8.pause(); index_song9.pause();index_song10,pause(); index_song11.pause(); index_song12.pause();index_song13.pause();
    //     index_song4.play();
    // })

}



main()

