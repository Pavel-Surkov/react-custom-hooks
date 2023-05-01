import { useState } from 'react';

// Creates a stateful value that is persisted to localStorage, and a function to update it.

// Use the useState() hook with a function to initialize its value lazily.
// Use a try...catch block and Storage.getItem() to try and get the value from Window.localStorage. If no value is found, use Storage.setItem() to store the defaultValue and use it as the initial state. If an error occurs, use defaultValue as the initial state.
// Define a function that will update the state variable with the passed value and use Storage.setItem() to store it.

type SetValueT<T> = (value: T) => void;

function useLocalStorage<T>(key: string, defaultValue: T): [T, SetValueT<T>] {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const value: string | null = window.localStorage.getItem(key);

			if (value) {
				return JSON.parse(value);
			} else {
				window.localStorage.setItem(key, JSON.stringify(defaultValue));
				return defaultValue;
			}
		} catch (err) {
			throw new Error(`Error while setting defaultValue to LocalStorage: ${err}`);
			return defaultValue;
		}
	});

	const setValue: SetValueT<T> = (newValue: T) => {
		try {
			window.localStorage.setItem(key, JSON.stringify(newValue));
		} catch (err) {
			throw new Error(`Error while setting value to LocalStorage: ${err}`);
		}

		setStoredValue(newValue);
	};

	return [storedValue, setValue];
}

export default useLocalStorage;
