export const UpArrow = () => {
  return (
    <svg
      viewBox="0 0 800 355"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="20"
          markerHeight="20"
          refX="15"
          refY="6"
          orient="auto"
        >
          <path d="M3,2 L5,6 L5,9 L11,5 Z" fill="#E6EDFF" />
        </marker>
      </defs>
      <path
        d="
          M0 355 
          C280 350, 560 350, 710 150
          L680 115
          C600 200, 500 330, 0 355 
          "
        fill="#E6EDFF"
      />
      <path
        d="M0 350 C300 350, 600 250, 780 30"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};

// export const DUpArrow = () => {
//   return (
//     <svg
//       viewBox="0 0 774 352"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-auto w-full"
//     >
//       <path d="
//       M775 20
//       L680 60
//       L730 80
//       L780 140
//       Z
//       "
//       fill="#E6EDFF"
//       />
//       <path
//         d="
//           M0 352 
//           C280 350, 560 250, 760 90
//           L750 50
//           C560 220, 280 310, 0 352 
//           "
//         fill="#E6EDFF"
//       />
//     </svg>
//   )
// }
