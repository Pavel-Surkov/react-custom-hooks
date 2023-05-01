import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Hover from './hookComponents/Hover';
import KeyPress from './hookComponents/KeyPress';
import Fetch from './hookComponents/Fetch';
import LocalStorage from './hookComponents/LocalStorage';

const App: React.FC = () => (
	<React.StrictMode>
		<Router>
			<div className="app">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/useHover" element={<Hover />} />
					<Route path="/useKeyPress" element={<KeyPress />} />
					<Route path="/useFetch" element={<Fetch />} />
					<Route path="/useLocalStorage" element={<LocalStorage />} />
				</Routes>
			</div>
		</Router>
	</React.StrictMode>
);

export default App;
