import React from "react";

// EXAMPLE PLACEHOLDER COMPONENT
// Initialization for ES Users
import { Ripple, initTWE } from "tw-elements";

initTWE({ Ripple });

const EventCalendar = () => {
  return (
    <div className='m-40'>
      <div className="mb-4 flex items-center justify-center">
        <div
          className="inline-flex rounded-md shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-1 dark:focus:shadow-dark-1 dark:active:shadow-dark-1"
          role="group"
        >
          <button
            type="button"
            className="inline-block rounded-s bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none focus:ring-0 active:bg-primary-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Left
          </button>
          <button
            type="button"
            className="inline-block bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none focus:ring-0 active:bg-primary-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Middle
          </button>
          <button
            type="button"
            className="inline-block rounded-e bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none focus:ring-0 active:bg-primary-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Right
          </button>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center">
        <div className="inline-flex" role="group">
          <button
            type="button"
            className="inline-block rounded-s bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Left
          </button>
          <button
            type="button"
            className="inline-block bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Middle
          </button>
          <button
            type="button"
            className="inline-block rounded-e bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none dark:bg-primary-300 dark:hover:bg-primary-400 dark:focus:bg-primary-400 dark:active:bg-primary-400"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Right
          </button>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center">
        <div
          className="inline-flex rounded-md shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          role="group"
        >
          <button
            type="button"
            className="inline-block rounded-s bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-success-accent-300 focus:bg-success-accent-300 focus:outline-none focus:ring-0 active:bg-success-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Left
          </button>
          <button
            type="button"
            className="inline-block bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-success-accent-300 focus:bg-success-accent-300 focus:outline-none focus:ring-0 active:bg-success-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Middle
          </button>
          <button
            type="button"
            className="inline-block rounded-e bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-success-accent-300 focus:bg-success-accent-300 focus:outline-none focus:ring-0 active:bg-success-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Right
          </button>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center">
        <div
          className="inline-flex rounded-md shadow-danger-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-danger-2 focus:bg-danger-accent-300 focus:shadow-danger-2 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-danger-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          role="group"
        >
          <button
            type="button"
            className="inline-block rounded-s bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-danger-accent-300 focus:bg-danger-accent-300 focus:outline-none focus:ring-0 active:bg-danger-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Left
          </button>
          <button
            type="button"
            className="inline-block bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-danger-accent-300 focus:bg-danger-accent-300 focus:outline-none focus:ring-0 active:bg-danger-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Middle
          </button>
          <button
            type="button"
            className="inline-block rounded-e bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-danger-accent-300 focus:bg-danger-accent-300 focus:outline-none focus:ring-0 active:bg-danger-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Right
          </button>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center">
        <div
          className="inline-flex rounded-md shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          role="group"
        >
          <button
            type="button"
            className="inline-block rounded-s bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-warning-accent-300 focus:bg-warning-accent-300 focus:outline-none focus:ring-0 active:bg-warning-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Left
          </button>
          <button
            type="button"
            className="inline-block bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-warning-accent-300 focus:bg-warning-accent-300 focus:outline-none focus:ring-0 active:bg-warning-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Middle
          </button>
          <button
            type="button"
            className="inline-block rounded-e bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-warning-accent-300 focus:bg-warning-accent-300 focus:outline-none focus:ring-0 active:bg-warning-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Right
          </button>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center">
        <div
          className="inline-flex rounded-md shadow-info-3 transition duration-150 ease-in-out hover:bg-info-accent-300 hover:shadow-info-2 focus:bg-info-accent-300 focus:shadow-info-2 focus:outline-none focus:ring-0 active:bg-info-600 active:shadow-info-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          role="group"
        >
          <button
            type="button"
            className="inline-block rounded-s bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-info-accent-300 focus:bg-info-accent-300 focus:outline-none focus:ring-0 active:bg-info-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Left
          </button>
          <button
            type="button"
            className="inline-block bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-info-accent-300 focus:bg-info-accent-300 focus:outline-none focus:ring-0 active:bg-info-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Middle
          </button>
          <button
            type="button"
            className="inline-block rounded-e bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-info-accent-300 focus:bg-info-accent-300 focus:outline-none focus:ring-0 active:bg-info-600 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Right
          </button>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center">
        <div
          className="inline-flex rounded-md shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          role="group"
        >
          <button
            type="button"
            className="inline-block rounded-s bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 transition duration-150 ease-in-out hover:bg-neutral-200 focus:bg-neutral-200 focus:outline-none focus:ring-0 active:bg-neutral-200 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Left
          </button>
          <button
            type="button"
            className="inline-block bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 transition duration-150 ease-in-out hover:bg-neutral-200 focus:bg-neutral-200 focus:outline-none focus:ring-0 active:bg-neutral-200 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Middle
          </button>
          <button
            type="button"
            className="inline-block rounded-e bg-neutral-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 transition duration-150 ease-in-out hover:bg-neutral-200 focus:bg-neutral-200 focus:outline-none focus:ring-0 active:bg-neutral-200 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Right
          </button>
        </div>
      </div>
      <div className="mb-4 flex items-center justify-center">
        <div
          className="inline-flex rounded-md shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          role="group"
        >
          <button
            type="button"
            className="inline-block rounded-s bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none focus:ring-0 active:bg-neutral-900 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Left
          </button>
          <button
            type="button"
            className="inline-block bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none focus:ring-0 active:bg-neutral-900 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Middle
          </button>
          <button
            type="button"
            className="inline-block rounded-e bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none focus:ring-0 active:bg-neutral-900 motion-reduce:transition-none"
            data-twe-ripple-init=""
            data-twe-ripple-color="light"
          >
            Right
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
