import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

const linkedinIcon = "https://image.flaticon.com/icons/png/512/174/174857.png"
const avtar = "https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png"

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src={linkedinIcon} alt=""/>
                <div className="header__search">
                    {/* SearchIcon  */}
                    <SearchIcon/>
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption title="Home" Icon={HomeIcon} />
                <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
                <HeaderOption title="Messaging" Icon={ChatIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                <HeaderOption avtar={avtar} /> 
            </div>
        </div>
    )
}

export default Header
