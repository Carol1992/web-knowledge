import React, { Component } from 'react'
import './index.scss'
import PropTypes from 'prop-types';

class CheckBox extends Component {
	render() {
		return (
			<div styleName="check-box" onClick={() => this.props.check_box()}>
				<i className={this.props.checked ? "iconfont icon-db_check" : "iconfont"}></i>
			</div>
		)
	}
}

CheckBox.propTypes = {
	check_box: PropTypes.func,
	checked: PropTypes.bool
}

CheckBox.defaultProps = {
	checked: false
}

export default CheckBox