import { Message } from "../helpers/Erro";
import { getAllGamesController } from "./getAllGameController";

export async function findGamescontroller(game: string) {
	const inicio = performance.now();

	const response = await getAllGamesController();
	const games = Object.values(response.data);

	// if ( name.toLowerCase().includes(game.toLowerCase()) )
	const gameFound = games.find((item: any) => item.name === game);

	if (typeof gameFound === "undefined") {
		return console.log(new Message("Game Not Found"));
	}

	const name = gameFound.name;

	const map = JSON.stringify(name);

	const cleanedString = map.replace(/[\s\W_]+/g, "");
	const lowercaseString = cleanedString.toLowerCase();
	console.log(lowercaseString);

	const fim = performance.now();

	console.log(`A operação levou ${fim - inicio} milissegundos`);

	return gameFound;
}
