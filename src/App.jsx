import { useEffect, useState } from 'react';
import { getAreaData } from './api';

import './App.css';
import AreaCard from './AreaCard';

function App() {
	const [areas, setAreas] = useState([]);
	const [userInput, setUserInput] = useState('');
	const [outcode, setOutcode] = useState('BB10');

	const load = async () => {
		try {
			const areaData = await getAreaData(outcode);

			setAreas(areaData);
		} catch (error) {
			window.alert('todo: fix app');
		}
	};

	useEffect(() => {
		load();
	}, [outcode]);

	const updateInput = (e) => {
		setUserInput(e.target.value);
	};

	const changeOutcode = () => {
		setOutcode(userInput);
	};

	return (
		<div className="App">
			<h1>Postcoders</h1>
			<h2>{`Areas for ${outcode}: ${areas.length}`}</h2>
			<div>
				<label htmlFor="fname">Enter outcode:</label>
				<input type="text" id="pcode" onChange={updateInput} />
				<button onClick={changeOutcode}>Search</button>
			</div>
			<div id="areaList">
				<ul>
					{areas.map((area) => {
						return (
							<li key={`${area['place name']}`}>
								<AreaCard area={area} />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
