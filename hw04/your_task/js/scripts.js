const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    fetch(url)
.then((response) => {
    return response.json();
})
.then(loadCards); [{"id":"3Nrfpe0tUJi4K4DXYWgMUX","name":"BTS","popularity":96,"image_url":"https://i.scdn.co/image/8ef1003d0cab2411ebc066ae9e50c01dceaf4e6c","spotify_url":"https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"},{"id":"5RmQ8k4l3HZ8JoPb4mNsML","name":"Agust D","popularity":73,"image_url":"https://i.scdn.co/image/820416216c8fb6c3dd265ab9908f46e63ee00158","spotify_url":"https://open.spotify.com/artist/5RmQ8k4l3HZ8JoPb4mNsML"},{"id":"51sg5jUqKu2tkbmPlwPrNH","name":"BTS World","popularity":44,"spotify_url":"https://open.spotify.com/artist/51sg5jUqKu2tkbmPlwPrNH"},{"id":"3JsHnjpbhX4SnySpvpa9DK","name":"V","popularity":67,"image_url":"https://i.scdn.co/image/ab67616d0000b27320af30dc4a6011fc11632211","spotify_url":"https://open.spotify.com/artist/3JsHnjpbhX4SnySpvpa9DK"},{"id":"5vV3bFXnN6D6N3Nj4xRvaV","name":"JIN","popularity":57,"image_url":"https://i.scdn.co/image/ab67616d0000b2738dd6de651baf8860665f8003","spotify_url":"https://open.spotify.com/artist/5vV3bFXnN6D6N3Nj4xRvaV"},{"id":"2auC28zjQyVTsiZKNgPRGs","name":"RM","popularity":72,"image_url":"https://i.scdn.co/image/eeb8ca310f82760415ba9ce09a06c66181e0d775","spotify_url":"https://open.spotify.com/artist/2auC28zjQyVTsiZKNgPRGs"},{"id":"1Dx8CcTQA8bWYen7zXsNW0","name":"BTSC","popularity":31,"image_url":"https://i.scdn.co/image/ab67616d0000b273ff015e6e8e0c4cbd4fde4dee","spotify_url":"https://open.spotify.com/artist/1Dx8CcTQA8bWYen7zXsNW0"},{"id":"6b47NthIlcWFhQXGHmacUP","name":"BTS","popularity":9,"image_url":"https://i.scdn.co/image/ab67616d0000b273e513e7903f389ef98e868102","spotify_url":"https://open.spotify.com/artist/6b47NthIlcWFhQXGHmacUP"},{"id":"0flRnoqByvO9wVNd8AE9Ky","name":"LoFi B.T.S","popularity":18,"image_url":"https://i.scdn.co/image/ab67616d0000b2732b0f6767eb04c949f5c02198","spotify_url":"https://open.spotify.com/artist/0flRnoqByvO9wVNd8AE9Ky"},{"id":"3YLl0gRlOoj3vRFuFDqYIt","name":"Btsound","popularity":17,"image_url":"https://i.scdn.co/image/ab67616d0000b2732b8c677df64839d2283e81ab","spotify_url":"https://open.spotify.com/artist/3YLl0gRlOoj3vRFuFDqYIt"},{"id":"1uAbhIiblB9fzsPfj4XYXv","name":"LINUS BTSKIP","popularity":9,"image_url":"https://i.scdn.co/image/a593ca1fffeb2c07bd8cde310657b49158b2d2ba","spotify_url":"https://open.spotify.com/artist/1uAbhIiblB9fzsPfj4XYXv"},{"id":"3DFc7GdsVS5iBzHI9JuXUq","name":"BTS","popularity":6,"image_url":"https://i.scdn.co/image/ab67616d0000b273696efe5e88e8f867d9cd8b99","spotify_url":"https://open.spotify.com/artist/3DFc7GdsVS5iBzHI9JuXUq"},{"id":"5WdQlg75hLSNA9869oH4ke","name":"DJ Pardon The Bts","popularity":16,"image_url":"https://i.scdn.co/image/ab67616d0000b273ef95c55701f3f1a3400238e9","spotify_url":"https://open.spotify.com/artist/5WdQlg75hLSNA9869oH4ke"},{"id":"7tggP0YcneyJwJzxzBaaG3","name":"BTS48","popularity":4,"image_url":"https://i.scdn.co/image/ab67616d0000b27389a0c14298f84715533139c1","spotify_url":"https://open.spotify.com/artist/7tggP0YcneyJwJzxzBaaG3"},{"id":"69JeDKsafZaqyRsyJuGhk6","name":"CTAH BTS","popularity":9,"image_url":"https://i.scdn.co/image/cc9e3379e9b117e764681250924bbc1ebf09123d","spotify_url":"https://open.spotify.com/artist/69JeDKsafZaqyRsyJuGhk6"},{"id":"2iqhY9YIm0itW28ADVMIXF","name":"BTS","popularity":2,"spotify_url":"https://open.spotify.com/artist/2iqhY9YIm0itW28ADVMIXF"},{"id":"4PIhv4BJrPefTHIFNhKl1I","name":"Pardon The Bts","popularity":5,"image_url":"https://i.scdn.co/image/ab67616d0000b27381ebeb1afbd637f43ff9406c","spotify_url":"https://open.spotify.com/artist/4PIhv4BJrPefTHIFNhKl1I"},{"id":"46SqMLtuMApmIOfROPpWSz","name":"Bts","popularity":2,"image_url":"https://i.scdn.co/image/ab67616d0000b27382a0ea4c05c78cb02bdf435c","spotify_url":"https://open.spotify.com/artist/46SqMLtuMApmIOfROPpWSz"},{"id":"1F0InkNtUK49tmgfYjWy39","name":"BTSEM","popularity":0,"image_url":"https://i.scdn.co/image/ab67616d0000b273f5b7865f51881d866951e8f9","spotify_url":"https://open.spotify.com/artist/1F0InkNtUK49tmgfYjWy39"},{"id":"7nlj9QJtkm9sNtn8vEMrrc","name":"Btspoperas Bora","popularity":3,"image_url":"https://i.scdn.co/image/ab67616d0000b273ade7698fc26bf7ef40dbba37","spotify_url":"https://open.spotify.com/artist/7nlj9QJtkm9sNtn8vEMrrc"}]
};
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

