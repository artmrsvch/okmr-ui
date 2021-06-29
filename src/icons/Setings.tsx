import * as React from 'react';

function SvgSetings(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={17} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.833.5v3.333L.166 7.167v1.666h.833v5c0 .921.746 1.667 1.667 1.667h11.667c.92 0 1.666-.746 1.666-1.667v-5h.834V7.167l-1.667-3.334V.5H1.833zm1.666 1.667h10v1.666h-10V2.167zM2.863 5.5h11.273l.833 1.667H2.03L2.864 5.5zm-.197 3.333h1.667v3.334h5V8.833h1.666v5H2.666v-5zm3.333 0h1.667V10.5H5.999V8.833zm6.667 0h1.667v5h-1.667v-5z"
        fill="#BFC8D1"
      />
    </svg>
  );
}

export default SvgSetings;
