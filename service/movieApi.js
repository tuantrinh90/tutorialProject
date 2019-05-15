import { api } from '../service/api';

export const fetchMovies = () => {
    return api.get('/movies.json');
}