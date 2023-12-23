import { TextField } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import styled, { css } from 'styled-components';
import { mobile, tablet } from './constants';

export const FormWrapper = styled.form`
	border-radius: 0.5rem;
	box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.08);
	padding: 25px 40px;
	${mobile(css`
		padding: 15px 10px;
		box-shadow: none;
	`)}
	.birthDateWidth {
    ${tablet(css`
     width: 80px;
    `)}
		width: 124px;
	}
`;
export const Heading = styled.div`
	font-weight: 700;
	font-size: 1.25rem;
	margin-top: 2.5rem;
	margin-bottom: 1.5rem;
	color: var(--Text, #2c3642);
`;

export const FormLabel = styled.div`
	color: #333;
	font-size: 1rem;
	font-weight: 700;
	line-height: 1.5rem;
	margin-bottom: 16px;
	margin-top: 16px;
`;

export const PlaceholderSpan = styled.span`
	color: #4d5c6f;
	font-size: 18px;
	letter-spacing: 0.36px;
	font-weight: 400;
`;
export const CreateUserTextField = styled(TextField)`
	width: 27rem;
	height: 50px;
	${tablet(css`
		width: 18rem;
	`)}
`;
export const CusomTelField = styled(MuiTelInput)`
	width: 27rem;
	height: 50px;
	${tablet(css`
		width: 18rem;
	`)}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 2rem;
	margin-bottom: 2rem;
	column-gap: 2rem;
	${mobile(css`
		flex-direction: column;
		row-gap: 1rem;
    padding: 10px;
	`)}
`;
