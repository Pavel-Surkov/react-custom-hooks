import React, { useState, useEffect } from 'react';

// type StatusT = 'loading' | 'idle' | 'ready' | 'error';
type StatusT = string;

const useScript = (src: string): StatusT => {
	const [status, setStatus] = useState<StatusT>(src ? 'loading' : 'idle');

	useEffect(() => {
		if (!src) {
			setStatus('idle');
			return;
		}

		let script: HTMLScriptElement | null = document.querySelector(`script[src="${src}"]`);

		if (!script) {
			script = document.createElement('script');
			script.src = src;
			script.async = true;
			script.setAttribute('data-status', 'loading');
			document.body.appendChild(script);

			const setDataStatus = (evt: Event): void => {
				script?.setAttribute('data-status', evt.type === 'load' ? 'ready' : 'error');
			};

			script.addEventListener('load', setDataStatus);
			script.addEventListener('error', setDataStatus);
		} else {
			setStatus((prev) => {
				if (script) {
					const status = script.getAttribute('data-status');

					if (status) {
						return status;
					}
				}

				return prev;
			});
		}

		const setStateStatus = (evt: Event): void => {
			setStatus(evt.type === 'load' ? 'ready' : 'error');
		};

		script.addEventListener('load', setStateStatus);
		script.addEventListener('error', setStateStatus);

		return () => {
			if (script) {
				script.removeEventListener('load', setStateStatus);
				script.removeEventListener('error', setStateStatus);
			}
		};
	}, [src]);

	return status;
};

export default useScript;
