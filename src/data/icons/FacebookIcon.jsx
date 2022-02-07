import React from "react";

export default function ApartmentIcon({
  className = "h-6 w-6",
  fill = "none",
  stroke = "#3a3e42",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={fill}
      viewBox="0 0 39 39"
      stroke={stroke}
    >
      <path d="M21.5731 33.8113V20.6133H26.0255L26.6874 15.4459H21.5731V12.1545C21.5731 10.6633 21.9885 9.6424 24.1286 9.6424H26.8403V5.03535C25.5209 4.89395 24.1947 4.82567 22.8678 4.83084C18.9322 4.83084 16.2301 7.2334 16.2301 11.644V15.4362H11.8066V20.6037H16.2398V33.8113H21.5731Z" />
    </svg>
  );
}
