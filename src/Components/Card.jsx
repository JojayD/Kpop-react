import React from "react";
import classes from "./Card.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Card(props) {
	return (
		<div className={classes["idol__container"]}>
			<h2>
				Full Name: {props.d["Full Name"] != null ? props.d["Full Name"] : "N/A"}
			</h2>
			<h2>
				DOB:
				{props.d["Date of Birth"] != null ? props.d["Date of Birth"] : "N/A"}
			</h2>
			<h2>Group: {props.d["Group"] != null ? props.d["Group"] : "N/A"}</h2>
			<h2>
				Profile: {props.d["Profile"] != null ? props.d["Profile"] : "N/A"}
			</h2>
		</div>
	);
}

export default Card;
