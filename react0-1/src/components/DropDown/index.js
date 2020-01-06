import React, { Component } from 'react'
import './index.scss'
import PropTypes from 'prop-types';

//自定义背景颜色，文本颜色，边框颜色，宽度，高度，下拉框内容
class DropDown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			collapse: true
		}

		this.toggleCollapse = this.toggleCollapse.bind(this)
	}

	toggleCollapse() {
		this.setState({
			collapse: !this.state.collapse
		})
	}

	render() {
		const style = {
			...this.props.contentStyle,
			height: this.props.height, 
			width: this.props.width
		}
	
		const contentList = this.props.list.map((l, i) => {
			return (
				<div 
					styleName="list" 
					key={l.id} 
					onClick={() => {this.toggleCollapse(); this.props.selectVal(l)}}
					style={style}
				>
					<span>{l.value}</span>
				</div>
			)
		})
		return (
			<div styleName="drop-down" style={{height: this.props.height, width: this.props.width}}>
				<div 
					styleName="menu" 
					onClick={this.toggleCollapse}
					style={this.props.menuStyle}
				>
					<span styleName="selected_val" style={{lineHeight: this.props.height}}>{this.props.selected}</span>
					<span styleName={this.state.collapse ? "ico" : "ico ico-rotate"} style={{lineHeight: this.props.height}}>
						<i className="iconfont icon-db_triangle"></i>
					</span>
				</div>
				{
					!this.state.collapse && 
						<div styleName="drop-down-content">
							{contentList}
						</div>
				}
			</div>
		)
	}
}

DropDown.propTypes = {
	list: PropTypes.array,
	selected: PropTypes.string,
	menuStyle: PropTypes.object,
	width: PropTypes.string,
	height: PropTypes.string,
	selectVal: PropTypes.func,
	contentStyle: PropTypes.object
}

DropDown.defaultProps = {
	list: [],
	selected: '',
	menuStyle: {border: '1px solid #fff', borderRadius: '4px', backgroundColor: '#fff', color: '#424242'},
	width: '80px',
	height: '30px',
	contentStyle: {backgroundColor: '#fff', color: '#424242'}
}

export default DropDown