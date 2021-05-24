import * as React from 'react';

function SvgLinkIm(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.5.75h-4a.75.75 0 000 1.5h2.19L5.5 9.44a.75.75 0 001.06 1.06l7.19-7.19V5.5a.75.75 0 101.5 0v-4a.75.75 0 00-.75-.75z"
        fill="#A8CCFF"
      />
      <path
        d="M14.5 7.75a.75.75 0 00-.75.75v5.25H2.25V2.25H7.5a.75.75 0 000-1.5h-6a.75.75 0 00-.75.75v13a.75.75 0 00.75.75h13a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75z"
        fill="#A8CCFF"
      />
    </svg>
  );
}

export default SvgLinkIm;
