import {  Outlet } from 'react-router';
import {useNavigate} from 'react-router-dom'
import Header from '../Components/Header';
import Avatar from '@mui/material/Avatar';
import { useLocation } from 'react-router';
import { SubmitButton } from '../Components/StyledComponents/shared';
import { Link } from 'react-router-dom';

const Root = () => {
	const { pathname } = useLocation();
	const navigate  = useNavigate();
	return (
		<>
			<Header />
			{pathname === '/' ? (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100vw',
						height: '100vh',
					}}
				>
					<SubmitButton
						onClick={() => navigate('/create-account')}
						style={{
							display: 'flex',
							columnGap: '5px',
							alignItems: 'center',
							textDecoration: 'none !important',
						}}
					>
						<Avatar src="/broken-image.jpg" /> Create User
					</SubmitButton>
				</div>
			) : null}
			<Outlet />
		</>
	);
};
export default Root;
