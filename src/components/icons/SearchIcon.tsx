import { SVGProps } from "react";

export const SearchIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlSpace="preserve"
      viewBox="0 0 16 15.8"
      fill="none"
      y="0px"
      x="0px"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M10.7,3.3c2,2,2,5.3,0,7.4c-2,2-5.3,2-7.4,0c-2-2-2-5.3,0-7.4C5.4,1.3,8.6,1.3,10.7,3.3z M12.6,11.2
	      c2.1-2.7,1.8-6.6-0.7-9.1c-2.7-2.7-7.2-2.7-9.9,0s-2.7,7.2,0,9.9c2.5,2.5,6.6,2.7,9.3,0.5l3.2,3.2c0.2,0.2,0.5,0.2,0.7,0l0.6-0.6
	      c0.2-0.2,0.2-0.5,0-0.7L12.6,11.2z"
        fill="#2E2E2E"
      ></path>
      <title>Search</title>
    </svg>
  );
};
