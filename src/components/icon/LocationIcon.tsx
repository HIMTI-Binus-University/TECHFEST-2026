import type { SVGProps } from 'react'

const LocationIcon = ({ color = '#05BADD', ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      aria-hidden="true"
      {...props}
    >
      <path d="M10.501 18.1659C12.051 16.8275 16.6668 12.4942 16.6668 8.33335C16.6668 6.56524 15.9645 4.86955 14.7142 3.61931C13.464 2.36907 11.7683 1.66669 10.0002 1.66669C8.23205 1.66669 6.53636 2.36907 5.28612 3.61931C4.03588 4.86955 3.3335 6.56524 3.3335 8.33335C3.3335 12.4942 7.94933 16.8275 9.49933 18.1659C9.64373 18.2744 9.8195 18.3331 10.0002 18.3331C10.1808 18.3331 10.3566 18.2744 10.501 18.1659Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 10.8333C11.3807 10.8333 12.5 9.71402 12.5 8.33331C12.5 6.9526 11.3807 5.83331 10 5.83331C8.61929 5.83331 7.5 6.9526 7.5 8.33331C7.5 9.71402 8.61929 10.8333 10 10.8333Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default LocationIcon
