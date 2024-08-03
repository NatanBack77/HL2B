import { hl2b } from "../src"; //Import

/**
 * Essas funções do hl2b são promises, pode ser usadas dentro de uma função assícrona, ou usar o thenCatch pra capturar o response
 *
 * @param {string} game param of the game
 * @param {string} url param of the url
 * @param {number} limit o limit é um parâmetro opcional do método get, que server pra limitar quantidades de dados do response
 */

const url =
	"https://gist.githubusercontent.com/NatanBack77/d26014d658b46bd33d476f36d606ed24/raw/03e3ac5ccf9f738dca4bfabe6198ecea53a0e4c3/game.json";

async function get(url: string, limit?: number) {
	return await hl2b.get({
		url,
		limit,
	});
}

async function find(game: string, url: string) {
	return await hl2b.find(game, url);
}

// Exemplo de uso:
console.log(get(url));
find("nameOfTheGame", url);
