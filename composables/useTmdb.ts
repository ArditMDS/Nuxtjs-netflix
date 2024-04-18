export const useTmdb = () => {
  const config = useRuntimeConfig();
  const queryParams = "language=fr-FR&page=1";
  const baseUrl = 'https://api.themoviedb.org/3/movie';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${config.public.tmdbKey}`
    }
  }

  async function getMovies(params) {
    const url=`${baseUrl}/${params}?${queryParams}`;
    const response = await $fetch(url, options);
    return response.results;
  }

  return { getMovies }
}