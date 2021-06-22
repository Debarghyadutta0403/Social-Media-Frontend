import './sidebar.css'
import {RssFeed, Textsms, Group, VideoLibrary ,Help} from "@material-ui/icons"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Textsms className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoLibrary className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Help className="sidebarIcon"/>
                        <span className="sidebarListItemText">Report</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/profile/4.jpg" alt="" />
                        <span className="sidebarFriendName">Donna Hill</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/profile/4.jpg" alt="" />
                        <span className="sidebarFriendName">Donna Hill</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/profile/4.jpg" alt="" />
                        <span className="sidebarFriendName">Donna Hill</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/profile/4.jpg" alt="" />
                        <span className="sidebarFriendName">Donna Hill</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/profile/4.jpg" alt="" />
                        <span className="sidebarFriendName">Donna Hill</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/profile/4.jpg" alt="" />
                        <span className="sidebarFriendName">Donna Hill</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/profile/4.jpg" alt="" />
                        <span className="sidebarFriendName">Donna Hill</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/profile/4.jpg" alt="" />
                        <span className="sidebarFriendName">Donna Hill</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
