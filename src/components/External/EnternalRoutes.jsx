import React, {Fragment} from 'react';
import routes from '../../data/ExternalRoutes.json';
import {Route} from "react-router-dom";

function ExternalRoutes() {
	return (
		<Fragment>
			{
				routes.map(route =>
					<Route key={route.route} exact path={route.route} component={() => window.location = route.link}/>
				)
			}
		</Fragment>
	);
}

export default ExternalRoutes;