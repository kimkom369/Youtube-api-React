import axios from 'axios';

const KEY = 'AIzaSyDoHhe2DmmHoY-kSidgZXOwCPzx5cX-C7c';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
    }
})

