import axios from 'axios';

const KEY = 'AIzaSyDmzrYjyuCt-Il4pbNTxVLZkH3iFdMPdPs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
