import React from "react";
import "./VideoCard.css";

import Avatar from "@material-ui/core/Avatar";

const VideoCard = ({
  title,
  views,
  timestamp,
  image,
  channel,
  channelImage,
}) => {
  return (
    <div className="videoCard">
      <img src={image} className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

// go into recommendedVideos
export default VideoCard;
