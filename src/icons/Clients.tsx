import * as React from 'react';

function SvgClients(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={21} height={14} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.5.333a2.917 2.917 0 100 5.834 2.917 2.917 0 000-5.834zM10.5 2c.69 0 1.25.56 1.25 1.25S11.19 4.5 10.5 4.5s-1.25-.56-1.25-1.25S9.81 2 10.5 2zm-6.25.833A2.083 2.083 0 104.25 7a2.083 2.083 0 000-4.166zm12.5 0a2.083 2.083 0 100 4.166 2.083 2.083 0 000-4.166zM4.25 4.27a.648.648 0 110 1.296.648.648 0 010-1.296zm12.5 0a.648.648 0 110 1.296.648.648 0 010-1.296zM10.5 7.833c-1.229 0-3.228.39-4.538 1.166a4.866 4.866 0 00-1.712-.332C2.386 8.667.5 9.83.5 11.11v2.557h20V11.11c0-1.279-1.886-2.443-3.75-2.443-.593 0-1.178.13-1.712.332-1.31-.775-3.31-1.166-4.538-1.166zm0 1.667c1.778 0 3.852.801 4.167 1.305V12H6.333v-1.195C6.648 10.301 8.722 9.5 10.5 9.5zm-6.25.833c.165 0 .314.029.465.053-.03.117-.048.239-.048.364V12h-2.5v-.825c.153-.267.998-.842 2.083-.842zm12.5 0c1.085 0 1.93.575 2.083.842V12h-2.5v-1.25c0-.126-.017-.247-.048-.364.151-.024.3-.053.465-.053z"
        fill="#BFC8D1"
      />
    </svg>
  );
}

export default SvgClients;