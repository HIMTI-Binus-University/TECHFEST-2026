import { useId, type SVGProps } from "react";

const MobileCityLayer = (props: SVGProps<SVGSVGElement>) => {
  const id = useId().replace(/:/g, "");
  const maskId = `${id}-mobile-city-layer-mask`;

  return (
    <svg
      width="421"
      height="504"
      viewBox="0 0 421 504"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id={maskId}
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="-1"
        y="0"
        width="434"
        height="504"
      >
        <path d="M432.612 0H-0.876221V503.577H432.612V0Z" fill="white" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <path d="M58.9249 163.499H20.116V281.037H58.9249V163.499Z" fill="#02216E" />
        <path d="M103.399 134.024H76.873V269.941H103.399V134.024Z" fill="#02216E" />
        <path d="M168.615 146.081H142.089V271.084H168.615V146.081Z" fill="#02216E" />
        <path d="M193.2 174.254H166.674V271.845H193.2V174.254Z" fill="#02216E" />
        <path d="M123.455 100.396H97.0586V269.815H123.455V100.396Z" fill="#02216E" />
        <path d="M231.502 100.396H212.48V269.942H231.502V100.396Z" fill="#02216E" />
        <path d="M250.522 64.5117L231.502 77.6047V267.847H250.522V64.5117Z" fill="#02216E" />
        <path d="M280.931 163.593H265.403V271.59H280.931V163.593Z" fill="#02216E" />
        <path d="M325.183 134.024H298.787V277.301H325.183V134.024Z" fill="#02216E" />
        <path d="M390.4 146.081H364.003V275.906H390.4V146.081Z" fill="#02216E" />
        <path d="M345.37 100.396H318.844V276.795H345.37V100.396Z" fill="#02216E" />
        <path d="M432.612 267.151H-0.876221V320.055H432.612V267.151Z" fill="#02216E" />
      </g>
    </svg>
  );
};

export default MobileCityLayer;
