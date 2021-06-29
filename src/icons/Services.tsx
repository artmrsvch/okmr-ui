import * as React from 'react';

function SvgServices(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={15} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.667.5v6.667H10V8.58L8.72 10.5H3.334c-.631 0-1.313.138-1.925.38a3.05 3.05 0 00-.856.481C.29 11.579 0 11.928 0 12.427V15.5h6.667v-3.333H8.72c.556 0 1.077-.278 1.386-.742l1.56-2.34V7.168H15V.5H6.667zm1.666 1.667h5V5.5h-5V2.167zm-5 3.333a1.667 1.667 0 100 3.333 1.667 1.667 0 000-3.333zm0 6.667H5v1.666H1.667v-1.217c.067-.048.18-.12.351-.187.391-.155.96-.262 1.315-.262z"
        fill="#005DE2"
      />
    </svg>
  );
}

export default SvgServices;
