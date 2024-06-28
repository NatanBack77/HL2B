import { findGamescontroller } from "./findGameController";

const axios = require("axios");

 export async function getAllGamesController() {
	axios
	.get(
		"https://raw.githubusercontent.com/NatanBack77/HL2B_Data/main/steamGames.json",
		{},
	)
	.then((response: any) => {
		 const games = findGamescontroller(response.data)
		 const gameFound = games.find((item: any) => item.name === game);
	      console.log(gameFound)
	})
	.catch((error: Error) => {
		console.log(error);
	});
  
 }
 