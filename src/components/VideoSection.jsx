import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function VideoSection() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="ratio ratio-16x9 w-75">
          <iframe
            src="https://www.youtube.com/embed/wkf-WxMZVP8?mute=1"
            title="YouTube video"
            allow="encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default VideoSection;
