import axios from 'axios';

export default class PostsService {
  static endpoint = 'http://ec2-52-90-188-77.compute-1.amazonaws.com:5000/api/v1/posts'
  static getPosts() {
    return axios.get(PostsService.endpoint);
  }
}