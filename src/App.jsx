import classes from './App.module.css'
import { useState, useContext } from "react";
import GetIdols from "./Components/GetIdols";
import { CreateInput } from "./Context/CreateInp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [input, setInput] = useState("");
	const [obj, setObj] = useState({});
	const [showField, setField] = useState(false);

	const handleClick = (event) => {
		const { value } = event.target;
		setInput(value);
		console.log(value);
	};

	const toggle = () => {
		setField((prevState) => !prevState);
	};

	return (
		<div className={classes.app__container}>
			<CreateInput.Provider
				value={{ input, setInput, setObj, obj, toggle, showField }}
			>
				<GetIdols
					value={input}
					handleClick={handleClick}
					setInput={setInput}
				/>
			</CreateInput.Provider>
		</div>
	);
}

export default App;
