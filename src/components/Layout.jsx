import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./Navbar";

function Layout(props) {
	return (
		<BrowserRouter>
			<Navbar/>
			{props.children}
		</BrowserRouter>
	);
}

export default Layout;