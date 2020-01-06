import React, {Component, Fragement} from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import { injectIntl, FormattedMessage } from 'react-intl';

class SmallTips extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div styleName="small-tips">
				<div styleName="info">{this.props.errorInfo}</div>
				<div styleName="noticed" onClick={() => this.props.closeBox()}>
					<FormattedMessage id='noticed'/>
				</div>
			</div>
		)
	}
}

SmallTips.propTypes = {
	errorInfo: PropTypes.string,
	closeBox: PropTypes.func
}

export default injectIntl(SmallTips)
