import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
	<header className="header">
		<div className="container">
			<div className="header-wrapper">
				<Link to="/">Home</Link>
				<Link to="/hover">Hover</Link>
				<Link to="/keypress">KeyPress</Link>
				<Link to="/fetch">Fetch</Link>
			</div>
		</div>
	</header>
);

export default Header;
