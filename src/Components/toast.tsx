import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React, { useState } from 'react';
import { SIZES } from './StyledComponents/constants';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const getAnchorOrigin = (): {
	vertical: 'bottom' | 'top';
	horizontal: 'left' | 'center' | 'right';
} => {
	if (window.innerWidth > +SIZES.MOBILE.split('px')[0]) {
		return {
			vertical: 'top',
			horizontal: 'right',
		};
	}
	return {
		vertical: 'bottom',
		horizontal: 'center',
	};
};

const Toast = ({
	severity,
	message,
	reset,
}: {
	severity: 'error' | 'info' | 'success' | 'warning';
	message: string;
	reset?: Function;
}) => {
	const [open, setOpen] = useState(true);

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
		reset?.();
	};
	console.log('open', open);
	return (
		<Snackbar
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
			anchorOrigin={getAnchorOrigin()}
		>
			<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	);
};
export default Toast;
