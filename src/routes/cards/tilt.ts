import type { Action } from 'svelte/types/runtime/action';

const getSettings = (settings = {}) => ({
	scale: 1,
	max: 15,
	reverse: false,
	...settings
});

const TRANSITION_MS = 300;

export const tilt: Action<HTMLElement, [Record<string, unknown>, Record<string, unknown>]> = (
	node,
	[customSettings, options]: [Record<string, unknown>, Record<string, unknown>] = [{}, {}]
) => {
	// const { width, height, left, top } = node.getBoundingClientRect();
	let width: number, height: number, left: number, top: number;
	const { useShadow } = options;
	const settings = getSettings(customSettings);
	const reverse = settings.reverse ? -1 : 1;

	const handleMouseMove = (event: MouseEvent) => {
		const percentX = (event.x - left) / width;
		const percentY = (event.y - top) / height;

		const { max, scale } = settings;
		const twiceMax = max * 2;

		const tiltX = max - percentX * twiceMax;
		const tiltY = percentY * twiceMax - max;

		node.style.transform = `perspective(1000px) rotateX(${reverse * tiltY}deg) rotateY(${
			reverse * tiltX
		}deg) scale3d(${Array(3).fill(scale).join(', ')})`;
		node.style.boxShadow = useShadow ? '0px 0px 60px -10px rgba(0,0,0,0.75)' : '';
		node.style.zIndex = '200';
	};

	let transitionId: NodeJS.Timeout;
	const smoothTransition = () => {
		clearTimeout(transitionId);
		node.style.willChange = 'transform, box-shadow';
		node.style.transition = `${TRANSITION_MS}ms`;
		transitionId = setTimeout(() => (node.style.transition = '0s'), TRANSITION_MS);
	};

	const handleMouseEnter = () => {
		({ width, height, left, top } = node.getBoundingClientRect());
		smoothTransition();
		node.style.willChange = 'transform, box-shadow';
	};

	const handleMouseLeave = () => {
		smoothTransition();
		node.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
		node.style.boxShadow = '';
		node.style.zIndex = '0';
	};

	node.addEventListener('mousemove', handleMouseMove);
	node.addEventListener('mouseenter', handleMouseEnter);
	node.addEventListener('mouseleave', handleMouseLeave);

	return {
		destroy() {
			node.removeEventListener('mousemove', handleMouseMove);
			node.removeEventListener('mouseenter', handleMouseEnter);
			node.removeEventListener('mouseleave', handleMouseLeave);
		}
	};
};
