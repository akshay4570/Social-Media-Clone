import React,{useState} from 'react';
import './Post.scss';
import {MoreVert} from '@material-ui/icons';
import {Users} from '../../dummyData';

const Post = ({post}) => {
    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);
    
    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(user => user.id === post.userId)[0].profilePicture} alt="Profile Pic" className="postProfileImg" />
                        <span className="postUserName">{Users.filter(user => user.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="Post" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="Like" onClick={likeHandler} className="likeIcon" />
                        <img src="/assets/heart.png" alt="Heart" onClick={likeHandler}className="likeIcon" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;