import axios from "axios";

export async function getAllGamesController() {
	return await axios.get(
		"https://raw.githubusercontent.com/NatanBack77/HL2B_Data/main/steamGames.json",
	);
}
