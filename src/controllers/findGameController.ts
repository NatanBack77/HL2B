import { Message } from "../helpers/Erro";
import { getAllGamesController } from "./getAllGameController";

export async function findGamescontroller(game: string) {
	const response = await getAllGamesController();
	const games = Object.values(response.data);

	const gameFound = await games.find((item: any) => item.name === game);

	if (typeof gameFound === "undefined") {
		return new Message("Game Not Found");
	}

	return gameFound;
}
