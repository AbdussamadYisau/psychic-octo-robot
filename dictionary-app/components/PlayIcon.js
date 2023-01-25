import React from "react";

const PlayAudio = ({onClick}) => {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <circle opacity="0.25" cx="37.5" cy="37.5" r="37.5" fill="#A445ED" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 27V48L50 37.5L29 27Z"
        fill="#A445ED"
      />
    </svg>
  );
};

export default PlayAudio;
