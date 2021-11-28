import React from 'react'
import styles from '../styles/Home.module.css'
import {lines} from '../data/Home.js'
import Typist from 'react-typist'
import MetaDecorator from '../components/MetaDecorator'

function Home() {
	const heroLine = lines[Math.floor(Math.random() * lines.length)]

	return (
		<div className={styles.main}>
			<MetaDecorator
				title={'Home'}
				description={
					'PSN Hack Club is a club under the global Hack Club network at Pathways School Noida. Open the website to learn more'
				}
			/>

			<h1 className={'header'}>PSN Hack Club</h1>
			<h3 className={`subheader text-center`}>
				<Typist
					avgTypingDelay={50}
					stdTypingDelay={20}
					cursor={{
						show: true,
						blink: true,
						element: '|',
						hideWhenDone: true,
						hideWhenDoneDelay: 500,
					}}
				>
					{heroLine}
				</Typist>
			</h3>
		</div>
	)
}

export default Home
