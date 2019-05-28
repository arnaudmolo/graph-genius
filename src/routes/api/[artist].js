import { get as fetch } from 'axios'

const accessToken = "6S_hx31xJC1PMcJG9OgTupPQdoX9CQQNgmpdh6HIDEcyQiGcq2GBrCapMCGEeLkw";

export async function get(req, res) {
    console.log(req);
    const id = req.params.artist;
    const response = await fetch(
        `https://api.genius.com/artists/${
        id
        }?access_token=${accessToken}`
    );
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(response.data));
};
