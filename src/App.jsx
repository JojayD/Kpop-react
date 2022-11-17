import reactLogo from "./assets/react.svg";
import "./App.css";
import { useState, useContext } from "react";
import GetIdols from "./Components/GetIdols";
import { CreateInput } from "./Context/CreateInp";
function App() {
	const [input, setInput] = useState("");
	const [showField, setField] = useState(false);

	const handleClick = (event) => {
		const { value } = event.target;
		setInput(value);
		console.log(value);
	};


	return (
		<div>
			<CreateInput.Provider value={{ input, setInput }}>
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
