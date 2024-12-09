import React from 'react'
// Initialization for ES Users
import {
    Ripple,
    initTWE,
  } from "tw-elements";
  
  initTWE({ Ripple });

const ServicesCards = () => {
  return (
    <div className='flex lg:flex-row gap-x-3 sm:gap-y-6 flex-col justify-around'>
        {/* First Card */}
        <div className="block rounded-lg bg-white text-center shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
  <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
    Featured
  </div>
  <div className="p-6">
    <h5 className="mb-2 text-xl font-medium leading-tight">
      Special title treatment
    </h5>
    <p className="mb-4 text-base">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <button
      type="button"
      href="#"
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init=""
      data-twe-ripple-color="light"
    >
      Go somewhere
    </button>
  </div>
  <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-white/10 text-surface/75 dark:text-neutral-300">
    2 days ago
  </div>
</div>
{/* First Card */}
<div className="block rounded-lg bg-white text-center shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
  <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
    Featured
  </div>
  <div className="p-6">
    <h5 className="mb-2 text-xl font-medium leading-tight">
      Special title treatment
    </h5>
    <p className="mb-4 text-base">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <button
      type="button"
      href="#"
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init=""
      data-twe-ripple-color="light"
    >
      Go somewhere
    </button>
  </div>
  <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-white/10 text-surface/75 dark:text-neutral-300">
    2 days ago
  </div>
</div>
{/* First Card */}
<div className="block rounded-lg bg-white text-center shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
  <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
    Featured
  </div>
  <div className="p-6">
    <h5 className="mb-2 text-xl font-medium leading-tight">
      Special title treatment
    </h5>
    <p className="mb-4 text-base">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <button
      type="button"
      href="#"
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init=""
      data-twe-ripple-color="light"
    >
      Go somewhere
    </button>
  </div>
  <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-white/10 text-surface/75 dark:text-neutral-300">
    2 days ago
  </div>
</div>
    </div>
  )
}

export default ServicesCards