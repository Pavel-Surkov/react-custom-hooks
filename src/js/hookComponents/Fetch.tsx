import React from 'react';
import useFetch from '../hooks/useFetch';

type DataType = { link: string };

const Fetch = () => {
	const { data, loading, error, abort } = useFetch<DataType>(
		'https://some-random-api.ml/animu/hug'
	);

	return (
		<div className="fetch-wrapper">
			<p style={{ fontSize: '32px' }}>Random hug GIF!</p>
			{loading ? <p style={{ fontSize: '24px' }}>Loading...</p> : null}
			{error ? <i style={{ color: 'red' }}>Error: {error.message}</i> : null}
			{data ? <img width="600" src={data.link} alt="hug image" /> : null}
		</div>
	);
};

export default Fetch;
