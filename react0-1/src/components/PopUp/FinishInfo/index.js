import React, {Component, Fragement} from 'react'
import PropTypes from 'prop-types'
import './index.scss'
import { injectIntl, FormattedMessage } from 'react-intl';

class FinishInfo extends Component {
	render() {
		return (
			<div styleName="finish-info">
				<div styleName="title"><FormattedMessage id='finish_added'/></div>
				<div styleName="buttons">
					<div styleName="btn active" onClick={() => this.props.operateFunc_1()}><FormattedMessage id='add_more'/></div>
					<div styleName="btn" onClick={() => this.props.operateFunc_2()}><FormattedMessage id='back_to_list'/></div>
				</div>
			</div>
		)
	}
}

FinishInfo.propTypes = {
	operateFunc_1: PropTypes.func,
	operateFunc_2: PropTypes.func
}

export default injectIntl(FinishInfo)
