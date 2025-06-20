import React from "react";
import "./Post.css";

interface PostProps {
  image: string;
}

const Post: React.FC<PostProps> = ({ image }) => {
  return (
    <div className="post">
      <div className="post-header"></div>
      <img
        className="post-image"
        src={image}
      />
      <div className="reactions-summary"></div>
    </div>
  );
};

export default Post;
