import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Hover from './hookComponents/Hover';
import KeyPress from './hookComponents/KeyPress';

const App: React.FC = () => (
	<React.StrictMode>
		<Router>
			<div className="app">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/hover" element={<Hover />} />
					<Route path="/keypress" element={<KeyPress />} />
				</Routes>
			</div>
		</Router>
	</React.StrictMode>
);

export default App;
