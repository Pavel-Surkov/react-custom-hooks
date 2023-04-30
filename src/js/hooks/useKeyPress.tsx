import { useState } from 'react';
import { useEventListener } from 'usehooks-ts';

const useKeyPress = (targetKey: string): boolean => {
	const [pressed, setPressed] = useState<boolean>(false);

	const downHandler = ({ key }: KeyboardEvent) => {
		if (key === targetKey) {
			setPressed(true);
		}
	};

	const upHandler = ({ key }: KeyboardEvent) => {
		if (key === targetKey) {
			setPressed(false);
		}
	};

	useEventListener('keydown', downHandler);
	useEventListener('keyup', upHandler);

	return pressed;
};

export default useKeyPress;
