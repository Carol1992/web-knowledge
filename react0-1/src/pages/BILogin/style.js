import styled from 'styled-components'
import image from '../../images/bgLogin.png'

const Wrapper = styled.div`
 	width: 100%;
	height: 100%;
	background-image: url(${image});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Title = styled.div`
	font-size: 19px;
	color: #424242;
	font-weight: bold;
	margin-bottom: 40px;
`
const Errors = styled.div`
	width: 400px;
	text-align: center;
	font-size: 12px;
	color: orangered;
`
const Confirmed = styled.div`
	margin-top: 40px;
	margin-left: ${props => props.agree ? 'calc(50% - 200px)' : 0};
`
const Link = styled.div`
	width: 400px;
	font-size: 18px;
	text-align: center;
	cursor: pointer;
	color: #4284F5;
	font-weight: bold;
`
const Forget = styled(Link)`
	color: #666666;
	font-weight: lighter;
	margin-top: 50px;
`
const Register = styled(Link)`
	text-decoration: underline;
	margin-top: 150px;
`
const Login = styled(Link)`
	text-decoration: underline;
	margin-left: 140px;
`
const Bottom = styled.div`
	margin-top: 150px;
	display: flex;
	.login {
		font-size: 18px;
		color: #4284F5;
		font-weight: bold;
		text-decoration: underline;
		text-align: center;
		cursor: pointer;
		margin-left: 140px;
	}
	.register {
		margin-top: 0px;
		width: auto;
		font-size: 18px;
		text-align: center;
		cursor: pointer;
		color: #4284F5;
		font-weight: bold;
		text-decoration: underline;
	}
	.line {
		width: 1px;
		height: 30px;
		background-color: #000;
		margin-right: 20px;
		margin-left: 20px;
	}
`

export {
	Wrapper,
	Title,
	Errors,
	Confirmed,
	Forget,
	Register,
	Login,
	Bottom
}