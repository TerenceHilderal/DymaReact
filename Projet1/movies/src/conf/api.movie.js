import * as axios from "axios";

const apiMovie = axios.create({
	baseURL: "https://api.themoviedb.org/4"
});
apiMovie.interceptors.request.use(req => {
	req.headers["Authorization"] =
		"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGY1OGJkMGZjNzMxY2EyZThhMjFlYjVjMzVjNDAxMSIsInN1YiI6IjVmOTk0MWQ1MDgzNTQ3MDAzNTc4YzU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8e6PmdvCG2hVK4w0s-BaHsrgpdZmZ6dxdKYmBT627rY";
	return req;
});

export default apiMovie;

export const apiMovieMap = m => ({
	img: "https://image.tmdb.org/t/p/w500" + m.poster_path,
	title: m.title,
	details: `${m.release_date} | ${m.vote_average}/10  (${m.vote_count})`,
	description: m.overview
});
