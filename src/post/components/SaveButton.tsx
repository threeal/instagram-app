import { Bookmark } from "lucide-react";
import React, { useState } from "react";
import "./SaveButton.css";

const SaveButton: React.FC = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <Bookmark
      className={`action-btn ${isSaved ? "saved" : ""}`}
      size={24}
      onClick={handleSave}
      fill={isSaved ? "#ffffff" : "none"}
    />
  );
};

export default SaveButton;
