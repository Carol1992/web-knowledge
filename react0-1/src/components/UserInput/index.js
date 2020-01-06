import React, {
	PureComponent
} from 'react';
import PropTypes from 'prop-types';
import './index.scss'
import OneInput from 'components/OneInput'

class UserInput extends PureComponent {
	render() {
		return (
			<div styleName="user-input" style={{width: `${this.props.width}px`}}>
				<div styleName="title">{this.props.title}</div>
				<div styleName="content">
					<div styleName="input">
						<OneInput
							type={this.props.type} 
							placeholder={this.props.placeholder} 
							name={this.props.attribute} 
							value={this.props.value} 
							onChange={() => this.props.changeInput(event)}
							inputStyle={{
								fontWeight: 'lighter', 
								width: '100%', 
								border: 'none',
								textAlign: 'left'
							}}
						></OneInput>
					</div>
					{
						this.props.showEyes !== undefined && 
							<div styleName="icon" onClick={() => this.props.toggleHide(this.props.attribute)}>
								<span>
									<i className={this.props.showEyes ? "iconfont icon-db_display" : "iconfont icon-db_hide"}></i>
								</span>
							</div>
					}
				</div>
			</div>
		)
	}
}

UserInput.propTypes = {
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	title: PropTypes.string.isRequired,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	attribute: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	changeInput: PropTypes.func.isRequired,
	showEyes: PropTypes.bool,
	toggleHide: PropTypes.func.isRequired
}

UserInput.defaultProps = {
	width: 400,
	type: 'text',
	placeholder: ''
}

export default UserInput