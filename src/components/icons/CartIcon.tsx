import { SVGProps } from "react";

export const CartIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlSpace="preserve"
      viewBox="0 0 18.3 16.4"
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
        d="M8.1,13.8c0.3,0.3,0.4,0.7,0.4,1.1c0,0.4-0.2,0.8-0.4,1.1c-0.3,0.3-0.7,0.4-1.1,0.4S6.2,16.2,5.9,16
	    c-0.3-0.3-0.4-0.7-0.4-1.1c0-0.4,0.2-0.8,0.4-1.1c0.3-0.3,0.7-0.4,1.1-0.4S7.8,13.6,8.1,13.8z M15.5,13.4c-0.4,0-0.8,0.2-1.1,0.4
	    c-0.3,0.3-0.4,0.7-0.4,1.1c0,0.4,0.2,0.8,0.4,1.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.2,1.1-0.4c0.3-0.3,0.4-0.7,0.4-1.1
	    c0-0.4-0.2-0.8-0.4-1.1C16.3,13.6,15.9,13.4,15.5,13.4z M18.3,4.1l-0.9,7c-0.1,0.7-0.7,1.2-1.4,1.2H5.9c-0.7,0-1.3-0.5-1.4-1.2
	    L3.2,1.8H0.5C0.2,1.8,0,1.6,0,1.3V0.5C0,0.2,0.2,0,0.5,0h3.1C4.3,0,4.9,0.5,5,1.2l0.2,1.3h11.8C17.8,2.5,18.4,3.2,18.3,4.1z
	    M16.5,4.3H5.4l0.9,6.2h9.4L16.5,4.3z"
        fill="#2E2E2E"
      ></path>
      <title>Cart</title>
    </svg>
  );
};