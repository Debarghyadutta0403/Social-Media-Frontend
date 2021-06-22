import './share.css'
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"
export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/profile/2.jpg" alt="" />
                    <input placeholder="Share your thoughts" className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="sharebottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="Blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="Red" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="MediumSlateBlue" className="shareIcon" />
                            <span className="shareOptionText">Emoji</span>
                        </div>
                        <button className="shareButton">Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
