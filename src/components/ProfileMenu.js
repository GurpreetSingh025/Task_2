import "../Sass/ProfileMenu.scss"
function ProfileMenu() {
    let data = [
        {
            menuDescription : "Menu 1" 
        } ,
        {
            menuDescription : "Menu 1"
        } ,
        {
            menuDescription : "Menu 1"
        } ,
        {
            menuDescription : "Menu 1"
        }       
    ]
    return (
        <div className="profile-menu profile-menu-elem">
            <div className="profile-header profile-menu-elem">
                <img src="./images/profile_pic1.png" alt="Profile" className="profile-image profile-menu-elem" />
                <div className="profile-info profile-menu-elem">
                    <h2 className="profile-name profile-menu-elem">Grace John</h2>
                    <p className="profile-contact profile-menu-elem">
                          +91 9827839223 | gracejohn@gmail.com
                    </p>
                </div>
            </div>
            <ul className="menu-list profile-menu-elem">
                 {
                    data.map(obj => <li className="menu-item profile-menu-elem"><span className="profile-menu-elem menu-item-text">{obj.menuDescription}</span></li>)
                 }
            </ul>
        </div>
    )
}
export default ProfileMenu;