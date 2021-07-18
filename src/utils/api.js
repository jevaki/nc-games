import axios from 'axios';

const gamesApi = axios.create({
    baseURL: 'https://ioanna-nc-games.herokuapp.com/api',
});

export const getCategories = async () => {
    const { data } = await gamesApi.get('/categories');
    return data.categories;
}

export const getReviews = async () => {
    const { data } = await gamesApi.get('/reviews');
    return data.reviews;
}

export const getReviewsById = async (review_id) => {
    const { data } = await gamesApi.get(`/reviews/${review_id}`);
    return data.review;
}

export const getComments = async (review_id) => {
    const { data } = await gamesApi.get(`/reviews/${review_id}/comments`);
    return data.comments;
}
export const getVotes = async (review_id) => {
    const { data } = await gamesApi.get(`/reviews/${review_id}`);
    return data.review.votes;
}

export const updateVotes = async (review_id) => {
    const { data } = await gamesApi.patch(`/reviews/${review_id}`, {
        inc_votes: 1,
    });
    return data;
}

