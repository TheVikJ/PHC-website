import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./Navbar";
import styles from '../stylesheets/App.module.css';

function Layout(props) {
	return (
		<BrowserRouter>
			<Navbar/>
			<div className={styles.container}>
				{props.children}
			</div>
		</BrowserRouter>
	);
}

export default Layout;