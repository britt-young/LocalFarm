import React from "react";

const EventsGrid = () => {
  return (
    <div>
      <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Card title
            </h5>
            <p className="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
              alt="Palm Springs Road"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Card title
            </h5>
            <p className="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
              alt="Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Card title
            </h5>
            <p className="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Card title
            </h5>
            <p className="mb-4 text-base">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
