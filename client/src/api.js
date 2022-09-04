import axios from "axios";
const url = '/api/post';

export default class API {

    // Get All Post from Server
    static async getAllPost() {
        const res = await axios.get(url);
        return res.data
    }

    // View Post by ID
    static async getPostById(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data
    }

    // Add Post
    static async addPost(post) {
        const res = await axios.post(url, post);
        return res.data
    }

    // Update Post by ID
    static async updatePostById(id, post) {
        const res = await axios.put(`${url}/${id}`, post);
        return res.data
    }
}