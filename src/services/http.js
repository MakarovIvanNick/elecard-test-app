import axios from "axios";

const req = axios.create({
    baseURL: 'http://contest.elecard.ru/frontend_data/catalog.json',
})

export const get = async () => {
    try {
        const response = await req.get('');
        return response.data;
    } catch (e) {
        console.log('get error ->', e);
    }
}
