import React, { Component, Fragment, PureComponent } from 'react'
import './index.scss'
import PropTypes from 'prop-types';

class OneInput extends Component {
	render() {
		return (
			<input 
				styleName='one-input'
				type={this.props.type}
				value={this.props.value || ''}
				disabled={this.props.disabled}
				onChange={this.props.onChange}
				style={this.props.inputStyle}
				ref={input => input && this.props.isFocused && input.focus()}
				placeholder={this.props.placeholder}
				name={this.props.name}
				onFocus={this.props.onFocus}
			/> 
		)
	}
}

OneInput.propTypes = {
	type: PropTypes.string,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
	inputStyle: PropTypes.object,
	isFocused: PropTypes.bool,
	placeholder: PropTypes.string,
	name: PropTypes.string,
	onFocus: PropTypes.func,
	value: PropTypes.string,
}

OneInput.defaultProps = {
	type: 'text',
	disabled: false,
	inputStyle: {},
	isFocused: false,
	placeholder: '',
	name: '',
	value: '',
	onFocus: () => {},
}

export default OneInput