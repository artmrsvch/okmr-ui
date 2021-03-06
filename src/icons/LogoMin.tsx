import * as React from 'react';

function SvgLogoMin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={23} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.479 4.364C5.809 1.98 8.259 0 11.054 0c2.794 0 5.245 1.98 5.575 4.364h3.233c1.24 0 2.246.976 2.246 2.181 0 .104-.008.207-.023.309L20.16 22.127C20.003 23.202 19.055 24 17.938 24H4.17c-1.118 0-2.065-.798-2.223-1.873L.023 6.854C-.153 5.661.7 4.556 1.928 4.386a2.31 2.31 0 01.317-.022H5.48zm8.861 0c-.34-1.159-1.717-2.182-3.286-2.182-1.57 0-2.946 1.023-3.287 2.181h6.574zM2.245 6.545h3.196v2.181h2.245V6.546h6.735v2.181h2.245V6.546h3.196l-1.924 15.272H4.17L2.245 6.546z"
        fill="#F47E1F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.37 13.091v-2.182h2.245v2.182H13.37zm1.43 2.507l1.837 1.255c-1.253 1.73-3.293 2.783-5.512 2.783-2.22 0-4.26-1.052-5.513-2.783l1.837-1.255a4.522 4.522 0 003.676 1.857c1.48 0 2.839-.701 3.675-1.857zm-8.166-4.689v2.182H8.88v-2.182H6.634z"
        fill="#F47E1F"
      />
    </svg>
  );
}

export default SvgLogoMin;
