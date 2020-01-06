import React, {
	PureComponent, Fragment
} from 'react';
import { get, post, postForm } from '../../api/server'
import './index.scss'
import DcButton from 'components/DcButton'
import UserInput from 'components/UserInput'
import CheckBox from 'components/CheckBox'
import { injectIntl, FormattedMessage } from 'react-intl';
import serverError from '../../error/serverError.js'
//import 'components/Recaptcha/recaptcha.js'
import {
    connect
} from 'react-redux';
import {
    getUserInfo,
} from "actions/userInfo";

class BILogin extends PureComponent {
	constructor(props) {
		super(props)

		this.intl = this.props.intl

		this.state = {
			title: `${this.intl.formatMessage({id: 'login'})} ${this.intl.formatMessage({id: 'clound_platform'})}`,
			contentList: [
				{ title: this.intl.formatMessage({id: 'account'}), placeholder: this.intl.formatMessage({id: 'user_name_and_email'}), attribute: 'user_name', value: ''},
				{ title: this.intl.formatMessage({id: 'password'}), placeholder: this.intl.formatMessage({id: 'password_info'}), showEyes: false, type: 'password', attribute: 'password', value: ''},
			],
			btnName: this.intl.formatMessage({id: 'login'}),
			code: '01',
			checked: false,
			showinfo: '',
			error_msg: this.intl.formatMessage({id: 'error_msg'}),
			error_show: false,
			auth_code: '',
			values: {
				email: '',
				user_name: ''
			},
			active_fail_msg: this.intl.formatMessage({id: 'error_msg'})
		}
	}

	componentDidMount() {
		if(this.props.history.location.search) {
			let search_str = this.props.history.location.search.slice(1).split('&'),
					values = {};
			
			if(search_str[0] && search_str[0].includes('auth_code')) {
				this.setState({
					auth_code: search_str[0].split('=')[1]
				})
				this.resetPwd()
			}
			if(search_str[0] && search_str[0].includes('fail_code')) {
				let msg = serverError.filter(s => s.msg_code == search_str[0].split('=')[1])[0]
				if(msg) {
					this.setState({
						active_fail_msg: this.intl.locale === 'zh' ? msg.msg_cn :  msg.msg_en
					})
				}
				this.setState({
					title: this.intl.formatMessage({id: 'active_fail'}),
					contentList: [],
					btnName: this.intl.formatMessage({id: 'back_to_login'}),
					code: '10'
				})
			}
			if(search_str[0] && search_str[0].includes('email')) {
				values.email = search_str[0].split('=')[1]
			}
			if(search_str[1] && search_str[1].includes('user_name')) {
				values.user_name = search_str[1].split('=')[1]
			}
			if(Object.keys(values).length) {
				this.setState({
					values: values,
					title: this.intl.formatMessage({id: 'active_success'}),
					contentList: [],
					btnName: this.intl.formatMessage({id: 'back_to_login'}),
					code: '09'
				})
			}
		} else {
			//  if(Object.keys(this.props.userInfo).length > 0) {
			//  	return window.location.hash = '#/platform'
			//  }
		}
		//get xsrf
		this.getXSRF()
		// grecaptcha.ready(() => {
		// 	grecaptcha.render(document.getElementById('Recaptcha-tag'), {
		// 		'sitekey': '',
		// 		'hl': localStorage.localLang
		// 	})
		// })
  }

  getXSRF() {
		if(document.getElementById('myForm')) {
			get('xsrf', {}).then(res => {
				document.getElementById('myForm').insertAdjacentHTML('beforeend', res)
				localStorage.dc_xsrf = document.getElementsByName('_xsrf')[0].value || ''
			})
		}
  }

