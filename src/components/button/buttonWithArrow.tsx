import React from 'react';

interface Props {
  Text: string;
  onClick: () => void;
}
export const ButtonWithArrow = ({
  Text,
  onClick,
} : Props) => {
  return (
    <a
      className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
      onClick={() => onClick()}
    >
      <span className="text-sm font-medium"> {Text}</span>

      <svg
        className="w-5 h-5 ml-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  );
};
