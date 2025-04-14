import { SVGProps } from 'react';

const CheckboxChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={20} height={20} rx={4} fill="currentColor" />
    <path
      d="M14 7L8.5 12.5L6 10"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckboxChecked;
