import { Volume2, VolumeX } from "lucide-react";
import React, { useState } from "react";
import "./VolumeControl.css";

const VolumeControl: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="volume-control" onClick={handleMute}>
      {isMuted ? (
        <VolumeX size={16} color="#ffffff" />
      ) : (
        <Volume2 size={16} color="#ffffff" />
      )}
    </div>
  );
};

export default VolumeControl;
