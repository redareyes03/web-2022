import axios from "axios";

export async function getRqst() {
    return (await axios.get('http://localhost:3001/requests')).data
}