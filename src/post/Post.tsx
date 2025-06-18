import { MessageCircle, Send, MoreHorizontal } from "lucide-react";
import React from "react";
import LikeButton from "./components/LikeButton";
import SaveButton from "./components/SaveButton";
import VolumeControl from "./components/VolumeControl";
import "./Post.css";

interface PostProps {
  id: string;
  username: string;
  userAvatar: string;
  postImage: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  timeAgo: string;
  location: string;
}

const Post: React.FC<PostProps> = ({
  username,
  userAvatar,
  postImage,
  caption,
  likes,
  comments,
  shares,
  timeAgo,
  location,
}) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="user-info">
          <img src={userAvatar} alt={username} className="user-avatar" />
          <div className="user-details">
            <span className="username">{username}</span>
            <span className="post-location">{location}</span>
          </div>
        </div>
        <MoreHorizontal className="more-options" size={16} />
      </div>
      <div className="post-media-container">
        <img src={postImage} alt="Post content" className="post-image" />
        <VolumeControl />
      </div>
      <div className="post-actions">
        <div className="left-actions">
          <LikeButton likes={likes} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <MessageCircle className="action-btn" size={24} />
            <span className="action-count">{comments}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Send className="action-btn" size={24} />
            <span className="action-count">{shares}</span>
          </div>
        </div>
        <div className="right-actions">
          <SaveButton />
        </div>
      </div>
      <div className="post-caption">
        <span className="username-bold">{username}</span>
        <span className="caption-text">{caption}</span>
      </div>
      <div className="time-ago">
        <span>{timeAgo}</span>
      </div>
    </div>
  );
};

export default Post;
