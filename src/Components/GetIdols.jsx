import React, { useContext } from "react";
import { CreateInput } from "../Context/CreateInp";

function GetIdols(props) {
	const { input } = useContext(CreateInput);

	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "a84e702662mshd712a9e5fcccd4bp113f2djsn7143f4a55d88",
			"X-RapidAPI-Host": "k-pop.p.rapidapi.com",
		},
	};

	const search = () => {
		fetch(
			`https://k-pop.p.rapidapi.com/idols?q=${input}&by=Stage%20Name`,
			options
		)
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<label>Get Idol</label>
			<input
        type="text"
				value={props.value}
				onChange={props.handleClick}
			/>
			<button onClick={search}>Search</button>
		</div>
	);
}

export default GetIdols;
