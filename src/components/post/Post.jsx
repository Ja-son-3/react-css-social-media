import "./post.css"
import {MoreVert} from '@mui/icons-material'

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
                    <span className="postUsername">Jason Huang</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText"></span>
            </div>
            <div className="postBottom"></div>
        </div>
    </div>
  )
}
