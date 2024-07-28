import { axiosController } from "./axiosController";

export async function getAllGameController(url: string, limit?: number) {
	async function url_function(url: string) {
		const response = await axiosController(url);
		return response.data;
	}

	const response = await url_function(url);

	if (limit && Array.isArray(response)) {
		return response.slice(0, limit);
	}
	return response;
}
