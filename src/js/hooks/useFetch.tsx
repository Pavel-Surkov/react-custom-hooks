import { useState, useEffect } from 'react';

type AbortType = () => void | AbortController;

type UseFetchReturnType<T> = {
	data: null | T;
	loading: boolean;
	error: Error | null;
	abort: AbortType;
};

function useFetch<T = unknown>(url: string, options?: RequestInit): UseFetchReturnType<T> {
	const [data, setData] = useState<null | T>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);
	const [abort, setAbort] = useState<AbortType>(() => {});

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			try {
				const abortController: AbortController = new AbortController();
				const signal: AbortSignal = abortController.signal;
				setAbort.bind(window, abortController.abort);

				const res: Response = await fetch(url, { ...options, signal });
				const json: T = await res.json();
				setData(json);

				setLoading(false);
			} catch (err) {
				setLoading(false);
				if (err instanceof Error) {
					setError(err);
				}
			}
		};

		fetchData();
	}, []);

	return { data, loading, error, abort };
}

export default useFetch;
