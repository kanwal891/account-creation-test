import { Outlet } from 'react-router';
import Header from '../Components/Header';

const Root = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
export default Root;
