import * as React from 'react';

function SvgReports(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={15} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.333 2.5H9.847A2.492 2.492 0 007.5.833 2.492 2.492 0 005.153 2.5H1.667C.746 2.5 0 3.246 0 4.167v11.666c0 .921.746 1.667 1.667 1.667h11.666c.921 0 1.667-.746 1.667-1.667V4.167c0-.921-.746-1.667-1.667-1.667zM5 13.333H3.333v-1.666H5v1.666zm-.833-3.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM7.5 2.5a.834.834 0 110 1.667.834.834 0 010-1.667zm4.167 10.833h-5v-1.666h5v1.666zm0-4.166h-5V7.5h5v1.667zm1.666 6.666H1.667V4.167h11.666v11.666z"
        fill="#BFC8D1"
      />
    </svg>
  );
}

export default SvgReports;
