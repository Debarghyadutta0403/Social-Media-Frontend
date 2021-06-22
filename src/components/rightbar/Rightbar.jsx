import './rightbar.css'

export default function Rightbar({Profile}) {


    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/birthday.png" alt="" />
                    <span className="birthdayText">
                    <b>Anna Moore</b> & <b>4 others</b> have birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/profile/5.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername"> Joseph king</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/profile/5.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername"> Joseph king</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/profile/5.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername"> Joseph king</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/profile/5.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername"> Joseph king</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/profile/5.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername"> Joseph king</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/profile/5.jpg" alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername"> Joseph king</span>
                    </li>
                </ul>
            </>
        )
    }

    const ProfileRightbar = () =>{
        return(
            <>
            <h4 className="rightbarTitle">User Information </h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Kolkata</span>
                    
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">India</span>
                    
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                    
                </div>
            </div>
            <h4 className="">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/profile/6.jpg" alt="" />
                    <span className="rightbarFollowingName">Phillip Strong</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/profile/4.jpg" alt="" />
                    <span className="rightbarFollowingName">Maya Singh</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/profile/1.jpg" alt="" />
                    <span className="rightbarFollowingName">Roger Stein</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/profile/3.jpg" alt="" />
                    <span className="rightbarFollowingName">Jason Green</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/profile/5.jpg" alt="" />
                    <span className="rightbarFollowingName">Michael Johnson</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/profile/7.jpeg" alt="" />
                    <span className="rightbarFollowingName">Patrick Bloom</span>
                </div>
            </div>
            </>
            
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {Profile ? <ProfileRightbar/> : <HomeRightbar />}
            </div>
        </div>
    )
}
