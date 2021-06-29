import * as React from 'react';

function SvgOrders(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.833.5v10H.166V13c0 1.378 1.122 2.5 2.5 2.5h10.833c1.371 0 2.5-1.13 2.5-2.5V.5H1.833zm1.666 1.667h10.834V13a.82.82 0 01-.834.833.834.834 0 01-.833-.833v-2.5H3.499V2.167zm1.667 1.666V5.5h1.667V3.833H5.166zm3.333 0V5.5h4.167V3.833H8.499zM5.166 7.167v1.666h1.667V7.167H5.166zm3.333 0v1.666h4.167V7.167H8.499zm-6.666 5h9.166V13c0 .292.051.572.144.833H2.666A.835.835 0 011.833 13v-.833z"
        fill="#BFC8D1"
      />
    </svg>
  );
}

export default SvgOrders;
