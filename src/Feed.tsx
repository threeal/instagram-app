import React from "react";
import Post from "./post/Post";
import "./Feed.css";

const Feed: React.FC = () => {
  return (
    <div className="feed">
      <Post
        id="1"
        username="city.sundays"
        userAvatar="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face"
        postImage="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=500&fit=crop"
        caption="Golden hour walks with nowhere to be ✨ #sundayvibes #citylife"
        likes={1845}
        comments={34}
        shares={19}
        timeAgo="3 hours ago"
        location="New York City"
      />
      <Post
        id="2"
        username="analog.dreams"
        userAvatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
        postImage="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=500&fit=crop"
        caption="Shot this on expired film. Feels like a memory I never lived 🌙 #filmisnotdead #35mm"
        likes={932}
        comments={17}
        shares={8}
        timeAgo="Yesterday"
        location="Kyoto, Japan"
      />
      <Post
        id="3"
        username="kitchen.confidential"
        userAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
        postImage="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=500&fit=crop"
        caption="Homemade pasta night 🍝 Nothing beats fresh tagliatelle. Recipe in bio! #foodie #homemade"
        likes={2764}
        comments={89}
        shares={42}
        timeAgo="2 days ago"
        location="Bologna, Italy"
      />
    </div>
  );
};

export default Feed;
