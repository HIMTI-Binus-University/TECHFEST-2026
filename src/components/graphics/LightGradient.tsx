import { useId, type SVGProps } from "react";

const LightGradient = (props: SVGProps<SVGSVGElement>) => {
  const id = useId().replace(/:/g, "");
  const maskId = `${id}-light-gradient-mask`;
  const gradientId = `${id}-light-gradient`;

  return (
    <svg
      width="1534"
      height="680"
      viewBox="0 0 1534 680"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.7">
        <mask
          id={maskId}
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="-1"
          y="0"
          width="1537"
          height="680"
        >
          <path d="M1535.57 4.28631e-06L-0.344238 0L-0.34424 679.089L1535.57 679.089L1535.57 4.28631e-06Z" fill="white" />
        </mask>
        <g mask={`url(#${maskId})`}>
          <path d="M1535.57 4.28631e-06L-0.344238 0L-0.34424 673.784L1535.57 673.784L1535.57 4.28631e-06Z" fill={`url(#${gradientId})`} />
        </g>
      </g>
      <defs>
        <linearGradient id={gradientId} x1="767.611" y1="860.968" x2="767.611" y2="127.07" gradientUnits="userSpaceOnUse">
          <stop stopColor="#838383" />
          <stop offset="1" stopColor="#838383" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LightGradient;
