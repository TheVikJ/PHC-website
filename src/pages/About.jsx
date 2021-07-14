import React from 'react';
import styles from '../stylesheets/About.module.css';

function About(props) {
	return (
		<div className={`container ${styles.container}`}>
			<img alt={"Logo"} src={"https://cdn.discordapp.com/attachments/748589909987557506/849541509887950848/psn.png"} className={styles.logo}/>
			<h1 className={"header text-center"}>
				About us
			</h1>
			<p className={styles.heading}>
				This is a heading
			</p>
			<p className={styles.subheading}>
				This is a subheading
			</p>
			<p className={styles.text}>
				And this, is just a lot of text.
			</p>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed vehicula sapien. Donec bibendum ullamcorper
				risus, et tincidunt arcu pulvinar et. Maecenas quis massa ac sem porta iaculis. Praesent a bibendum elit. Morbi
				nulla nibh, vestibulum sed nisl et, faucibus aliquam sem. Maecenas luctus tellus ac condimentum auctor. In diam
				nisi, elementum vitae porta et, venenatis at ante. Donec ullamcorper eros et felis pellentesque iaculis. Sed
				nisi justo, scelerisque vitae fermentum quis, gravida ut lacus. Nulla facilisi. Sed laoreet pulvinar vestibulum.
				Praesent non nisl quis elit molestie interdum. In viverra pretium ligula vel sodales. Duis dictum ex mi,
				pellentesque lobortis libero fringilla sed.
			</p>
		</div>
	);
}

export default About;