import React from 'react'

function ComputerSvg(props) {
  return (
    <svg
    width="300px"
    height="300px"
    viewBox="0 0 79.375 79.375"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <filter
        id="filter12538"
        x={-0.49325}
        y={-0.27817}
        width={1.8684}
        height={1.3809}
        colorInterpolationFilters="sRGB"
      >
        <feFlood
          floodColor="rgb(0,0,0)"
          floodOpacity={0.25466}
          result="flood"
        />
        <feComposite
          in="flood"
          in2="SourceGraphic"
          operator="in"
          result="composite1"
        />
        <feGaussianBlur in="composite1" result="blur" stdDeviation={11.4094} />
        <feOffset
          dx={-8.620689655172413}
          dy={-46.76724137931034}
          result="offset"
        />
        <feComposite in="SourceGraphic" in2="offset" result="composite2" />
      </filter>
      <filter
        id="filter12526"
        x={-0.054378}
        y={-0.076356}
        width={1.1588}
        height={1.235}
        colorInterpolationFilters="sRGB"
      >
        <feFlood
          floodColor="rgb(0,0,0)"
          floodOpacity={0.27329}
          result="flood"
        />
        <feComposite
          in="flood"
          in2="SourceGraphic"
          operator="in"
          result="composite1"
        />
        <feGaussianBlur in="composite1" result="blur" stdDeviation={11.4094} />
        <feOffset
          dx={25.215517241379317}
          dy={29.525862068965523}
          result="offset"
        />
        <feComposite in="SourceGraphic" in2="offset" result="composite2" />
      </filter>
    </defs>
    <rect
      width={79.375}
      height={79.375}
      fill="none"
      stopColor="#000000"
      strokeLinecap="square"
      strokeLinejoin="bevel"
      strokeOpacity={0.81834}
      strokeWidth={0.52917}
    />
    <g id="computer" transform="matrix(.4065 0 0 .4065 103.88 19.011)">
      <rect
        transform="matrix(0 .30721 -.30721 0 64.68 154.44)"
        x={-181.85}
        y={600.86}
        width={72.992}
        height={266.57}
        ry={87.941}
        fill="#4d4d4d"
        filter="url(#filter12538)"
        stopColor="#000000"
      />
      <path
        transform="matrix(.30721 0 0 .30721 -90.582 240.71)"
        d="m-464.34-830.35 22.632-12.718 3.4679 12.445zm36.199-15.909h437.17c16.729 0 30.197 13.468 30.197 30.197v291.66c0 16.729-13.468 30.197-30.197 30.197h-437.17c-16.729 0-30.197-13.468-30.197-30.197v-291.66c0-16.729 13.468-30.197 30.197-30.197zm453.78 347.1-20.505 11.513-5.5938-11.185z"
        fill="#666"
        filter="url(#filter12526)"
        stopColor="#000000"
      />
      <rect
        x={-170.98}
        y={85.064}
        width={24.263}
        height={22.324}
        ry={3.7695}
        fill="#909090"
        stopColor="#000000"
      />
      <rect
        transform="matrix(0 .30721 -.30721 0 64.68 153.44)"
        x={-181.85}
        y={600.86}
        width={72.992}
        height={266.57}
        ry={87.941}
        fill="#666"
        filter="url(#filter12538)"
        stopColor="#000000"
      />
      <rect
        x={-172.99}
        y={85.114}
        width={24.263}
        height={22.324}
        ry={3.7695}
        fill="#666"
        stopColor="#000000"
      />
      <rect
        x={-237.28}
        y={-15.983}
        width={152.85}
        height={108.15}
        ry={9.2768}
        fill="#1a1a1a"
        stopColor="#000000"
      />
      <path
        d="m-177.68-8.9276 19.902 94.042h57.147c5.3377 0 9.635-3.5975 9.635-8.0663v-77.909c0-4.4688-4.2972-8.0665-9.635-8.0665z"
        stopColor="#000000"
      />
      <rect
        x={-233.23}
        y={-11.206}
        width={141.06}
        height={94.042}
        ry={8.0664}
        fill="#fff"
        fillOpacity={0.77509}
        stopColor="#000000"
      />
      <path
        d="m-188.3 103.42c-0.4809 1.2811-1.9408 1.2658-4.2354 2.2711l-2.4218 1.4016c-1.8433 1.0668-3.3243 2.7534-4.343 1.8397-1.4678-1.3167 2.5593-4.2092 3.3208-4.6448 0 0 0.73291-0.47302 1.2763-0.7608 0.54344-0.28777 1.5112-0.72258 1.5112-0.72258 1.9684-0.98152 5.4455-0.85948 4.8917 0.61589z"
        fill="#ccc"
        fillOpacity={0.087238}
        stopColor="#000000"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeOpacity={0.91696}
        strokeWidth={0.15399}
      />
      <g id="gear-bot">
        <circle
          cx={-175.75}
          cy={48.15}
          r={13.448}
          fill="#fff"
          fillOpacity={0.86851}
          stopColor="#000000"
        />
        <path
          d="m-178.97 26.848-4.6504 1.246 1.1235 4.1929a17.465 17.208 0 0 0-3.6604 2.0556l-3.0328-3.0328-3.4043 3.4043 2.9805 2.9805a17.465 17.208 0 0 0-2.1757 3.6666l-4.0205-1.0773-1.246 4.6504 3.9845 1.0676a17.465 17.208 0 0 0-0.14747 2.148 17.465 17.208 0 0 0 0.14747 2.148l-3.9845 1.0676 1.246 4.6504 4.0205-1.0773a17.465 17.208 0 0 0 2.1757 3.6666l-2.9805 2.9805 3.4043 3.4043 3.0328-3.0328a17.465 17.208 0 0 0 3.6604 2.0556l-1.1235 4.1929 4.6504 1.246 1.1329-4.2283a17.465 17.208 0 0 0 2.0827 0.13442 17.465 17.208 0 0 0 2.0828-0.13442l1.1329 4.2283 4.6504-1.246-1.1235-4.1929a17.465 17.208 0 0 0 3.6603-2.0556l3.0328 3.0328 3.4043-3.4043-2.9805-2.9805a17.465 17.208 0 0 0 2.1757-3.6665l4.0205 1.0772 1.2461-4.6504-3.9845-1.0676a17.465 17.208 0 0 0 0.14747-2.148 17.465 17.208 0 0 0-0.13726-2.1508l3.9743-1.0649-1.2461-4.6504-4.009 1.0742a17.465 17.208 0 0 0-2.1811-3.6695l2.9745-2.9745-3.4043-3.4043-3.0249 3.0249a17.465 17.208 0 0 0-3.666-2.0563l1.1212-4.1842-4.6504-1.246-1.1302 4.218a17.465 17.208 0 0 0-2.0855-0.12421 17.465 17.208 0 0 0-2.0827 0.13442z"
          fill="#1a1a1a"
          fillOpacity={0.19204}
          stopColor="#000000"
          strokeLinecap="square"
          strokeLinejoin="bevel"
          strokeOpacity={0.91696}
          strokeWidth={0.10252}
        />
        <circle
          cx={-175.75}
          cy={48.15}
          r={14.861}
          fill="#1a1a1a"
          fillOpacity={0.11765}
          stopColor="#000000"
        />
        <circle
          cx={-175.75}
          cy={48.15}
          r={6.5797}
          fill="#1a1a1a"
          fillOpacity={0.11765}
          stopColor="#000000"
        />
        <circle
          cx={-175.75}
          cy={48.15}
          r={2.9634}
          fill="#e7e7e7"
          stopColor="#000000"
        />
      </g>
      <g id="gear-top">
        <path
          d="m-148.27 2.9568-4.6504 1.246 1.1235 4.1929a17.465 17.208 0 0 0-3.6604 2.0556l-3.0328-3.0328-3.4043 3.4043 2.9805 2.9805a17.465 17.208 0 0 0-2.1757 3.6666l-4.0205-1.0773-1.246 4.6504 3.9845 1.0676a17.465 17.208 0 0 0-0.14747 2.148 17.465 17.208 0 0 0 0.14747 2.148l-3.9845 1.0676 1.246 4.6504 4.0205-1.0773a17.465 17.208 0 0 0 2.1757 3.6666l-2.9805 2.9805 3.4043 3.4043 3.0328-3.0328a17.465 17.208 0 0 0 3.6604 2.0556l-1.1235 4.1929 4.6504 1.246 1.1329-4.2283a17.465 17.208 0 0 0 2.0827 0.13442 17.465 17.208 0 0 0 2.0828-0.13442l1.1329 4.2283 4.6504-1.246-1.1235-4.1929a17.465 17.208 0 0 0 3.6603-2.0556l3.0328 3.0328 3.4043-3.4043-2.9805-2.9805a17.465 17.208 0 0 0 2.1757-3.6665l4.0205 1.0772 1.2461-4.6504-3.9845-1.0676a17.465 17.208 0 0 0 0.14747-2.148 17.465 17.208 0 0 0-0.13726-2.1508l3.9743-1.0649-1.2461-4.6504-4.009 1.0742a17.465 17.208 0 0 0-2.1811-3.6695l2.9744-2.9745-3.4043-3.4043-3.0248 3.0249a17.465 17.208 0 0 0-3.666-2.0563l1.1212-4.1842-4.6504-1.246-1.1302 4.218a17.465 17.208 0 0 0-2.0855-0.12421 17.465 17.208 0 0 0-2.0827 0.13442z"
          fill="#1a1a1a"
          fillOpacity={0.19204}
          stopColor="#000000"
          strokeLinecap="square"
          strokeLinejoin="bevel"
          strokeOpacity={0.91696}
          strokeWidth={0.10252}
        />
        <circle
          cx={-151.21}
          cy={17.457}
          r={3.7466}
          fill="#e7e7e7"
          stopColor="#000000"
        />
        <circle
          cx={-138.89}
          cy={17.457}
          r={3.7466}
          fill="#e7e7e7"
          stopColor="#000000"
        />
        <circle
          cx={-138.89}
          cy={31.06}
          r={3.7466}
          fill="#e7e7e7"
          stopColor="#000000"
        />
        <circle
          cx={-151.21}
          cy={31.06}
          r={3.7466}
          fill="#e7e7e7"
          stopColor="#000000"
        />
      </g>
    </g>
  </svg>
  )
}

