import React, {Fragment} from 'react';
import routes from '../../data/ExternalRoutes.json';
import {Link} from "react-router-dom";

function ExternalNavs() {
	return (
		<Fragment>
			{
				routes.map(route =>
					<li key={route.route}>
						<Link to={route.route} target={"_blank"} rel="noopener noreferrer">
							{route.text}
						</Link>
					</li>
				)
			}
		</Fragment>
	);
}

export default ExternalNavs;