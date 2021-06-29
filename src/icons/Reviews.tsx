import * as React from 'react';

function SvgReviews(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={17} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.833.5C.916.5.174 1.25.174 2.167l-.006 9.998c0 .92.746 1.668 1.667 1.668H3.5v3.334l3.333-3.334h8.333c.917 0 1.667-.75 1.667-1.666v-10c0-.917-.75-1.667-1.667-1.667H1.833zm0 1.667h13.333v10H1.835l-.002-10zm6.667.885L7.393 5.671l-2.839.242 2.152 1.864-.646 2.775L8.5 9.081l2.44 1.471-.647-2.78 2.152-1.863-2.839-.243L8.5 3.052z"
        fill="#BFC8D1"
      />
    </svg>
  );
}

export default SvgReviews;
