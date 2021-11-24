import {Fragment} from "react";
import {Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout";
import './stylesheets/Common.scss';
import NotFound from "./pages/NotFound";
import {homeRoutes} from "./data/Routes";

function App() {
	return (
		<Layout>
			<Switch>
        <Fragment>
          {
            homeRoutes.map(route =>
              <Route exact key={route.route} path={route.route} component={route.component}/>
            )
          }
        </Fragment>
				<Route component={NotFound}/>
			</Switch>
		</Layout>
	);
}

export default App;
