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
    static async addPost(data) {
        const res = await axios.post(`${url}`, data);
        return res.data
    }
}