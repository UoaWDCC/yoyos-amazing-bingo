import React, { HTMLAttributes } from "react";

const Darkball = ({ ...props }: HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="128"
      height="128"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="126" height="126" rx="15" fill="#1D1D1D" />
      <rect
        x="1"
        y="1"
        width="126"
        height="126"
        rx="15"
        stroke="#313131"
        strokeWidth="2"
      />
      <rect
        x="2"
        y="62"
        width="124"
        height="4"
        fill="#595959"
        stroke="#313131"
        strokeWidth="4"
      />
      <circle
        cx="64"
        cy="64"
        r="16"
        fill="#1D1D1D"
        stroke="#313131"
        strokeWidth="8"
      />
    </svg>
  );
};

export default Darkball;
