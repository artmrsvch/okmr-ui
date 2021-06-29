import * as React from 'react';

function SvgVector16(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={21} height={19} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.498.998l-6 .006L5.664 3H2.5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-3.156L13.498.998zm-.877 2L14.467 5H18.5v12h-16V5h4.043l1.836-1.998 4.242-.004zM10.5 6a5 5 0 10.001 10.001A5 5 0 0010.5 6zm0 2a3 3 0 110 6 3 3 0 010-6z"
        fill="#6FA7F5"
      />
    </svg>
  );
}

export default SvgVector16;
