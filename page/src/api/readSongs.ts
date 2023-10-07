import { config } from "../utilities/config";


export async function readSongs() {
    const data = await fetch(config.api_songs);
    const songs = await data.json();
    return songs;

}