import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
	<header className="header">
		<div className="container">
			<div className="header-wrapper">
				<Link to="/">Home</Link>
				<Link to="/useHover">Hover</Link>
				<Link to="/useKeyPress">KeyPress</Link>
				<Link to="/useFetch">Fetch</Link>
				<Link to="/useLocalStorage">LocalStorage</Link>
			</div>
		</div>
	</header>
);

export default Header;
