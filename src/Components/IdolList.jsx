import React from "react";
import classes from "./Card.module.css";
import Card from "./Card";
import { Link, Route, Routes } from "react-router-dom";
function IdolList(props) {
	return (
		<div className={classes.cards__container}>
			{props.showField &&
				props.obj.data.map((d, key) => {
					console.log(d);
					return (
						<Card
							d={d}
							key={key}
							id={key}
						/>
					);
				})}
		</div>
	);
}

export default IdolList;
