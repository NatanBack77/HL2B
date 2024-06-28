
export async function findGamescontroller(response:any) {
	const inicio = performance.now();
	
	const gameData = await JSON.stringify(response);
	console.log(gameData);

	const games = Array.from(gameData);

	// const gameFound = games.find((item: any) => item.name === game);
	// console.log(gameFound)

	const fim = performance.now();
	console.log(`A operação levou ${fim - inicio} milissegundos`);

	return gameData;

}
