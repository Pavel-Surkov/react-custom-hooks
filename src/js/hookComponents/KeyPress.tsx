import React from 'react';
import useKeyPress from '../hooks/useKeyPress';

const KeyPress = () => {
	const enterPressed = useKeyPress('Enter');

	return (
		<div className="hover-page">
			<p>Enter key pressed: {enterPressed ? 'true' : 'false'}</p>
		</div>
	);
};

export default KeyPress;
