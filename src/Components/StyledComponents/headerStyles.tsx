import styled, { css } from 'styled-components';
import { HEADTHEMECOLOR, laptop } from './constants';

export const PageHeader = styled.div`
	background: ${HEADTHEMECOLOR};
	display: flex;
	align-items: center;
	height: 3.5rem;
	.headerLogo {
		width: 20rem;
		height: 2rem;
		margin-left: 10rem;
	}
	${laptop(css`
		height: 49px;
		.headerLogo {
			width: 9rem;
			margin-left: 1.2rem;
			height: 1rem;
		}
	`)}
`;
