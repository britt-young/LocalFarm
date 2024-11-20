import React, { useState } from "react";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
    console.log("Form submitted");
  };

  return (
    <div className="mb-24">
      <div
        id="map"
        className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9730.65798844992!2d-84.54385570372669!3d30.427394402227847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1732121294203!5m2!1sen!2sus"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="container mx-auto px-6 md:px-12">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.4)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-wrap justify-center">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <h2 className= "font-semibold mb-10 flex justify-center text-xl">Contact Us Today</h2>
              <form onSubmit={handleSubmit}>
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                    id="exampleInput90"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                    htmlFor="exampleInput90"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6">
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                    id="exampleInput91"
                  />
                  <label
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                    htmlFor="exampleInput91"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative mb-6">
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary"
                  >
                    Message
                  </label>
                </div>
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  <input
                    className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    id="exampleCheck96"
                  />
                  <label
                    className="inline-block pl-[0.15rem] text-neutral-500"
                    htmlFor="exampleCheck96"
                  >
                    I agree to the processing of my personal data
                  </label>
                </div>
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-tight text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
