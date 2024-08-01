import { get } from "../index";

get("Job Simulator")
	.then((response) => console.log(response))
	.catch((err) => {
		console.log(err);
	});
