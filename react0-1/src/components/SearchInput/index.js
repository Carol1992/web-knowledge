import React, { Component, Fragment, PureComponent } from 'react'
import './index.scss'
import { injectIntl, FormattedMessage } from 'react-intl';
import { get, post, postForm } from '../../api/server'
import PropTypes from 'prop-types';
import OneInput from 'components/OneInput'

class SearchInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			
		}
		this.timer = null
	}

	changeKeyWord(e) {
		this.props.changeKeyWord(e.target.value)
	}
 
	render() {
		return (
			<div styleName="search-input">
				<i className="iconfont icon-db_magify"></i>
				<OneInput
					type="text" 
					onChange={() => this.changeKeyWord(event)} 
					value={this.props.value}
					inputStyle={{
						width: 'calc(100% - 30px)',
						paddingLeft: '10px',
						fontSize: '14px',
						color: '#424242',
						border: 'none'
					}}
					placeholder={this.props.placeholder}
				></OneInput>
			</div>
		)
	}
}

SearchInput.propTypes = {
	changeKeyWord: PropTypes.func,
	value: PropTypes.string,
	placeholder: PropTypes.string
}

SearchInput.defaultProps = {
	
}

export default SearchInput