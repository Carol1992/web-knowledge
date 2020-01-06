import React from 'react';
import {
	Route,
	Switch
} from 'react-router-dom';
import loadable from 'react-loadable'
import Loading from 'components/Loading'

const NotFound = loadable({
	loader: () =>
		import ('pages/notfound'),
	loading: Loading,
	timeout: 10000
})

const BILogin = loadable({
	loader: () =>
		import ('pages/BILogin'),
	loading: Loading,
	timeout: 10000
})

// 路由
const getRouter = () => (
	<Switch>
    <Route exact path="/" component={BILogin}/>
    <Route component={NotFound}/>
  </Switch>
);

export default getRouter;