export const useTrailer = () => {
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

    async function getMovieTrailer() {
        const config = useRuntimeConfig();
        const id = route.params.id; // Ensure 'route' is accessible in this context, typically from 'useRoute' if using Vue 3 Composition API.
        const url = `${baseUrl}/${id}/videos?${queryParams}`; // Ensure 'baseUrl' and 'queryParams' are defined and appropriate.
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${config.public.tmdbKey}`
            }
        };

        try {
            const result = await $fetch(url, options);
            const trailers = result.results.filter(video => video.type === 'Trailer');
            console.log(trailers[0])
            return trailers[0];
        } catch (error) {
            console.error('Error fetching movie trailers:', error);
            return []; // Return an empty array or handle the error as needed.
        }
    }


    return { getMovieTrailer }
}