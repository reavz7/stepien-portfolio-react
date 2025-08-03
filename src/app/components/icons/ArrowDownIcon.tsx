import React from "react";

const ArrowDownIcon = ({ className }: IconProps) => {
  return (
      <svg
      className={ className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>
  );
};

export default ArrowDownIcon;
