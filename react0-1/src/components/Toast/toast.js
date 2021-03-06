import React, { Component } from 'react'
import './toast.scss'
class ToastBox extends Component {
    constructor() {
        super()
        this.transitionTime = 300
        this.state = { notices: [] }
        this.removeNotice = this.removeNotice.bind(this)
    }

    getNoticeKey() {
        const { notices } = this.state
        return `notice-${new Date().getTime()}-${notices.length}`
    }

    addNotice(notice) {
        const { notices } = this.state
        notice.key = this.getNoticeKey()

        // notices.push(notice);//展示所有的提示
        notices[0] = notice;//仅展示最后一个提示
        
        this.setState({ notices })
        if (notice.duration > 0) {
            setTimeout(() => {
                this.removeNotice(notice.key)
            }, notice.duration)
        }
        return () => { this.removeNotice(notice.key) }
    }

    removeNotice(key) {
        const { notices } = this.state
        this.setState({
            notices: notices.filter((notice) => {
                if (notice.key === key) {
                    if (notice.onClose) setTimeout(notice.onClose, this.transitionTime)
                    return false
                }
                return true
            })
        })
    }

    render() {
        const { notices } = this.state
        const icons = {
            info: 'toast_info',
            success: 'toast_success',
            error: 'toast_error',
            loading: 'toast_loading'
        }
        return (
            <div styleName="toast">
                {
                    notices.map(notice => (
                        <div styleName="toast_bg" key={notice.key}>
                            <div styleName='toast_box'>
                                {/*this.removeNotice(this.state.notices[0].key; <div styleName={`toast_icon ${icons[notice.type]}`}></div>*/}
                                <div styleName='toast_text'>{notice.content}</div> 
                                <div styleName='toast_operate' onClick={() => window.location.reload()}>
                                    {
                                        localStorage.localLang === 'zh' ? '确定' : 'Confirmed'
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ToastBox