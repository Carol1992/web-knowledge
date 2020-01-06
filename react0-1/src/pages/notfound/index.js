import React, {
	PureComponent
} from 'react'
import style from './index.scss'

class NotFound extends PureComponent {
	render() {
		return (
			<div className={style['page-box']}>
				页面不存在
			</div>
		)
	}
}

export default NotFound