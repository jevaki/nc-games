import axios from 'axios';

const gamesApi = axios.create({
    baseURL: 'https://ioanna-nc-games.herokuapp.com/api',
});

export const getCategories = async () => {
    const { data } = await gamesApi.get('/categories');
    return data.categories;
}