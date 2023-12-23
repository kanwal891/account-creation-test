import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from 'react-router-dom';
import Login from './Pages/Login';
import Root from './Pages';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
		],
	},
]);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
