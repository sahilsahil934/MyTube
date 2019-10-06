import axios from 'axios';
const KEY = 'AIzaSyB_-Tcj2kAS9OJkKeZ10EPMbVrOcm1Z1sY';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});