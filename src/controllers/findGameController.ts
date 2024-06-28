import { getAllGamesController } from "./getAllGameController";

export async function findGamescontroller(game: string) {
	const inicio = performance.now();

	const gameData = await JSON.stringify(getAllGamesController());

	const games = Array.from(gameData);
	console.log(games);
	const gameFound = games.find((item: any) => item.name === game);

	const fim = performance.now();
	console.log(`A operação levou ${fim - inicio} milissegundos`);

	return gameData;
}
