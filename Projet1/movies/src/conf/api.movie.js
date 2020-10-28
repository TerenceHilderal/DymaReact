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
