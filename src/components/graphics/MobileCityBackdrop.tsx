import { useId, type SVGProps } from "react";

const MobileCityBackdrop = (props: SVGProps<SVGSVGElement>) => {
  const id = useId().replace(/:/g, "");
  const mask0Id = `${id}-mobile-city-backdrop-mask0`;
  const mask1Id = `${id}-mobile-city-backdrop-mask1`;
  const mask2Id = `${id}-mobile-city-backdrop-mask2`;
  const mask3Id = `${id}-mobile-city-backdrop-mask3`;
  const mask4Id = `${id}-mobile-city-backdrop-mask4`;

  const maskPath = <path d="M463 0H-37V543.164H463V0Z" fill="white" />;

  return (
    <svg
      width="421"
      height="507"
      viewBox="0 0 421 507"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id={mask0Id} style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="-37" y="0" width="500" height="544">
        {maskPath}
      </mask>
      <g mask={`url(#${mask0Id})`}>
        <path d="M221.727 27.2891H168.517V270.743H221.727V27.2891Z" fill="#001854" />
      </g>
      <mask id={mask1Id} style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="-37" y="0" width="500" height="544">
        {maskPath}
      </mask>
      <g mask={`url(#${mask1Id})`}>
        <path d="M432.613 271.938V137.85H406.848V63.6738H372.813V271.938H432.613Z" fill="#001854" />
      </g>
      <mask id={mask2Id} style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="-37" y="0" width="500" height="544">
        {maskPath}
      </mask>
      <g mask={`url(#${mask2Id})`}>
        <path d="M47.9401 95.2739H-0.876221V270.264H47.9401V95.2739Z" fill="#001854" />
      </g>
      <mask id={mask3Id} style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="-37" y="0" width="500" height="544">
        {maskPath}
      </mask>
      <g mask={`url(#${mask3Id})`}>
        <path d="M310.328 272.419V157.687H283.725V95.2739H246.623V272.419H310.328Z" fill="#001854" />
      </g>
      <mask id={mask4Id} style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="-37" y="0" width="500" height="544">
        {maskPath}
      </mask>
      <g mask={`url(#${mask4Id})`}>
        <path d="M119.945 106.046H69.908V270.982H119.945V106.046Z" fill="#001854" />
      </g>
      <path d="M-0.876221 254.466L-0.876221 307.37L432.612 307.37V254.466L-0.876221 254.466Z" fill="#001854" />
    </svg>
  );
};

export default MobileCityBackdrop;
