import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const LocalStorage = () => {
	const [value, setValue] = useLocalStorage('textInput', '');

	return (
		<div className="storage-page">
			<p>Type some text below</p>
			<input
				type="text"
				name="TextMe"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Type here..."
			/>
			<p>Then reload the page</p>
		</div>
	);
};

export default LocalStorage;
