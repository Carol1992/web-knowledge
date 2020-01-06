import React, {
	Component, Fragment
} from 'react';
import './recaptcha.js'

class Recaptcha extends Component {
	render() {
		return (
			<div className="g-recaptcha" data-sitekey=""></div>
		)
	}
}

export default Recaptcha