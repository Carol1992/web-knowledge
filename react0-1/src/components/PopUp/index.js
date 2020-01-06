import React, {Component} from 'react'
import './index.scss'
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

class PopUp extends Component {
	render() {
		return (
			<div styleName="pop-up">
				<div styleName="triangle">
				<span styleName="dc-icon">
					<i className="iconfont icon-db_triangle"></i>
				</span>
				</div>
				<div styleName="content">
					<div styleName="change-pwd" onClick={this.props.changePassword}>
						<span><FormattedMessage id='modify_password'/></span>
					</div>
					<div styleName="log-out" onClick={this.props.logout}>
						<span><FormattedMessage id='withdraw'/></span>
					</div>
				</div>
			</div>
		)
	}
}
PopUp.propTypes = {
	changePassword: PropTypes.func,
	logout: PropTypes.func
}

export default injectIntl(PopUp)