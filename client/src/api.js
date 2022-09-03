import axios from "axios";
const url = 'api/post';

export default class API {

    // Get All Post from Server
    static async getAllPost() {
        const res = await axios.get(url);
        return res.data
    }
}