import axios from 'axios';

const KEY = 'AIzaSyAM6nE7koN_gyo5Vd24XU2WQqk5tvuQQh8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});
