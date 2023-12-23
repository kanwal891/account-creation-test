import { TextField } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import styled, { css } from 'styled-components';

export const FormWrapper = styled.form`
	border-radius: 0.5rem;
	box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.08);
	padding: 25px 40px;
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
`;
export const CusomTelField = styled(MuiTelInput)`
	width: 27rem;
	height: 50px;
`;
