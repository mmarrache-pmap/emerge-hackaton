import React from 'react';
import { Router, Route } from 'react-router';
import { history } from './redux/store';

// Pages.
import DonorPage from './pages/donor';
import DetailPage from './pages/detail';
import ConfirmationPage from './pages/confirmation';
import AboutPage from './pages/about';
import PageNotFound from './pages/404';

let onUpdate = () => { window.scrollTo(0, 0); };

// Routes template.
export default (
	<Router history={history}>
		<Route path="/" component={DonorPage} onUpdate={onUpdate} />
		<Route path="/donor" component={DonorPage} onUpdate={onUpdate} />
		<Route path="/detail/:id" component={DetailPage} onUpdate={onUpdate} />
		<Route path="/detail/:id/:view" component={DetailPage} onUpdate={onUpdate} />
		<Route path="/confirmation/:id" component={ConfirmationPage} onUpdate={onUpdate} />
		<Route path="/about" component={AboutPage} onUpdate={onUpdate} />
		<Route path="/404" component={PageNotFound} title="Page Not Found" onUpdate={onUpdate} />
	</Router>
);
