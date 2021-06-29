import * as React from 'react';

function SvgDocuments(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.667.833C.75.833 0 1.583 0 2.5v11.667h1.667V2.5h10V.833h-10zM5 4.167c-.917 0-1.667.75-1.667 1.666V17.5c0 .917.75 1.667 1.667 1.667h9.167c.916 0 1.666-.75 1.666-1.667V8.333l-4.166-4.166H5zm0 1.666h5.833v3.334h3.334V17.5H5V5.833zm1.667 5V12.5H12.5v-1.667H6.667zm0 3.334v1.666H12.5v-1.666H6.667z"
        fill="#BFC8D1"
      />
    </svg>
  );
}

export default SvgDocuments;
