import { data } from "autoprefixer";
import React, { useContext } from "react";
import { CreateInput } from "../Context/CreateInp";

function GetIdols(props) {
	const {
		input,
		setInput,
		setObj,
		obj,
		toggle,
		showField,
		arrayObj,
		setArrayObj,
	} = useContext(CreateInput);

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
			.then((data) => {
				console.log(data);
				setInput("");
				setObj(data);
				toggle();
			})
			.catch((err) => console.log(err));
	};

	const results = [];

	return (
		<div>
			<label>Get Idol</label>
			<input
				type="text"
				value={props.value}
				onChange={props.handleClick}
			/>
			<button onClick={search}>Search</button>

			<ul>
				{showField &&
					obj.data.forEach(function (currVal, index, arr) {
						console.log(currVal);
						console.log(arr[index]);
						const currArray = arr[index];
						Object.entries(currArray).map(([key, value]) => {
							console.log(key, value);
							return (
								<div key={index}>
									<h2>
										{key}:{currArray[key]}{" "}
									</h2>
								</div>
							);
						});
					})}
			</ul>
		</div>
	);
}

export default GetIdols;
