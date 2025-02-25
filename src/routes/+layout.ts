import { inject } from '@vercel/analytics';

inject();

export const load = () => {
	return {};
};

export const prerender = true;
