import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './index.scss'
import {
    connect
} from 'react-redux';
import {
    getUserInfo,
    clearUserInfo
} from "actions/userInfo";
import PopUp from 'components/PopUp'
import { post } from '../../api/server'
import ResetPassword from 'components/ResetPassword'
import serverError from '../../error/serverError.js'
import { injectIntl } from 'react-intl';

class DcHeader extends Component {
	constructor(props) {
		super(props)

		this.intl = this.props.intl

		this.state = {
			show_popup: false,
			show_changepwd: false,
			contentList: [
				{title: this.intl.formatMessage({id: 'original_password'}), placeholder: this.intl.formatMessage({id: 'password_info'}), attribute: 'old_password', value: '', showEyes: false, type: 'password'},
				{title: this.intl.formatMessage({id: 'new_password'}), placeholder: this.intl.formatMessage({id: 'password_info'}), attribute: 'new_password', value: '', showEyes: false, type: 'password'},
				{title: this.intl.formatMessage({id: 'retype_password'}), placeholder: this.intl.formatMessage({id: 'password_info'}), attribute: 're_password', value: '', showEyes: false, type: 'password'}
			],
			error_msg: this.intl.formatMessage({id: 'error_msg'}),
			error_show: false
		}

		this.myRef = React.createRef();

		this.showPopUp = this.showPopUp.bind(this)
		this.changePassword = this.changePassword.bind(this)
		this.logout = this.logout.bind(this)
		this.hideDialog = this.hideDialog.bind(this)
		this.resetPwd = this.resetPwd.bind(this)
		this.toggleHide = this.toggleHide.bind(this)
		this.changeValue = this.changeValue.bind(this)
	}

	componentDidMount() {
		if(Object.keys(this.props.userInfo).length === 0) {
			this.props.getUserInfo()
		}
	}

	showError(data) {
		let bool = data.code !== 0
		
		this.setState({
			error_show: bool
		})
		
		let msg = serverError.filter(s => s.msg_code == data.code)[0]
		if(msg) {
			this.setState({
				error_msg: this.state.language === 'zh' ? msg.msg_cn :  msg.msg_en
			})
		}

		return bool;
	}

	toggleHide(attribute) {
		let contentList = [...this.state.contentList]
		let val = contentList.filter(c => c.attribute === attribute)[0]
		if(val) {
			val.showEyes = !val.showEyes
			val.type = val.showEyes ? 'text' : 'password'

			this.setState({
				contentList: contentList
			})
		}
	}

	showPopUp() {
		this.setState({
			show_popup: !this.state.show_popup
		})
	}

	changePassword() {
		this.setState({
			show_changepwd: true,
			show_popup: false
		}, () => {
			document.body.style.pointerEvents = 'none'
			this.myRef.current.style.pointerEvents = 'auto'
		})
	}

	logout() {
		post('logout', {}).then(res => {
			this.setState({
				show_popup: false
			})
			localStorage.removeItem('dc_xsrf')
			this.props.clearUserInfo()
			window.location.hash = '#/'
		})
	}

	changeValue(event, attr) {
		let list = [...this.state.contentList]
		let temp = list.filter(l => l.attribute === attr)[0]
		temp && (temp.value = event.target.value)
		 this.setState({
		 	contentList: list
		 })
	}

	hideDialog() {
		this.setState({
			show_changepwd: false
		}, () => {
			document.body.style.pointerEvents = 'auto'
		})
	}

	resetPwd() {
		let form_data = new FormData(document.getElementById('myForm'))
		let values = {}
		for (let pair of form_data.entries()) {
		  values[pair[0]] = pair[1]
		}
		post('updatePwd', values).then((res) => {
			if(this.showError(res)) return
			this.hideDialog()
		})
	}

	render() {
		return (
			<div styleName="dc-header" 
				style={{color: this.props.color}}>
				<div styleName="logo">
					<span styleName="line"></span>
					<span></span>
				</div>
				<div styleName="lang">
					<span 
						styleName={this.props.currentLang === 'zh' ? 
							"name-selected" : "name"}
						onClick={() => this.props.changeLang("zh")}>中</span>
					<span 
						styleName="line"
						style={{backgroundColor: this.props.color}}
					></span>
					<span 
						styleName={this.props.currentLang === 'en' ? 
							"name-selected" : "name"}
						onClick={() => this.props.changeLang("en")}>EN</span>
				</div>
				<div styleName="user" >
					{
						(Object.keys(this.props.userInfo).length > 0) && 
							<div
								onClick={this.showPopUp}
								style={{cursor: this.showPopUp ? 'pointer' : 'auto'}}
							>
								<span styleName="dc-icon"><i className="iconfont icon-db_user"></i></span>
								<span styleName="name">{this.props.userInfo.user_name}</span>
							</div>
					}
					{
						this.state.show_popup && 
							<div styleName="PopUp">
								<PopUp 
									changePassword={this.changePassword}
									logout={this.logout}
								>
								</PopUp>
							</div>
					}
				</div>
				{
					this.state.show_changepwd && 
						<div styleName="Reset-Password" ref={this.myRef}>
							<form id='myForm'>
								<ResetPassword 
									hideDialog={this.hideDialog}
									resetPwd={this.resetPwd}
									contentList={this.state.contentList}
									toggleHide={this.toggleHide}
									error_msg={this.state.error_msg}
									error_show={this.state.error_show}
									changeValue={this.changeValue}
								>
								</ResetPassword>
							</form>
						</div>
				}
			</div>
		)
	}
}

DcHeader.propTypes = {
	changeLang: PropTypes.func,
	currentLang: PropTypes.string,
	color: PropTypes.string
}

DcHeader.defaultProps = {
	currentLang: 'zh',
	color: '#424242'
}

function mapStateToProps(state) {
  return state.userInfo
}

export default injectIntl(connect(mapStateToProps, {
	getUserInfo,
	clearUserInfo
})(DcHeader))