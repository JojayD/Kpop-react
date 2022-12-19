import React from "react";
import classes from "./Card.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Card(props) {
	return (
		<div className={classes["idol__container"]}>
			<h3>
				Full Name: {props.d["Full Name"] != null ? props.d["Full Name"] : "N/A"}
			</h3>
			<h3>
				DOB:
				{props.d["Date of Birth"] != null ? props.d["Date of Birth"] : "N/A"}
			</h3>
			<h3>Group: {props.d["Group"] != null ? props.d["Group"] : "N/A"}</h3>
			<h3>
				Profile:
				{props.d["Profile"] != null ? (
					<a
						href={props.d["Profile"]}
						target="_blank"
					>
						{props.d["Profile"]}
					</a>
				) : (
					"N/A"
				)}
			</h3>
		</div>
	);
}

export default Card;
