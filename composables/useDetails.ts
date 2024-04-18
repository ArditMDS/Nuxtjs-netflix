import {param} from "ts-interface-checker";

export const useDetails = () => {
    const config = useRuntimeConfig();
    const route = useRoute();
    const queryParams = "language=fr-FR&page=1";
    const baseUrl = 'https://api.themoviedb.org/3/movie';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${config.public.tmdbKey}`
        }
    }

    async function getMovieDetails() {
        const id = route.params.id;
        const url=`${baseUrl}/${id}?${queryParams}`;
        return await $fetch(url, options);
    }

    return { getMovieDetails }
}