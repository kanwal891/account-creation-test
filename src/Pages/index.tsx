import { Outlet } from 'react-router';
import Header from '../Components/Header';

const Root = () => {
	return (
		<>
			<Header />
			<br />
			<Outlet />
		</>
	);
};
export default Root;
