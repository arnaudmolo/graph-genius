
const accessToken =
    "6S_hx31xJC1PMcJG9OgTupPQdoX9CQQNgmpdh6HIDEcyQiGcq2GBrCapMCGEeLkw";
const callApi = id => {
    `https://api.genius.com/artists/${id}?access_token=${accessToken}`
    const artist = () => window
        .fetch(`http://localhost:3000/api/artists/${id}`)
        .then(response => response.json())
        .then(response => response.response.artist);
    const songs = () => window
        .fetch(
            `http://localhost:3000/artists/${
            id
            }/songs?access_token=${accessToken}`
        )
        .then(response => response.json())
        .then(response => response.response.songs);
    const song = (songId) => window
        .fetch(
            `https://api.genius.com/songs/${
            songId
            }?access_token=${accessToken}`
        )
        .then(response => response.json())
        .then(response => response.response.song);
    return {
        artist,
        songs,
        song,
    }
}

export default callApi;
