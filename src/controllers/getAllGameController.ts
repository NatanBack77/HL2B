import axios from "axios";

export async function getAllGamesController() {
	return await axios.get(
		"https://gist.githubusercontent.com/NatanBack77/d26014d658b46bd33d476f36d606ed24/raw/03e3ac5ccf9f738dca4bfabe6198ecea53a0e4c3/game.json",
	);
}
