import React, { useRef } from 'react';
import useHover from '../hooks/useHover';

const Hover: React.FC = () => {
	const hoverRef = useRef<HTMLParagraphElement>(null);

	const isHovered = useHover(hoverRef);

	return (
		<div className="hover-page">
			<p className={`hover-item${isHovered ? ' hovered' : ''}`} ref={hoverRef}>
				Hover me
			</p>
		</div>
	);
};

export default Hover;
