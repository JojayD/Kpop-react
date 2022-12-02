import React, { useContext } from "react";
import { CreateInput } from "../Context/CreateInp";
import classes from "./GetIdols.module.css";
import Card from "./Card";
import { Button } from "react-bootstrap";
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

	return (
		<div >
			<div className={classes.container__input}>
				<label>Get Idol</label>
				<input
					type="text"
					value={props.value}
					onChange={props.handleClick}
				/>
				<Button  onClick={search}>Search</Button >
			</div>


			<div className={classes.card__container}>
				{showField &&
					obj.data.map((d, key) => {
						console.log(d);
						return (
							<Card
								d={d}
								key={key}
							/>
						);
					})}
			</div>
		</div>
	);
}

export default GetIdols;
