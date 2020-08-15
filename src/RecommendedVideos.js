import React from "react";
import "./RecommendedVideos.css";

import VideoCard from "./VideoCard";

const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <h2> RecommendedVideos </h2>

      <div className="recommendedVideos__videos">
        <VideoCard
          title="Become a React Developer"
          views="2.6M Views"
          timestamp="6 days ago"
          image="https://miro.medium.com/max/2560/1*Fzq301Uhm-6eLH1zXfngow.png"
          channel="Maxmillian"
          channelImage="https://pbs.twimg.com/profile_images/637638950727909377/IbmZASR7_400x400.jpg"
        />
        <VideoCard
          title="GraphQL on Server"
          views="2.5M Views"
          timestamp="5 days ago"
          image="https://pbs.twimg.com/media/EU8OxCIWsAAX4C4.jpg"
          channel="Andrew Mead"
          channelImage="https://img-a.udemycdn.com/user/200_H/7231684_bc0d_4.jpg"
        />
        <VideoCard
          title="Master Material UI"
          views="2.4M Views"
          timestamp="4 days ago"
          image="https://couponos.me/wp-content/uploads/Implement-High-Fidelity-Designs-with-Material-UI-and-ReactJS.jpg"
          channel="Reese Zachary"
          channelImage="https://avatars1.githubusercontent.com/u/26676255?s=460&u=b67539ae61b725a34260d89e5df91c6976259a2c&v=4"
        />
        <VideoCard
          title="React Multi Step Form"
          views="2.3M Views"
          timestamp="3 days ago"
          image="https://i.ytimg.com/vi/zT62eVxShsY/maxresdefault.jpg"
          channel="Stehphen Grider"
          channelImage="https://miro.medium.com/fit/c/160/160/0*ov3nOvZFgTt3MSEa."
        />
        <VideoCard
          title="Web & Mobile"
          views="2.2M Views"
          timestamp="2 days ago"
          image="https://www.johnsmilga.com/static/ef6f3e08714090361e4c1b81e16fdc3d/af144/fusion-charts-2.png"
          channel="John Smilga"
          channelImage="https://img-a.udemycdn.com/user/200_H/38711620_f4c5_3.jpg"
        />
        <VideoCard
          title="Intro to JavaScript"
          views="2.1M Views"
          timestamp="1 days ago"
          image="https://cosmolearning.org/images_dir/courses/914/profile-thumbnail-w300.jpg"
          channel="Net Ninja"
          channelImage="https://img-a.udemycdn.com/user/200_H/35642982_61b8.jpg"
        />
      </div>
    </div>
  );
};

// go into App
export default RecommendedVideos;