	changeInput = (event) => {
		let contentList = [...this.state.contentList]
		let val = contentList.filter(c => c.attribute === event.target.name)[0]
		if(val) {
			val.value = event.target.value

			this.setState({
				contentList: contentList
			})
		}
	}
	checkLength(contentList, attributes) {
		let counts = 0;
		contentList.forEach(l => {
			if(attributes.includes(l.attribute)) {
				let isName = l.attribute === 'user_name'
				if(isName && l.value.length > 32) {
					l.error = `${l.title}${this.intl.formatMessage({id: 'shorter_than_30'})}`
					counts++
				} else if(!isName && (l.value.length < 6 || l.value.length > 32)) {
					l.error = `${l.title}${this.intl.formatMessage({id: 'range_between_6_20'})}`
					counts++
				} else {
					l.error = ''
				}
			}
		})
		return {
			contentList: contentList,
			hasError: counts > 0
		}
	}

	checkEmpty(contentList) {
		let counts = 0
		contentList.forEach(l => {
			let bool = l.value === '' || l.value === undefined
			if(bool) {
				l.error = `${l.title} ${this.intl.formatMessage({id: 'not_empty'})}`
				counts++
			} else {
				l.error = ''
			}
		})
		return {
			contentList: contentList,
			hasError: counts > 0
		}
	}

	checkPassword(contentList) {
		let hasError = false, error_msg = this.intl.formatMessage({id: 'password_not_consistent'})
		let list = contentList.filter(l => l.attribute === 'password' || l.attribute === 're_password')
		if(list.length === 2 && list[0].value !== list[1].value) {
			list[0].error = error_msg
			list[1].error = error_msg
			hasError = true
		} else {
			list[0].error = ''
			list[1].error = ''
		}
		
		return {
			contentList: contentList,
			hasError: hasError
		}
	}

	checkEmail(contentList) {
		let hasError = false
		let list = contentList.filter(l => l.attribute === 'email')[0]
		let regex = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/
		if(regex.test(list.value)) {
			list.error = ''
		} else {
			hasError = true
			list.error = this.intl.formatMessage({id: 'email_address_wrong'})
		}

		return {
			contentList: contentList,
			hasError: hasError
		}
	}

