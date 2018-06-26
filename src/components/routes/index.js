import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Register from "../views/pages/register";
import Home from "../views/pages/Home";

export default () => (
	<Router>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/Register" exact component={Register} />
		</Switch>
	</Router>
);
