import axios from "axios";

export async function getMsg() {
    return (await axios.get('http://localhost:3001/inbox')).data
}