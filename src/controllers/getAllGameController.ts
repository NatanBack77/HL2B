import axios from "axios";

export async function getAllGamesController() {
	return await axios.get(
		"https://gist.githubusercontent.com/NatanBack77/d26014d658b46bd33d476f36d606ed24/raw/a87315f5b75ff28af0952e26989b23ef6d78f757/game.json",
	);
}
