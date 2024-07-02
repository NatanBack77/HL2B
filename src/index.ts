import { findGamescontroller } from "./controllers/findGameController";

export async function get(game: string) {
	try {
		return await findGamescontroller(game);
	} catch (error) {
		return error;
	}
}
