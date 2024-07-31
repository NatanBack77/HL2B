import { hl2b } from "..";
import { Message } from "../helpers/Error";

export async function findGamescontroller(game: string, url: string) {
	const response = await hl2b.get({ url });

	const games = Object.values(response);

	const gameFound = await games.find((item: any) => item.name === game);

	if (typeof gameFound === "undefined") {
		return new Message("Game Not Found");
	}
	return gameFound;
}
