import * as axios from "axios";

const apiFirebase = axios.create({
	baseURL: "https://films-9f445-default-rtdb.firebaseio.com/"
});

export default apiFirebase;
