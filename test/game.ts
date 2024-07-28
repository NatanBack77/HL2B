import { hl2b } from "../src";

async function get() {
	console.log(
		await hl2b.get({
			url: "https://gist.githubusercontent.com/NatanBack77/d26014d658b46bd33d476f36d606ed24/raw/03e3ac5ccf9f738dca4bfabe6198ecea53a0e4c3/game.json",
			limit: 1,
		}),
	);
	console.log(
		await hl2b.find(
			"Cave Story+",
			"https://gist.githubusercontent.com/NatanBack77/d26014d658b46bd33d476f36d606ed24/raw/03e3ac5ccf9f738dca4bfabe6198ecea53a0e4c3/game.json",
		),
	);
}
get();
