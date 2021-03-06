import React from "react";

export default function NextIcon({
  className = "h-6 w-6",
  fill = "none",
  stroke = "#3a3e42",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={fill}
      viewBox="0 0 24 24"
      stroke={stroke}
    >
        <path d="M9 5l7 7-7 7" />
    </svg>
  );
}