	toggleHide = (attribute) => {
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

	resetPwd() {
		this.setState({
			title: this.intl.formatMessage({id: 'reset_password'}),
			contentList: [
				{ title: this.intl.formatMessage({id: 'new_password'}), placeholder: this.intl.formatMessage({id: 'password_info'}), showEyes: false, type: 'password', attribute: 'password', value: ''},
				{ title: this.intl.formatMessage({id: 'retype_password'}), placeholder: this.intl.formatMessage({id: 'password_info'}), showEyes: false, type: 'password', attribute: 're_password', value: ''}
			],
			btnName: this.intl.formatMessage({id: 'confirmed_reset'}),
			code: '06',
			error_show: false
		})
	}

	forgetPwd() {
		this.setState({
			title: this.intl.formatMessage({id: 'forget_password'}),
			contentList: [
				{ title: this.intl.formatMessage({id: 'email_address'}), placeholder: this.intl.formatMessage({id: 'please_type_email_address'}), attribute: 'email', value: ''},
			],
			btnName: this.intl.formatMessage({id: 'send_email'}),
			code: '02',
			error_show: false
		})
		this.resetRecaptcha()
	}

	register() {
		this.setState({
			title: this.intl.formatMessage({id: 'add_new_user'}),
			contentList: [
				{ title: this.intl.formatMessage({id: 'reg_code'}), placeholder: this.intl.formatMessage({id: 'unused_reg_code'}), attribute: 'reg_code', value: ''},
				{ title: this.intl.formatMessage({id: 'user_name'}), placeholder: this.intl.formatMessage({id: 'user_name_info'}), attribute: 'user_name', value: ''},
				{ title: this.intl.formatMessage({id: 'email_address'}), placeholder: this.intl.formatMessage({id: 'email_info'}), attribute: 'email', value: ''},
				{ title: this.intl.formatMessage({id: 'password'}), placeholder: this.intl.formatMessage({id: 'password_info'}), showEyes: false, type: 'password', attribute: 'password', value: ''},
				{ title: this.intl.formatMessage({id: 'retype_password'}), placeholder: this.intl.formatMessage({id: 'password_info'}), showEyes: false, type: 'password', attribute: 're_password', value: ''},
			],
			btnName: this.intl.formatMessage({id: 'add_now'}),
			code: '03',
			showAgreement: false,
			error_show: false
		})
		this.resetRecaptcha()
	}

	showError(data) {
		let bool = true
		if(data) {
			bool = data.code !== 0 && data.code !== 302
		
			this.setState({
				error_show: bool
			})
			
			let msg = serverError.filter(s => s.msg_code == data.code)[0]
			if(msg) {
				this.setState({
					error_msg: this.intl.locale === 'zh' ? msg.msg_cn :  msg.msg_en
				})
			}

			return bool;
		} else {
			this.setState({
				error_show: bool
			})
		}
	}

	confirmed = () => {
		let contentList = [...this.state.contentList];
		let values = {}
		contentList.forEach(l => {
			values[l.attribute] = l.value
		});

		if(['05', '07', '08', '09', '10', '12'].includes(this.state.code)) {
			return this.backToLogin()
		}

		if(this.state.code === '04') {
			this.setState({
				title: this.intl.formatMessage({id: 'add_new_user'}),
				checked: true,
				btnName: this.intl.formatMessage({id: 'add_now'}),
				code: '03',
				showAgreement: false,
				error_show: false
			})
			return this.resetRecaptcha()
		}

		//对用户输入进行校检
		if(['01', '02', '03', '06'].includes(this.state.code)){
			let check_empty = this.checkEmpty(contentList)

			this.setState({
				contentList: check_empty.contentList
			})
			if(check_empty.hasError) return
		}

		if(['01', '03', '06'].includes(this.state.code)) {
			let check_length = this.checkLength(contentList, ['password', 're_password', 'user_name'])
			this.setState({
				contentList: check_length.contentList
			})
			if(check_length.hasError) return
		}

		if(['03', '06'].includes(this.state.code)) {
			let check_pwd = this.checkPassword(contentList)
		  this.setState({
				contentList: check_pwd.contentList
			})
			if(check_pwd.hasError) return
		}

		if(['02', '03', '11'].includes(this.state.code)) {
			let check_email = this.checkEmail(contentList)
		  this.setState({
				contentList: check_email.contentList
			})
			if(check_email.hasError) return
		}
		 // if(grecaptcha.getResponse() === '') {
		 // 	return this.setState({
		 // 		error_show: true,
		 // 		error_msg: this.intl.formatMessage({id: 'verify_first'})
		 // 	})
		 // } else {
		 // 	this.setState({
		 // 		error_show: false
		 // 	})
		 // }

	  let form_data = new FormData(document.getElementById('myForm'))
		//判断是否有xsrf
		if(!form_data.get('_xsrf')) {
			form_data.append('_xsrf', localStorage.dc_xsrf)
		}

		switch(this.state.code) {
			case '01':
				//将用户输入的信息发送到后台，根据后台返回错定错误信息，更新contentlist
			  //登录成功跳转到biplatform
				if(this.state.btnName === this.intl.formatMessage({id: 'logining'})) return
			  //form_data.append('g-recaptcha-response', grecaptcha.getResponse())
			  form_data.append('agreement', 'YES')
			  this.setState({
			  	btnName: this.intl.formatMessage({id: 'logining'})
			  })

			  postForm('login', form_data).then((res) => {
			   	if(this.showError(res)) {
						this.resetRecaptcha()
						this.setState({
					  	btnName: this.intl.formatMessage({id: 'login'})
					  })
			   		return
			   	}
				 	if(res.location === '/activate') {
				 	 this.setState({
				 	 	title: this.intl.formatMessage({id: 'account_inactive'}),
				 	 	contentList: [{
				 	 		title: this.intl.formatMessage({id: 'please_check_again_email_address'}),  attribute: 'email', value: res.email || ''
				 	 	}],
				 	 	btnName: this.intl.formatMessage({id: 'send_email'}),
				 	 	code: '11'
				 	 })
				 	} else {
				 		this.props.getUserInfo(() => this.props.history.replace("/platform"))
				 	}
				})
				break;
			case '02': 
				//将用户输入的邮箱地址发送给后台
				//form_data.append('g-recaptcha-response', grecaptcha.getResponse())
				form_data.append('lang', localStorage.localLang)
				postForm('requestReset', form_data).then((res) => {
					if(this.showError(res)) return
					this.setState({
						title: this.intl.formatMessage({id: 'finish_sending_email_info'}),
						contentList: [],
						btnName: this.intl.formatMessage({id: 'back_to_login'}),
						code: '05',
						values: {
							email: values.email
						}
					})
				})

				break;
			case '03': 
				if(!this.state.checked) {
					return this.state.showinfo = `(${this.intl.formatMessage({id: 'please_check'})})`
				} else {
					this.state.showinfo = ''
				}
				//form_data.append('g-recaptcha-response', grecaptcha.getResponse())
				form_data.append('lang', localStorage.localLang)
				postForm('register', form_data).then((res) => {
					if(this.showError(res)) return
					this.setState({
						title: this.intl.formatMessage({id: 'register_success'}),
						contentList: [],
						btnName: this.intl.formatMessage({id: 'back_to_login'}),
						code: '07',
						values: {
							email: values.email,
							user_name: values.user_name
						}
					})
				})
			
				break;
			case '06':
			  //将重置的密码发送到后台
			  //form_data.append('g-recaptcha-response', grecaptcha.getResponse())
			  form_data.append('auth_code', this.state.auth_code)
				post('resetPassword', form_data).then((res) => {
					if(this.showError(res)) return
					this.setState({
						title: this.intl.formatMessage({id: 'reset_password_success'}),
						contentList: [],
						btnName: this.intl.formatMessage({id: 'back_to_login'}),
						code: '08'
					})
				})
			
				break
			case '11':
				form_data.append('lang', localStorage.localLang)
				post('resendactive', form_data).then(res => {
					if(this.showError(res)) return
					this.setState({
						title: this.intl.formatMessage({id: 'finish_sending_email_info'}),
						contentList: [],
						btnName: this.intl.formatMessage({id: 'back_to_login'}),
						code: '12',
						values: {
							email: values.email
						}
					})
				})

			break
			default:
				break
		}
	}

	backToLogin() {
		this.setState({
			title: `${this.intl.formatMessage({id: 'login'})} ${this.intl.formatMessage({id: 'clound_platform'})}`,
			contentList: [
				{ title: this.intl.formatMessage({id: 'account'}), placeholder: this.intl.formatMessage({id: 'user_name_and_email'}), attribute: 'user_name', value: ''},
				{ title: this.intl.formatMessage({id: 'password'}), placeholder: this.intl.formatMessage({id: 'password_info'}), showEyes: false, type: 'password', attribute: 'password', value: ''},
			],
			btnName: this.intl.formatMessage({id: 'login'}),
			code: '01',
			showAgreement: false,
			error_msg: this.intl.formatMessage({id: 'error_msg'}),
			error_show: false
		})
		this.resetRecaptcha()
	}

	showDialog() {
		this.setState({
			title: this.intl.formatMessage({id: 'user_agreement'}),
			showAgreement: true,
			btnName: this.intl.formatMessage({id: 'understand_and_agree'}),
			code: '04'
		})
	}

	hideDialog() {
		this.setState({
			title: this.intl.formatMessage({id: 'add_new_user'}),
			btnName: this.intl.formatMessage({id: 'add_now'}),
			code: '03',
			showAgreement: false
		})
	}

	changeChecked() {
		this.setState({
			checked: !this.state.checked
		})
	}

	resetRecaptcha() {
		//typeof(grecaptcha.reset) === "function" && grecaptcha.reset()
	}

	render() {
		let contentList = [...this.state.contentList]

		const list = contentList.map((l, i) => {
			return (
				<div styleName="element" key={`${l.title}_${i}`}>
					<UserInput 
						title={l.title}
						placeholder={l.placeholder}
						showEyes={l.showEyes}
						type={l.type || "text"}
						attribute={l.attribute}
						width={l.width}
						value={l.value}
						toggleHide={this.toggleHide}
						changeInput={this.changeInput}
					></UserInput>
					{
						l.error && 
							<span styleName='error'>{l.error}</span>
					}
				</div>
			)
		})
		return (
			<div styleName="bkg-cover">
				<div styleName="bi-login">
					<div styleName="title">{this.state.title}</div>
					{
						!this.state.showAgreement && 
							<form id='myForm' autoComplete="off">
								{list}
							</form>
					}
					<div style={{display: ['01', '02', '03', '06'].includes(this.state.code) ? "block" : "none"}}>
						{/*<div id='Recaptcha-tag'></div>*/}
					</div>
					{
						this.state.code === "03" && 
							<div styleName="user-agreement">
								<CheckBox 
									checked={this.state.checked}
									check_box={() => this.changeChecked()}
								></CheckBox>
								<div styleName="agree-text">
									<Fragment><FormattedMessage id="agree" /></Fragment><span>	</span>
									<span styleName="info" onClick={() => this.showDialog()}><FormattedMessage id='user_agreement'/></span>
									{
										this.state.showinfo && 
											<span styleName='show-info'>{this.state.showinfo}</span>
									}
								</div>
							</div>
					}
					{
						['05', '12'].includes(this.state.code) && 
							<div>
							  <div styleName="user-info">
							  	{
							  		this.state.code === '05' ? <span><FormattedMessage id='email_address'/>: </span> : 
							  		<span></span>
							  	}
									<span>{this.state.values.email}</span>
								</div>
								<div styleName='check-emailbox'>
									<span><FormattedMessage id='check_emailbox'/></span>
								</div>
							</div>
					}
					{
						['07', '09'].includes(this.state.code) && 
							<div>
								<div styleName="user-info">
									<div styleName="user_name"><FormattedMessage id='user_name'/>: {this.state.values.user_name}</div>
									<div><FormattedMessage id='email_address'/>: {this.state.values.email}</div>
								</div>
								{
									this.state.code === '07' && 
										<div styleName="check-emailbox">
											<span><FormattedMessage id='active_info'/></span>
										</div>
								}
							</div>
					}
					{
						this.state.code === '10' &&
							<div styleName="active-fail">
								<span><FormattedMessage id='fail_reasons'/></span>
								{this.state.active_fail_msg}
							</div>
					}
					<div styleName={this.state.code === "04" ? "confirmed agree_confirmed" : "confirmed"}>
						{
							this.state.error_show && 
							 <div styleName='backend-error'>{this.state.error_msg}</div>
						}
						<DcButton 
							btnName={this.state.btnName} 
							confirmed={this.confirmed}
						></DcButton>
					</div>
					{
						this.state.code === "01" && 
							<Fragment>
								<div styleName="forget" onClick={() => this.forgetPwd()}>
									<span><FormattedMessage id='forget_password'/> ?</span>
								</div>
								<div styleName="register" onClick={() => this.register()}>
									<span><FormattedMessage id='add_now'/></span>
								</div>
							</Fragment>		
					}
					{
						this.state.showAgreement && 
							<div styleName="notAgree" onClick={() => this.hideDialog()}>
								<span></span>
							</div>
					}
					{
						['02', '11'].includes(this.state.code) && 
							<div styleName="bottom">
								<div styleName="login" onClick={() => this.backToLogin()}>
									<span><FormattedMessage id='login'/></span>
								</div>
								<div styleName="line"></div>
								<div styleName="register" onClick={() => this.register()}>
									<span><FormattedMessage id='add_new_user'/></span>
								</div>
							</div>
					}
					{
						this.state.code === "03" && 
							<div styleName="login-again">
								<span><FormattedMessage id='user_exit'/></span>
								<span styleName='login' onClick={() => this.backToLogin()}><FormattedMessage id='back_to_login'/></span>
							</div>
					}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return state.userInfo
}

export default injectIntl(connect(mapStateToProps, {
	getUserInfo
})(BILogin))
