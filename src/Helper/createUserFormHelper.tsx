import parsePhoneNumber from 'libphonenumber-js';
import { UserData } from '../Interfaces/CreateUserInterface';
import requestApi from '../Services/requestHandler';
import isDate from 'validator/lib/isDate';
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
import Toast from '../Components/toast';
export const getMonths = (): {
	label: string;
	value: number;
}[] => {
	return [
		'January',
		'Feburary',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	].map((month, index) => {
		return {
			label: month,
			value: index + 1,
		};
	});
};

export const getPreviousYearsList = (
	count: number
): {
	label?: string;
	value?: number;
}[] => {
	const currentYear = new Date().getFullYear();
	const years = [{}];
	for (let currentCount = 0; currentCount < count; currentCount++) {
		years.push({
			label: currentYear - currentCount,
			value: currentYear - currentCount,
		});
	}
	return years;
};

export const fullNameRules = {
	required: 'Full name is mandatory.',
	pattern: {
		value: /^[a-zA-Z ]{2,30}$/,
		message: 'Name must not contain symbols.',
	},
};

export const contactNumberRules = {
	required: 'Contact number is mandatory',
	validate: {
		isValid: (v: any) =>
			parsePhoneNumber(v)?.isValid() || 'Contact number is not valid',
	},
};

const isLeapYear = (year: number) => {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};
export const isValidDOB = (dateStr: string) => {
	if (!isDate(dateStr)) {
		return 'Please enter a valid date';
	}
	let today: any = new Date();
	today.setHours(0, 0, 0, 0);
	if (new Date(dateStr) > today) {
		return 'Please ener a valid date';
	}
	return true;
};
/**
 *
 * @param value "date format in YYYY/MM/DD"
 */
export const dateRules = (value: any) => ({
	validate: {
		isValidDate: () => isValidDOB(value) || 'Not a valid birthdate',
	},
});

export const emailRules = {
	required: 'Email is mandatory.',
	validate: {
		isValidEmail: (v: string) =>
			isEmail(v) || 'Sorry, this email address is not valid. Please try again',
	},
};

export const passwordRules = {
	minLength: {
		value: 8,
		message: 'Password must contain atleast 8 characters',
	},
	required: 'Password is mandatory',
	validate: {
		isStrong: (v: string) =>
			isStrongPassword(v, {
				minLength: 8,
				minLowercase: 1,
				minUppercase: 1,
				minNumbers: 1,
				minSymbols: 0,
			}) ||
			'Password must contain 1 lowercase character 1 uppercase character and 1 digit',
	},
};

export const handlerCreateUser = (data: UserData) => {
	return requestApi('/users/create', 'POST', data);
};
