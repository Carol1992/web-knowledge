import React, {
	PureComponent
} from 'react';
import PropTypes from 'prop-types';
import style from './index.scss'

class DcButton extends PureComponent {
	render() {
		return (
			<div styleName="dc-button" style={this.props.btnStyle} onClick={() => this.props.confirmed()}>
				<span style={{lineHeight: this.props.btnStyle.height}}>{this.props.btnName}</span>
			</div>
		)
	}
}

DcButton.propTypes = {
	btnName: PropTypes.string.isRequired,
	confirmed: PropTypes.func,
	btnStyle: PropTypes.object
}

DcButton.defaultProps = {
	btnStyle: {
		height: '40px'
	}
}

export default DcButton