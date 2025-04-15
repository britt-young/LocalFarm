import React from 'react'
//import { XMarkIcon } from '@heroicons/react/20/solid'

const AboutBanner = () => {
  return (
      <div className="flex items-center justify-center py-2 gap-x-4 bg-linear-to-r from-zinc-200 to-zinc-300">
        <p className="text-gray-900">
          <strong>Local Farm</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Connecting our community with fresh, healthy produce and proteins
        </p>
        <a
          href="events"
          className="flex-none rounded-full bg-lime-900 px-3.5 py-1 text-sm font-normal text-white shadow-sm transition duration-500 ease-in-out hover:border-black hover:text-black focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-white dark:focus:bg-white"
        >
          Find a pop-up location <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
  )
}

export default AboutBanner