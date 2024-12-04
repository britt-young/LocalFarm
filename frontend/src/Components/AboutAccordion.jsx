import React from "react";

import { Collapse, initTWE } from "tw-elements";

initTWE({ Collapse });

const AboutAccordion = () => {
  return (
    <div>
      <div id="accordionFlushExample">
        <div className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="flush-headingOne">
            <button
              className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init=""
              data-twe-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
              <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="!visible border-0"
            data-twe-collapse-item=""
            data-twe-collapse-show=""
            aria-labelledby="flush-headingOne"
            data-twe-parent="#accordionFlushExample"
          >
            <div className="px-5 py-4">
              Placeholder content for this accordion, which is intended to
              demonstrate the
              <code>.accordion-flush</code> class. This is the first item's
              accordion body.
            </div>
          </div>
        </div>
        <div className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="flush-headingTwo">
            <button
              className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init=""
              data-twe-collapse-collapsed=""
              data-twe-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
              <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="!visible hidden border-0"
            data-twe-collapse-item=""
            aria-labelledby="flush-headingTwo"
            data-twe-parent="#accordionFlushExample"
          >
            <div className="px-5 py-4">
              Placeholder content for this accordion, which is intended to
              demonstrate the
              <code>.accordion-flush</code> class. This is the second item's
              accordion body. Let's imagine this being filled with some actual
              content.
            </div>
          </div>
        </div>
        <div className="rounded-none border border-b-0 border-e-0 border-s-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
          <h2 className="mb-0" id="flush-headingThree">
            <button
              className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
              type="button"
              data-twe-collapse-init=""
              data-twe-collapse-collapsed=""
              data-twe-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
              <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="!visible hidden"
            data-twe-collapse-item=""
            aria-labelledby="flush-headingThree"
            data-twe-parent="#accordionFlushExample"
          >
            <div className="px-5 py-4">
              Placeholder content for this accordion, which is intended to
              demonstrate the
              <code>.accordion-flush</code> class. This is the third item's
              accordion body. Nothing more exciting happening here in terms of
              content, but just filling up the space to make it look, at least
              at first glance, a bit more representative of how this would look
              in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAccordion;
