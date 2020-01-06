import React, {Component} from 'react'
import './index.scss'
import PropTypes from 'prop-types';
import OneInput from 'components/OneInput'
import { injectIntl, FormattedMessage } from 'react-intl';

class ResetPassword extends Component {
	render() {
		const list = this.props.contentList.map((l, i) => {
			return (
				<div styleName="pwd" key={i}>
					<span>{l.title}</span>
					<div>
						<OneInput
							type={l.type} placeholder={l.placeholder} name={l.attribute}
							inputStyle={{width: '190px', height: '40px', border: 'none', paddingLeft: '5px', fontSize: '14px'}}
							value={l.value}
							onChange={() => this.props.changeValue(event, l.attribute)}
						></OneInput>
						<span onClick={() => this.props.toggleHide(l.attribute)}>
							<i className={l.showEyes ? "iconfont icon-db_display" : "iconfont icon-db_hide"}></i>
						</span>
					</div>
				</div>
			)
		})
		return (
			<div styleName="ResetPassword">
				<div styleName="title">
					<span><FormattedMessage id='change_personal_password'/></span>
				</div>
				{list}
				<div styleName="error-msg" >
					<span 
						style={{visibility: this.props.error_show ? 'visible' : 'hidden'}}
					>
						{this.props.error_msg}
					</span>
				</div>
				<div styleName="btns">
					<div styleName="confirmed" onClick={this.props.resetPwd}>
						<span><FormattedMessage id='confirmed'/></span>
					</div>
					<div styleName="cancel" onClick={this.props.hideDialog}>
						<span><FormattedMessage id='cancel'/></span>
					</div>
				</div>
			</div>
		)
	}
}

ResetPassword.propTypes = {
	hideDialog: PropTypes.func,
	resetPwd: PropTypes.func,
	toggleHide: PropTypes.func,
	contentList: PropTypes.array,
	error_msg: PropTypes.string,
	error_show: PropTypes.bool
}

export default injectIntl(ResetPassword)