import "./topbar.css"
import {Search,Person,Chat,Notifications,MeetingRoom} from "@material-ui/icons"
import {Link} from "react-router-dom";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Bonjour</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friends,posts" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
            
                <div className="topbarLinks">
                    <Link className="linkTo" to ='/home'>
                    <span className="topbarLink">Homepage</span>
                    </Link>
                    <Link className="linkTo" to ='/profile'>
                    <span className="topbarLink">Timeline</span>
                    </Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">8</span>
                    </div>
                </div>
                <img src="/assets/profile/2.jpg" alt="" className="topbarImg" />
            </div>
            <div className="logoutIcon">
                <Link className="linkTo" to ='/'>
                    <MeetingRoom />
                    <span className="logoutText">Logout</span>
                </Link>
            </div>
        </div>
    )
}
