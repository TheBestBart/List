import React from "react";

export interface SVGProps {
  styles?: React.CSSProperties;
  className?: string;
  action?: () => void;
}

const Arrow: React.FC<SVGProps> = ({ styles, className = "prev-a" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5.63"
      height="9.583"
      viewBox="0 0 5.63 9.583"
      style={{ ...styles }}
    >
      <path
        className={className}
        d="M101.631,4.417,105.9.153a.525.525,0,0,1,.741,0l.314.314a.525.525,0,0,1,0,.741L103.37,4.789l3.585,3.585a.525.525,0,0,1,0,.741l-.314.314a.525.525,0,0,1-.741,0l-4.268-4.268a.529.529,0,0,1,0-.744Z"
        transform="translate(-101.478)"
      />
    </svg>
  );
};

export { Arrow };
