const audioElement = document.getElementById("myAudio");


// Handle play/pause click
const innerPlay = document.getElementById("inner-play");
const gif = document.getElementById("gif");
function PlayPauseControl() {
    if (!myAudio.paused) {
        audioElement.pause();
        innerPlay.classList.remove("fa-pause");
        innerPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    } else {
        audioElement.play();
        innerPlay.classList.remove("fa-play");
        innerPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
}


//Forward & Previous
let songIndex = 0;
const displaySongName = document.getElementById('display-song-name')
const displayArtistName = document.getElementById('display-artist-name')

document.getElementById('forward').addEventListener('click', () => {
    if (songIndex >= 19) {
        songIndex = 0
    } else {
        songIndex += 1
    }
    // changing songname
    songNameInList = songs[songIndex]['songName'];
    displaySongName.innerHTML = songNameInList;
    // changing artistname
    artistInSongList = songs[songIndex]['artist'];
    displayArtistName.innerHTML = artistInSongList;
    // changing song
    pathSongInList = songs[songIndex]['filePath'];
    audioElement.src = pathSongInList;
    audioElement.load();
    PlayPauseControl();

})
document.getElementById('backward').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 19
    } else {
        songIndex -= 1
    }

    songNameInList = songs[songIndex]['songName']
    displaySongName.innerHTML = songNameInList

    artistInSongList = songs[songIndex]['artist']
    displayArtistName.innerHTML = artistInSongList

    // changing song
    pathSongInList = songs[songIndex]['filePath'];
    audioElement.src = pathSongInList;
    audioElement.load();
    PlayPauseControl();

})


