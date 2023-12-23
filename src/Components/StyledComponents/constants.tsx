import { css } from 'styled-components';

export const HEADTHEMECOLOR = '#252F3D';
export const SIZES = {
	MOBILE: '320px',
	TABLET: '768px',
	LAPTOP: '1024px',
	DESKTOP: '2560px',
};
export const mobile = (inner: any) => css`
	@media (max-width: ${SIZES.MOBILE}) {
		${inner};
	}
`;
export const tablet = (inner: any) => css`
	@media (max-width: ${SIZES.TABLET}) {
		${inner};
	}
`;
export const desktop = (inner: any) => css`
	@media (max-width: ${SIZES.DESKTOP}) {
		${inner};
	}
`;
export const laptop = (inner: any) => css`
	@media (max-width: ${SIZES.LAPTOP}) {
		${inner};
	}
`;
