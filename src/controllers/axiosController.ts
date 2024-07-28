import axios from "axios";

export async function axiosController(url: string) {
	return await axios.get(url);
}
