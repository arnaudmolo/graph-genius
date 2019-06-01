
const accessToken =
    "6S_hx31xJC1PMcJG9OgTupPQdoX9CQQNgmpdh6HIDEcyQiGcq2GBrCapMCGEeLkw";
const callApi = id => {
    const artist = () => window
        .fetch(
            `http://localhost:3000/api/artists/${
            id
            }?access_token=${accessToken}`
        )
        .then(response => response.json())
        .then(response => response.response.artist);
    const songs = () => window
        .fetch(
            `http://localhost:3000/api/artists/${
            id
            }/songs?access_token=${accessToken}`
        )
        .then(response => response.json())
        .then(response => response.response.songs);
    const song = (songId) => window
        .fetch(
            `http://localhost:3000/api/songs/${
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
