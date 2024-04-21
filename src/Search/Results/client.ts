import axios from "axios";
const API_BASE = process.env.REACT_APP_BASE_API_URL;
const MOVIES_API = `${API_BASE}/api/movies`;
export const findReviewsForMovie = async (movieId: any) => {
    const response = await axios
        .get(`${MOVIES_API}/${movieId}/reviews`);
    return response.data;
};