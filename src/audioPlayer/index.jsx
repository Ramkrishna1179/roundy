import React from "react";
import BasePlayer from "./BasePlayer";

const AudioPlayer = audioPlayerOptions => {
  const defaultOptions = { autoplay: false };

  return <BasePlayer {...defaultOptions} {...audioPlayerOptions} />;
};

export default AudioPlayer;
