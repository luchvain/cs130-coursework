const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = async (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const startTrack = (event) => {
    document.getElementById("footer-track").innerHTML = event.currentTarget.innerHTML;
    audioPlayer.setAudioFile(event.currentTarget.getAttribute('data-preview-track'));
    audioPlayer.play();
}

const clickHandlers = () => {
    document.querySelectorAll(".track-item").forEach(track => {
        track.addEventListener('click', startTrack);
    })
}

const getTracks = (term) => {
    fetch(`https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`).then(response => response.json()).then(data => {
    const tracks = data.slice(0, 5);
    const element = document.getElementById("tracks");
        if (tracks.length == 0) {
            element.innerHTML = `<div><h3>Did not find any tracks</h3></div>`
        }
        if (tracks.length > 0) {
            element.innerHTML = ``;
            tracks.forEach(track => {
                element.innerHTML = element.innerHTML + `<section class="track-item preview" data-preview-track="${track.preview_url}">
                <img src="${track.album.image_url}">
                <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h3>${track.name}</h3>
                    <p>
                        ${track.artist.name}
                    </p>
                </div>
            </section>`;
            });
        }
    clickHandlers();

    })
};

const getAlbums = (term) => {
    fetch(`https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`).then(response => response.json()).then(data => {
    const element = document.getElementById("albums");
    if (data.length == 0) element.innerHTML = `<div><h3>Did not find any albums</h3></div>`
        if (data.length > 0) {
            element.innerHTML = ``;
            data.forEach(item => {
                element.innerHTML += `<section class="album-card" id="${item.id}">
            <div>
                <img src="${item.image_url}">
                <h3>${item.name}</h3>
                <div class="footer">
                    <a href="${item.spotify_url}" target="_blank">
                        view on spotify
                    </a>
                </div>
            </div>
        </section>`
            });    
        }

    })
};

const getArtist = (term) => {
    fetch(`https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`)
      .then(response => response.json())
      .then(data => {
        const element = document.getElementById("artist");
        if (data.length == 0) element.innerHTML = `<div><h3>Did not find any artist</h3></div>`
        if (data.length > 1) {
            element.innerHTML = `<section class="artist-card" id="${data[0].id}">
        <div>
            <img src="${data[0].image_url}">
            <h3>${data[0].name}</h3>
            <div class="footer">
                <a href="${data[0].spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>`;
        }})

};

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};