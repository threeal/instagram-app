import { Heart } from "lucide-react";
import React, { useState } from "react";
import "./LikeButton.css";

interface LikeButtonProps {
  likes: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ likes }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Heart
        className={`action-btn ${isLiked ? "liked" : ""}`}
        size={24}
        onClick={handleLike}
        fill={isLiked ? "#ff3040" : "none"}
      />
      <span className="action-count">
        {(likes + (isLiked ? 1 : 0)).toLocaleString()}
      </span>
    </div>
  );
};

export default LikeButton;
