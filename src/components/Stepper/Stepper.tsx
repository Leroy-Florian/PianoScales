import React from 'react';

export const Stepper = ()=> {
  return (
    <div>
      <h2 className="sr-only">Steps</h2>

      <div>
        <ol
          className="flex items-center space-x-2 text-xs font-medium text-gray-500 sm:space-x-4"
        >
          <li className="flex">
            <span className="p-1.5 text-green-600 rounded bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
                                  Level

            </span>
          </li>

          <li className="flex items-center justify-center text-blue-600">
            <span
              className="leading-6 text-center w-6 h-6 text-[10px] font-bold rounded bg-blue-50"
            >
        2
            </span>

            <span className="ml-2"> Info </span>
          </li>

          <li className="flex items-center justify-end">
            <span
              className="leading-6 text-center w-6 h-6 text-[10px] font-bold rounded bg-gray-50 text-gray-600"
            >
        3
            </span>

            <span className="ml-2"> Play </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

