import React from 'react';
import { Router, Route } from 'react-router';
import { history } from './redux/store';

// Pages.
import Iframe from './pages/donor';
import PageNotFound from './pages/404';

let onUpdate = () => { window.scrollTo(0, 0); };

// Routes template.
export default (
	<Router history={history}>
		<Route path="/" component={Iframe} onUpdate={onUpdate} />
		<Route path="/donor" component={Iframe} onUpdate={onUpdate} />
		<Route path="/404" component={PageNotFound} title="Page Not Found" onUpdate={onUpdate} />
	</Router>
);
