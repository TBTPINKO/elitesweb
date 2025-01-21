document.addEventListener("DOMContentLoaded", () => {
    const songs = [
        { 
            name: "Can You Feel It?", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "CYFI.mp3" 
        },
        { 
            name: "Ghost", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "Ghost.mp3" 
        },
        { 
            name: "Burn", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "Burn.mp3" 
        },
        { 
            name: "Gaslight", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "Gaslight.mp3" 
        },
        { 
            name: "Stranger", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "Stranger.mp3" 
        },
        { 
            name: "Backseat", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "Backseat.mp3" 
        },
        { 
            name: "Coffee", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "Coffee.mp3" 
        },
        { 
            name: "Paper Planes", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "Paper Planes.mp3" 
        },
        { 
            name: "Corduroy", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "Corduroy.mp3" 
        },
        { 
            name: "Petrichor (interlude)", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "Petrichor (interlude).mp3" 
        },
        { 
            name: "Pitfall", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "Pitfall.mp3" 
        },
        { 
            name: "Love Lost", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "Love Lost.mp3" 
        },
        { 
            name: "Easier", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "Easier.mp3" 
        },
        { 
            name: "Change", 
            artist: "Charley Yang", 
            image: "burnout.jpeg", 
            src: "Change.mp3" 
        }
    ];

    const audio = document.getElementById("audio");
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");
    const trackTitle = document.getElementById("track-title");
    const songImage = document.getElementById("song-image");
    const playlist = document.getElementById("playlist");

    let currentIndex = 0;

    // Update UI for the selected song
    function loadSong(index) {
        const song = songs[index];
        trackTitle.textContent = `${song.name} - ${song.artist}`;
        songImage.src = song.image;
        audio.src = song.src;
    }

    // Event listeners for control buttons
    playButton.addEventListener("click", () => audio.play());
    pauseButton.addEventListener("click", () => audio.pause());

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % songs.length;
        loadSong(currentIndex);
        audio.play();
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + songs.length) % songs.length;
        loadSong(currentIndex);
        audio.play();
    });

    // Populate the playlist
    songs.forEach((song, index) => {
        const songItem = document.createElement("div");
        songItem.classList.add("song-item");

        const songImage = document.createElement("img");
        songImage.src = song.image;
        songImage.alt = song.name;
        songImage.classList.add("song-image");

        const songDetails = document.createElement("div");
        songDetails.classList.add("song-details");

        const songName = document.createElement("p");
        songName.textContent = song.name;
        songName.classList.add("song-name");

        const songArtist = document.createElement("p");
        songArtist.textContent = song.artist;
        songArtist.classList.add("song-artist");

        songDetails.appendChild(songName);
        songDetails.appendChild(songArtist);
        songItem.appendChild(songImage);
        songItem.appendChild(songDetails);

        songItem.addEventListener("click", () => {
            currentIndex = index;
            loadSong(currentIndex);
            audio.play();
        });

        playlist.appendChild(songItem);
    });

    // Load the first song initially
    loadSong(currentIndex);
});
