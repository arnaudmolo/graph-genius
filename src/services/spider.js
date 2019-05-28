import apiCreator from "../services/api";

const startSpider = async (id) => {
    const PouchDB = (await import('pouchdb-browser')).default;
    const db = new PouchDB('songs');
    const api = apiCreator(id);
    console.log('get artist');
    const artist = await api.artist();
    artist._id = artist.id;
    console.log('set artist');
    try {
        const sartist = await db.post(artist);
        console.log(sartist);
        let songs = [];
        // songs = await Promise.all(songs.map(async song => await api.song(song.id)));
        console.log('go');
        for (let song of await api.songs()) {
            console.log('un', song);
            song = await api.song(song.id);
            song._id = song.id;
            console.log('deux', song);
            songs.push(song);
            const ssong = await db.post(song);
            console.log('trois', ssong);
        }
        console.log(songs);
    } catch (error) {

    }
}

export default startSpider;
