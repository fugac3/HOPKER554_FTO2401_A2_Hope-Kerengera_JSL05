// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Best Thing I Never Had", artist: "Beyoncé", genre: "R&B" },
    { title: "By Your Side", artist: "Sade", genre: "Pop" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Exchange", artist: "Bryson Tiller", genre: "R&B" },
    { title: "Dancing Queen", artist: "ABBA", genre: "Pop" }
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax" : "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = Object.entries(guardians).map(([guardian, preferredGenre])=>{ //turn into an array and iterate over it
        const playlist = songs.filter(song => song.genre === preferredGenre); //makes sure the current song matches the preferred genre of guardian
        return {playlist, guardian}; //returns this
    });

    playlists.forEach(({playlist, guardian})=>{
        const guardianPlaylist = document.createElement("div"); //creating card
        guardianPlaylist.className = "playlist"; //naming it for css
        const heading = document.createElement("h2"); //card heading
        heading.textContent = `${guardian}'s Playlist`;
        const playlistSongs = document.createElement("ul"); //creating list in card

        playlist.forEach(song => {
            const songItem = document.createElement("li"); //list items
            const artistSpan = document.createElement("span"); //creating a span to cover just the artist
            artistSpan.textContent = song.artist;
            artistSpan.style.fontStyle = "italic" //span content style
            artistSpan.style.fontSize = "0.8em"
            songItem.innerHTML = `${song.title} - `;
            songItem.appendChild(artistSpan); //add artist span to the end of list item
            playlistSongs.appendChild(songItem); //add song to the end of the list
        });

        guardianPlaylist.appendChild(playlistSongs); //add playlist to the div
        guardianPlaylist.prepend(heading); //add heading to the beginning of the div
        document.getElementById("playlists").appendChild(guardianPlaylist); //add guardian playlist to the main div
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


