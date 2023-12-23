import { css } from 'styled-components';

export const HEAD_THEME_COLOR = '#252F3D';
export const BUTTON_THEME_COLOR = '#4790A1';
export const SIZES = {
	SMALL_MOBILE: '320px',
	MOBILE: '576px',
	TABLET: '768px',
	LAPTOP: '1024px',
	DESKTOP: '2560px',
};
export const smallMobile = (inner: any) => css`
	@media (max-width: ${SIZES.SMALL_MOBILE}) {
		${inner};
	}
`;
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
