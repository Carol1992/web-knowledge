import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
	HashRouter as Router
} from 'react-router-dom';
import getRouter from 'router';
import {
	Provider
} from 'react-redux'
import store from './redux/store'
import '../mock/mock.js';
import './intls'
import { IntlProvider } from 'react-intl'; /* react-intl imports */
import lang_cn from './intls/locale/cn.js'
import lang_en from './intls/locale/en.js'
import './styles/iconfont.css'
import './styles/iconfont.js'
import './index.css'
import DcHeader from 'components/DcHeader'
import { createBrowserHistory } from 'history';

// 判断该浏览器支不支持 serviceWorker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('service-worker registed')
      })
      .catch(error => {
        console.log('service-worker registed error')
      })
  })
}

const history = createBrowserHistory();
if(!localStorage.localLang) {
	let browser_lang = (navigator.language || navigator.userLanguage).substr(0,2);

	localStorage.localLang = browser_lang === 'zh' ? 'zh' : 'en'
}

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			locale: localStorage.localLang,
			messages: {
				'en': lang_en,
				'zh': lang_cn
			},
			headerColor: '#fff'
		}
	}

	componentDidMount() {
		// Get the current location.
		//const pathname = history.location.pathname
		this.setState({
			headerColor: location.hash === "#/platform" ? '#fff' : '#424242'
		})

		// Listen for changes to the current location.
		const unlisten = history.listen((location, action) => {
		  // location is an object like window.location
		  this.setState({
				headerColor: location.hash === "#/platform" ? '#fff' : '#424242'
			})

			// 未登录跳转到登录页
			const userInfo = store.getState().userInfo.userInfo
			if(Object.keys(userInfo).length === 0) {
				window.location.hash = '#/'
			}
		});
	}

	changeLang(lang) {
		this.setState({
			locale: lang
		})
		localStorage.localLang = lang
	}

	render() {
		return (
			<IntlProvider 
				locale={this.state.locale} 
				key={this.state.locale} 
				messages={{...lang_cn, ...this.state.messages[this.state.locale]}}
				>
				<Provider store={store}>
					<DcHeader 
						changeLang={(lang) => this.changeLang(lang)}
						currentLang={this.state.locale}
						color={this.state.headerColor}
					></DcHeader>
			    <Router history={history}>
			        {getRouter()}
			    </Router>
			  </Provider>
			</IntlProvider>
		)
	}
}

ReactDom.render(
	<App />,
	document.getElementById('app')
)