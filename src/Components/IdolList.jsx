import React from "react";

function IdolList(props) {
	<div className={classes.cards__container}>
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
	</div>;
}

export default IdolList;
