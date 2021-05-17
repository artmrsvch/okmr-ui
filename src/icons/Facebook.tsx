import * as React from 'react';

function SvgFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={20} height={20} rx={2} fill="#3B5998" />
      <g clipPath="url(#facebook_svg__clip0)">
        <path
          d="M11.832 5.576h1.14V3.588A14.738 14.738 0 0011.31 3.5c-1.645 0-2.772 1.035-2.772 2.937v1.75H6.722v2.222h1.816V16h2.226v-5.59h1.742l.277-2.222h-2.02v-1.53c0-.643.174-1.082 1.069-1.082z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="facebook_svg__clip0">
          <path fill="#fff" transform="translate(3.5 3.5)" d="M0 0h12.5v12.5H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgFacebook;
