interface propsIFace {
  color?: string | undefined;
}

const CheckIcon: React.FC<propsIFace> = ({ color = "#021526" }) => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.40918L3.125 9.591L0 5.87199"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
