import { findGamescontroller } from "./controllers/findGameController";
import { getAllGameController } from "./controllers/getAllGamesController";

interface get_Config {
	url: string;
	limit?: number;
}
export class hl2b {
	constructor({ url }: get_Config) {
		url;
	}

	static async get({ url, limit }: get_Config) {
		return await getAllGameController(url, limit);
	}

	static async find(game: string, url: string) {
		return await findGamescontroller(game, url);
	}
}
