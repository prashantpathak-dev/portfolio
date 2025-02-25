import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

inject();
injectSpeedInsights();

export const load = () => {
	return {};
};

export const prerender = true;
