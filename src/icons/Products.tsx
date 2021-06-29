import * as React from 'react';

function SvgProducts(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={17} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.416.5c-.69 0-1.25.56-1.25 1.25V5.5h.833v8.333c0 .92.748 1.667 1.667 1.667h11.667c.919 0 1.666-.748 1.666-1.667V5.5h.834V1.75c0-.69-.561-1.25-1.25-1.25H1.416zm.417 1.667h13.333v1.666H1.833V2.167zM2.666 5.5h11.667l.001 8.333H2.666V5.5zm3.333 1.667v1.666h5V7.167H6z"
        fill="#BFC8D1"
      />
    </svg>
  );
}

export default SvgProducts;
