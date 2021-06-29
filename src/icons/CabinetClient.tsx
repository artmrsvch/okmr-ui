import * as React from 'react';

function SvgCabinetClient(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={17} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.643.5L.654 8.488a1.655 1.655 0 00-.488 1.179c0 .445.173.863.488 1.178l5 5c.315.315.734.488 1.179.488.445 0 .863-.173 1.178-.488L16 7.857V.5H8.643zm.69 1.667h5v5l-7.5 7.5-5-5 7.5-7.5zm2.5 1.666a.833.833 0 100 1.667.833.833 0 000-1.667z"
        fill="#BFC8D1"
      />
    </svg>
  );
}

export default SvgCabinetClient;
