import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import parsePhoneNumber from 'libphonenumber-js';
import { useState } from 'react';
import { CancelButton, SubmitButton } from './StyledComponents/common';
import {
	CreateUserTextField,
	CusomTelField,
	FormLabel,
	FormWrapper,
	PlaceholderSpan,
} from './StyledComponents/createAccountStyles';

export const CreateUserform = () => {
	const [value, setValue] = useState('');

	const handleChange = (value: string) => {
		console.log('value is', value, parsePhoneNumber(value)?.isValid());
		setValue(value);
	};
	return (
		<>
			<FormWrapper>
				<FormLabel>Full Name</FormLabel>
				<CreateUserTextField
					label={
						<PlaceholderSpan>
							Full Name<sup style={{ color: 'red' }}>*</sup>
						</PlaceholderSpan>
					}
				/>

				<FormLabel>Contact Number</FormLabel>
				<CusomTelField
					defaultCountry="CA"
					onlyCountries={['CA']}
					value={value}
					onChange={handleChange}
					label={
						<PlaceholderSpan>
							Contact number<sup style={{ color: 'red' }}>*</sup>
						</PlaceholderSpan>
					}
				/>

				<FormLabel>Birth Date</FormLabel>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						maxWidth: '27rem',
					}}
				>
					<FormControl sx={{ minWidth: 124 }}>
						<InputLabel>
							{
								<PlaceholderSpan>
									Day<sup style={{ color: 'red' }}>*</sup>
								</PlaceholderSpan>
							}
						</InputLabel>
						<Select label="Day">
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>

					<FormControl sx={{ minWidth: 124 }}>
						<InputLabel>
							{
								<PlaceholderSpan>
									Month<sup style={{ color: 'red' }}>*</sup>
								</PlaceholderSpan>
							}
						</InputLabel>
						<Select label="Month">
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>

					<FormControl sx={{ minWidth: 124 }}>
						<InputLabel>
							{
								<PlaceholderSpan>
									Year<sup style={{ color: 'red' }}>*</sup>
								</PlaceholderSpan>
							}
						</InputLabel>
						<Select label="Year">
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</div>
				<FormLabel>Email Adress</FormLabel>
				<CreateUserTextField
					type="email"
					label={
						<PlaceholderSpan>
							Email Address<sup style={{ color: 'red' }}>*</sup>
						</PlaceholderSpan>
					}
				/>

				<FormLabel>Password</FormLabel>
				<CreateUserTextField
					type="password"
					label={
						<PlaceholderSpan>
							Password<sup style={{ color: 'red' }}>*</sup>
						</PlaceholderSpan>
					}
				/>

				<FormLabel>Confirm Password</FormLabel>
				<CreateUserTextField
					type="password"
					label={
						<PlaceholderSpan>
							Confirm Password<sup style={{ color: 'red' }}>*</sup>
						</PlaceholderSpan>
					}
				/>
			</FormWrapper>
			<div
				style={{
					display: 'flex',
					justifyContent: 'flex-end',
					marginTop: '2rem',
					marginBottom: '2rem',
					columnGap: '2rem',
				}}
			>
				<CancelButton>Cancel</CancelButton>
				<SubmitButton>Submit</SubmitButton>
			</div>
		</>
	);
};
export default CreateUserform;