function PhoneSvg(props) {
  return (
    <svg
    width="79.375mm"
    height="79.375mm"
    viewBox="0 0 79.375 79.375"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <filter
        id="filter2791"
        x={-0.05888}
        y={-0.033761}
        width={1.1793}
        height={1.114}
        colorInterpolationFilters="sRGB"
      >
        <feFlood
          floodColor="rgb(0,0,0)"
          floodOpacity={0.27843}
          result="flood"
        />
        <feComposite
          in="flood"
          in2="SourceGraphic"
          operator="in"
          result="composite1"
        />
        <feGaussianBlur in="composite1" result="blur" stdDeviation={10} />
        <feOffset dx={25.0831} dy={33.0565} result="offset" />
        <feComposite in="SourceGraphic" in2="offset" result="composite2" />
      </filter>
    </defs>
    <rect
      width={79.375}
      height={79.375}
      fill="none"
      stopColor="#000000"
      strokeLinecap="square"
      strokeLinejoin="bevel"
      strokeOpacity={0.81834}
      strokeWidth={0.52917}
    />
    <g id="phone" transform="matrix(.34916 0 0 .34916 175.41 -.20732)">
      <g
        transform="matrix(-.20488 .10839 .10839 .20488 -527.5 367.69)"
        fill="#666"
        filter="url(#filter2791)"
      >
        <path
          d="m-843.15-349.43-21.375 14.788-3.028-12.332"
          stopColor="#000000"
        />
        <path
          d="m-1235.4-1025.3 19.036-13.178 3.4183 12.229"
          stopColor="#000000"
        />
        <rect
          x={-1232.8}
          y={-1045.5}
          width={405.03}
          height={703.89}
          ry={38.787}
          stopColor="#000000"
        />
      </g>
      <rect
        transform="matrix(-.88392 .46763 .46763 .88392 0 0)"
        x={347.68}
        y={-160.7}
        width={93.882}
        height={163.15}
        ry={8.9904}
        fill="#1a1a1a"
        stopColor="#000000"
      />
      <path
        d="m-388.81 30.05c-0.83322 0.13117-1.6604 0.39263-2.4498 0.8102l-60.728 32.128c-3.8219 2.0219-5.2709 6.7266-3.2489 10.548l57.144 108.01 9.8967-150.35-0.57159-1.0806c-0.013-0.02478-0.0292-0.04682-0.0425-0.07139z"
        stopColor="#000000"
      />
      <rect
        transform="matrix(-.88392 .46763 .46763 .88392 0 0)"
        x={352.47}
        y={-155.69}
        width={84.312}
        height={141.64}
        ry={7.8047}
        fill="#fff"
        fillOpacity={0.77647}
        stopColor="#000000"
      />
      <circle
        transform="matrix(-.88392 .46763 .46763 .88392 0 0)"
        cx={394.62}
        cy={-5.805}
        r={4.9573}
        fill="#666"
        stopColor="#000000"
      />
      <rect
        transform="matrix(-.88392 .46763 .46763 .88392 0 0)"
        x={387.87}
        y={-159.42}
        width={13.514}
        height={1.9481}
        ry={0.97403}
        fill="#666"
        stopColor="#000000"
      />
      <rect
        transform="rotate(-29.197)"
        x={-396.3}
        y={-16.779}
        width={3.8268}
        height={3.8268}
        fill="none"
        stopColor="#000000"
        stroke="#999"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeOpacity={0.81834}
        strokeWidth={0.18398}
      />
      <g id="gear-phone">
        <path
          d="m-398.16 96.45-2.6618 2.4718 2.2287 2.3999a12.983 13.177 62.119 0 0-1.7159 2.6624l-3.0927-0.95259-1.0693 3.4716 3.0393 0.93613a12.983 13.177 62.119 0 0-0.15725 3.2129l-3.0615 0.70011 0.80978 3.5411 3.0341-0.69387a12.983 13.177 62.119 0 0 0.65953 1.4846 12.983 13.177 62.119 0 0 0.85623 1.3805l-2.2807 2.1179 2.4718 2.6618 2.3014-2.1371a12.983 13.177 62.119 0 0 2.7446 1.6777l-0.9361 3.0393 3.4716 1.0693 0.95259-3.0927a12.983 13.177 62.119 0 0 3.1665 0.0794l0.73012 3.1928 3.5411-0.80978-0.73635-3.2196a12.983 13.177 62.119 0 0 1.4364-0.64528 12.983 13.177 62.119 0 0 1.3417-0.82447l2.2474 2.4202 2.6618-2.4718-2.2287-2.4a12.983 13.177 62.119 0 0 1.7159-2.6624l3.0928 0.95257 1.0693-3.4716-3.0393-0.93613a12.983 13.177 62.119 0 0 0.15726-3.2129l3.0614-0.70005-0.80967-3.5412-3.0341 0.69385a12.983 13.177 62.119 0 0-0.65951-1.4845 12.983 13.177 62.119 0 0-0.85046-1.386l2.2749-2.1125-2.4719-2.6617-2.2946 2.131a12.983 13.177 62.119 0 0-2.7494-1.6778l0.93434-3.0332-3.4716-1.0693-0.9501 3.0847a12.983 13.177 62.119 0 0-3.1705-0.07796l-0.72859-3.186-3.5411 0.80978 0.7345 3.2118a12.983 13.177 62.119 0 0-1.4347 0.65304 12.983 13.177 62.119 0 0-1.3416 0.82453zm5.1723 6.9323 2.4808 4.6893a2.4773 2.4773 0 0 0-0.46831 1.5052l-4.6837 2.4779a6.4166 6.4166 0 0 1 2.6712-8.6723zm1.9375-1.025a6.4166 6.4166 0 0 1 8.6724 2.6711l-4.6826 2.4773a2.4773 2.4773 0 0 0-1.5094-0.45983zm-3.5711 11.658 4.6837-2.4779a2.4773 2.4773 0 0 0 1.5078 0.45971l2.4808 4.6893a6.4166 6.4166 0 0 1-8.6723-2.6711zm8.5974-4.5484 4.6837-2.4779a6.4166 6.4166 0 0 1-2.6712 8.6724l-2.4808-4.6892a2.4773 2.4773 0 0 0 0.46835-1.5053z"
          fill="#1a1a1a"
          fillOpacity={0.19204}
          stopColor="#000000"
          strokeLinecap="square"
          strokeLinejoin="bevel"
          strokeOpacity={0.91696}
          strokeWidth={0.077354}
        />
        <circle
          cx={-388.5}
          cy={109.52}
          r={1.3166}
          fill="#f2f2f2"
          fillOpacity={0.3045}
          stopColor="#000000"
        />
      </g>
    </g>
  </svg>

  )
}

