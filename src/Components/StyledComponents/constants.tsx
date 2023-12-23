import { css } from 'styled-components';

export const headThemeColor = '#252F3D';
export const sizes = {
	mobile: '320px',
	tablet: '768px',
	laptop: '1024px',
	desktop: '2560px',
};
export const mobile = (inner: any) => css`
	@media (max-width: ${sizes.mobile}) {
		${inner};
	}
`;
export const tablet = (inner: any) => css`
	@media (max-width: ${sizes.tablet}) {
		${inner};
	}
`;
export const desktop = (inner: any) => css`
	@media (max-width: ${sizes.desktop}) {
		${inner};
	}
`;
export const laptop = (inner: any) => css`
	@media (max-width: ${sizes.laptop}) {
		${inner};
	}
`;
