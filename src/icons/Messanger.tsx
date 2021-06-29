import * as React from 'react';

function SvgMessanger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={17} height={19} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3.5.667v1.666h11.666v8.334h1.667V2.333c0-.92-.746-1.666-1.667-1.666H3.499zM1.832 4C.916 4 .174 4.75.174 5.667l-.008 12.5 3.333-3.334h8.334c.916 0 1.666-.75 1.666-1.666v-7.5C13.5 4.75 12.75 4 11.833 4h-10zm0 1.667h10v7.5H2.809l-.488.488-.488.488V5.667z"
        fill="#BFC8D1"
      />
    </svg>
  );
}

export default SvgMessanger;
