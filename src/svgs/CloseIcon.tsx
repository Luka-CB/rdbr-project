interface propsIFace {
  size?: string;
}

const CloseIcon: React.FC<propsIFace> = ({ size = 15 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 4L3.5 11"
        stroke="#354451"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 4L10.5 11"
        stroke="#354451"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
