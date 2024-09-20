import "../Sass/NotificationContainer.scss"
function NotificationContainer(props) {
    let data = [
        {
            title: "Lorem Ipsum",
            desc: "Lorem Ipsum",
            timing: "1d ago"
        },
        {
            title: "Lorem Ipsum",
            desc: "Lorem Ipsum X",
            timing: "1d ago"
        },
        {
            title: "Lorem Ipsum",
            desc: "Lorem Ipsum",
            timing: "1d ago"
        },
        {
            title: "Lorem Ipsum",
            desc: "Lorem Ipsum",
            timing: "1d ago"
        }
    ]
    let notificationCont = props.notificationCont ;
    return (
        <div className="notification-cont scrollVertical not-item" ref={notificationCont}>
            <div className="notification-header not-item">
                <h2 className="not-item">Notifications</h2>
                <span className="notification-close-cont notification-close"><svg className="notification-close" width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="notification-close" d="M11 1L1 11M1 1L11 11" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>
            </div>
            {
                data.map(obj => (
                    <div className="notification-item not-item">
                        <div className="notification-title-cont not-item"><p className="not-item notification-title">{obj.title}</p></div>
                        <div className="notification-content-cont not-item">
                            <p className="notification-description not-item">{obj.desc}</p>
                            <p className="notification-time not-item">{obj.timing}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default NotificationContainer;