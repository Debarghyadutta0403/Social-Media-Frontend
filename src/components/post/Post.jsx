import './post.css'
import {MoreVert} from "@material-ui/icons"
export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/profile/3.jpg" alt="" />
                        <span className="postUsername">Daniel Watson</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        Hey The first post
                    </span>
                    <img className="postImg" src="/assets/post/post1.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/button/like.png" alt="" />
                    <span className="postLikeCounter">18 people liked this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">7 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
