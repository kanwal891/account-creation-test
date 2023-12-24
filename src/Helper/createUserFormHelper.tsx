import parsePhoneNumber from 'libphonenumber-js';

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
	required: 'Full Name is Required.',
	// maxLength: {
	// 	value: 100,
	// 	message: 'Too big Name!!',
	// },
	minLength: {
		value: 3,
		message: 'Name is too small to be registered',
	},
	pattern: {
		value: /^[a-zA-Z. ]{2,30}$/,
		message: 'Name must not contain Symbols',
	},
};

export const contactNumberRules = {
	required: 'Phone Number is Required',
	validate: {
		isValid: (v: any) =>
			parsePhoneNumber(v)?.isValid() || 'Contact number is not valid',
	},
};

const isLeapYear = (year: number) => {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};
export const isDateValid = (dateStr: string) => {
	// @ts-ignore

	let [year, month, date]: any = dateStr.split('/');

	// convert string to number
	date = +date;
	month = +month;
	year = +year;
	if ([year, month, date].includes(undefined)) {
		return 'Not a valid Date';
	}
	const today = new Date();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth();
	const currentDate = today.getDate();
	// Date is from future
	if (year > currentYear) {
		return 'Please choose correct year';
	} else if (year === currentYear) {
		if (month > currentMonth + 1) {
			return 'Please choose correct Month';
		} else if (month === currentMonth + 1) {
			if (date > currentDate) {
				return 'Please choose correct Date';
			}
		}
	}

	if (![1, 3, 5, 7, 8, 10, 12].includes(month)) {
		if (date > 30) {
			return 'Please choose correct Day';
		}
	}
	// validae for 29th feb
	if (!isLeapYear(+year) && +month === 2) {
		if (date > 28) {
			return 'Please choose correct Day';
		}
	}
	return true;
};
/**
 *
 * @param value "date format in YYYY/MM/DD"
 */
export const dateRules = (value: any) => ({
	validate: {
		isValidDate: () => isDateValid(value) || 'Not a valid Birthdate',
		isFutureDate: () => {
			let isValid = true;
			if (!isDateValid(value)) {
				const passedDate = new Date(value);
				isValid = !(
					passedDate.setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0)
				);
			}
			return isValid || 'Please Select a Past Date';
		},
	},
});

export const emailRules = {
	validate: {
		isValidEmail: (v: string) =>
			/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
			'Sorry, this email address is not valid. Please try again',
	},
};

export const passwordRules = {
	minLength: {
		value: 8,
		message: 'Password must contain 8 characters',
	},
	required: 'Password is required',
	pattern: {
		value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
		message:
			'Password should contain atleast 1 small letter, 1 captial letter and a digit',
	},
};
