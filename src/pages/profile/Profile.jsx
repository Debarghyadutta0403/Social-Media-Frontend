import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import './profile.css'

export default function Profile() {
    return (
        <>
        <Topbar />
        <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
            <div className="profileCover">
                <img className="profileCoverImg" src="/assets/post/2.jpg" alt="" />
                <img className="profileUserImg" src="/assets/profile/2.jpg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Debarghya Dutta</h4>
                <span className="profileInfoDescription">Hello I'm using Bonjour!</span>
            </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar Profile/>
            </div>
        </div>
        </div>
        </>
    )
}