function ListSvg (props) {
  return (
    <svg
    width="100px"
    height="80.223px"
    viewBox="0 0 100 80.223"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <linearGradient
        id="linearGradient5656"
        x1={-213.41}
        x2={-213.41}
        y1={272.33}
        y2={399.69}
        gradientUnits="userSpaceOnUse"
        xlinkHref="#linearGradient5654"
      />
      <linearGradient id="linearGradient5654">
        <stop stopColor="#868686" offset={0} />
        <stop stopColor="#666" stopOpacity={0} offset={1} />
      </linearGradient>
    </defs>
    <g
      transform="matrix(.62992 0 0 .62992 185.16 -171.55)"
      fill="url(#linearGradient5656)"
    >
      <circle cx={-282.29} cy={283.99} r={11.654} stopColor="#000000" />
      <circle cx={-282.29} cy={318.67} r={11.654} stopColor="#000000" />
      <circle cx={-282.29} cy={353.35} r={11.654} stopColor="#000000" />
      <circle cx={-282.29} cy={388.03} r={11.654} stopColor="#000000" />
      <g id="lines-g">
        <rect
          id="line-a"
          x={-248.82}
          y={272.33}
          width={113.62}
          height={23.308}
          ry={11.654}
          stopColor="#000000"
        />
        <rect
          id="line-b"
          x={-248.82}
          y={307.01}
          width={113.62}
          height={23.308}
          ry={11.654}
          stopColor="#000000"
        />
        <rect
          id="line-c"
          x={-248.82}
          y={341.7}
          width={113.62}
          height={23.308}
          ry={11.654}
          stopColor="#000000"
        />
        <rect
          id="line-d"
          x={-248.82}
          y={376.38}
          width={113.62}
          height={23.308}
          ry={11.654}
          stopColor="#000000"
        />
      </g>
    </g>
  </svg>
  )
}

export {ComputerSvg, PhoneSvg, ListSvg }