const getTracks = (term) => {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
};

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
};


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};

fetch(url)
.then((response) => {
    return response.json();
})
.then(loadCards); [{"id":"3Nrfpe0tUJi4K4DXYWgMUX","name":"BTS","popularity":96,"image_url":"https://i.scdn.co/image/8ef1003d0cab2411ebc066ae9e50c01dceaf4e6c","spotify_url":"https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX"},{"id":"5RmQ8k4l3HZ8JoPb4mNsML","name":"Agust D","popularity":73,"image_url":"https://i.scdn.co/image/820416216c8fb6c3dd265ab9908f46e63ee00158","spotify_url":"https://open.spotify.com/artist/5RmQ8k4l3HZ8JoPb4mNsML"},{"id":"51sg5jUqKu2tkbmPlwPrNH","name":"BTS World","popularity":44,"spotify_url":"https://open.spotify.com/artist/51sg5jUqKu2tkbmPlwPrNH"},{"id":"3JsHnjpbhX4SnySpvpa9DK","name":"V","popularity":67,"image_url":"https://i.scdn.co/image/ab67616d0000b27320af30dc4a6011fc11632211","spotify_url":"https://open.spotify.com/artist/3JsHnjpbhX4SnySpvpa9DK"},{"id":"5vV3bFXnN6D6N3Nj4xRvaV","name":"JIN","popularity":57,"image_url":"https://i.scdn.co/image/ab67616d0000b2738dd6de651baf8860665f8003","spotify_url":"https://open.spotify.com/artist/5vV3bFXnN6D6N3Nj4xRvaV"},{"id":"2auC28zjQyVTsiZKNgPRGs","name":"RM","popularity":72,"image_url":"https://i.scdn.co/image/eeb8ca310f82760415ba9ce09a06c66181e0d775","spotify_url":"https://open.spotify.com/artist/2auC28zjQyVTsiZKNgPRGs"},{"id":"1Dx8CcTQA8bWYen7zXsNW0","name":"BTSC","popularity":31,"image_url":"https://i.scdn.co/image/ab67616d0000b273ff015e6e8e0c4cbd4fde4dee","spotify_url":"https://open.spotify.com/artist/1Dx8CcTQA8bWYen7zXsNW0"},{"id":"6b47NthIlcWFhQXGHmacUP","name":"BTS","popularity":9,"image_url":"https://i.scdn.co/image/ab67616d0000b273e513e7903f389ef98e868102","spotify_url":"https://open.spotify.com/artist/6b47NthIlcWFhQXGHmacUP"},{"id":"0flRnoqByvO9wVNd8AE9Ky","name":"LoFi B.T.S","popularity":18,"image_url":"https://i.scdn.co/image/ab67616d0000b2732b0f6767eb04c949f5c02198","spotify_url":"https://open.spotify.com/artist/0flRnoqByvO9wVNd8AE9Ky"},{"id":"3YLl0gRlOoj3vRFuFDqYIt","name":"Btsound","popularity":17,"image_url":"https://i.scdn.co/image/ab67616d0000b2732b8c677df64839d2283e81ab","spotify_url":"https://open.spotify.com/artist/3YLl0gRlOoj3vRFuFDqYIt"},{"id":"1uAbhIiblB9fzsPfj4XYXv","name":"LINUS BTSKIP","popularity":9,"image_url":"https://i.scdn.co/image/a593ca1fffeb2c07bd8cde310657b49158b2d2ba","spotify_url":"https://open.spotify.com/artist/1uAbhIiblB9fzsPfj4XYXv"},{"id":"3DFc7GdsVS5iBzHI9JuXUq","name":"BTS","popularity":6,"image_url":"https://i.scdn.co/image/ab67616d0000b273696efe5e88e8f867d9cd8b99","spotify_url":"https://open.spotify.com/artist/3DFc7GdsVS5iBzHI9JuXUq"},{"id":"5WdQlg75hLSNA9869oH4ke","name":"DJ Pardon The Bts","popularity":16,"image_url":"https://i.scdn.co/image/ab67616d0000b273ef95c55701f3f1a3400238e9","spotify_url":"https://open.spotify.com/artist/5WdQlg75hLSNA9869oH4ke"},{"id":"7tggP0YcneyJwJzxzBaaG3","name":"BTS48","popularity":4,"image_url":"https://i.scdn.co/image/ab67616d0000b27389a0c14298f84715533139c1","spotify_url":"https://open.spotify.com/artist/7tggP0YcneyJwJzxzBaaG3"},{"id":"69JeDKsafZaqyRsyJuGhk6","name":"CTAH BTS","popularity":9,"image_url":"https://i.scdn.co/image/cc9e3379e9b117e764681250924bbc1ebf09123d","spotify_url":"https://open.spotify.com/artist/69JeDKsafZaqyRsyJuGhk6"},{"id":"2iqhY9YIm0itW28ADVMIXF","name":"BTS","popularity":2,"spotify_url":"https://open.spotify.com/artist/2iqhY9YIm0itW28ADVMIXF"},{"id":"4PIhv4BJrPefTHIFNhKl1I","name":"Pardon The Bts","popularity":5,"image_url":"https://i.scdn.co/image/ab67616d0000b27381ebeb1afbd637f43ff9406c","spotify_url":"https://open.spotify.com/artist/4PIhv4BJrPefTHIFNhKl1I"},{"id":"46SqMLtuMApmIOfROPpWSz","name":"Bts","popularity":2,"image_url":"https://i.scdn.co/image/ab67616d0000b27382a0ea4c05c78cb02bdf435c","spotify_url":"https://open.spotify.com/artist/46SqMLtuMApmIOfROPpWSz"},{"id":"1F0InkNtUK49tmgfYjWy39","name":"BTSEM","popularity":0,"image_url":"https://i.scdn.co/image/ab67616d0000b273f5b7865f51881d866951e8f9","spotify_url":"https://open.spotify.com/artist/1F0InkNtUK49tmgfYjWy39"},{"id":"7nlj9QJtkm9sNtn8vEMrrc","name":"Btspoperas Bora","popularity":3,"image_url":"https://i.scdn.co/image/ab67616d0000b273ade7698fc26bf7ef40dbba37","spotify_url":"https://open.spotify.com/artist/7nlj9QJtkm9sNtn8vEMrrc"}]
};