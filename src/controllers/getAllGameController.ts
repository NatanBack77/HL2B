import { findGamescontroller } from "./findGameController";

const axios = require("axios");

 export async function getAllGamesController() {
	let response = await axios
	.get(
		"https://raw.githubusercontent.com/NatanBack77/HL2B_Data/main/steamGames.json",
		{},
	)
	const responseData= response.data
	console.log(responseData)
    return responseData
 }
 