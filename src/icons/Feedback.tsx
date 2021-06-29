import * as React from 'react';

function SvgFeedback(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={17} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.833.333C.912.333.166 1.08.166 2v10c0 .92.746 1.667 1.667 1.667h13.333c.92 0 1.667-.746 1.667-1.667V2c0-.92-.746-1.667-1.667-1.667H1.833zm0 1.667h13.333v.835L8.499 7 1.833 2.835V2zm0 2.502l6.666 4.165 6.667-4.165V12H1.833V4.502z"
        fill="#BFC8D1"
      />
    </svg>
  );
}

export default SvgFeedback;
