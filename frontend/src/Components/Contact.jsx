import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_53ecpnp", "template_lkmqk12", form.current, {
        publicKey: "G_2EUKwm4DuLTm0pd",
      })
      .then(
        () => {
          setMessage('Thank you for signing up!');
          form.current.reset(); // Reset the form fields after successful submission
        },
        (error) => {
          setMessage('Oops! Something went wrong. Please try again later.');
          console.log('FAILED...', error.text);
        },
      );
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Location Card */}
            <div className="w-full mb-12 md:mb-0">
              <h2 className="font-semibold mb-10 flex justify-center text-xl">
                Visit us!
              </h2>
              <div className="block max-w-full rounded-lg bg-white text-left text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div className="p-6 mb-2">
                  <h5 className="mb-1 text-xl font-medium leading-tight ">
                    Local Grocery
                  </h5>
                  <h6 className="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300">
                    1234 Main St, Tallahassee, FL 32301
                  </h6>
                  <p className="mb-4 text-base leading-normal">
                    Selected stock of our favorite products, including fresh
                    produce and dairy
                  </p>
                </div>
              </div>
              {/* Location Card */}
              <div className="w-full mb-12 md:mb-0">
                <div className="block max-w-full rounded-lg bg-white text-left text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                  <div className="p-6 mb-2">
                    <h5 className="mb-1 text-xl font-medium leading-tight ">
                      Market Booth
                    </h5>
                    <h6 className="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300">
                      Booth #1111, Town Sqaure
                    </h6>
                    <p className="mb-4 text-base leading-normal">
                      Limited selection of our most popular products
                    </p>
                  </div>
                </div>
              </div>
              {/* Location Card */}
              <div className="w-full mb-12 md:mb-0">
                <div className="block max-w-full rounded-lg bg-white text-left text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                  <div className="p-6">
                    <h5 className="mb-1 text-xl font-medium leading-tight ">
                      Pop-Up Stand
                    </h5>
                    <h6 className="mb-2 text-base font-medium leading-tight text-surface/75 dark:text-neutral-300">
                      Location Varies, be sure to check our current location by
                      clicking below
                    </h6>
                    <a
                      type="button"
                      href="events"
                      className="uppercase pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400"
                    >
                      Current pop-up locations
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="w-full">
              <h2 className="font-semibold mb-10 text-center text-xl text-gray-800">
                Subscribe to our Events Newsletter
              </h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="user_name"
                    className="text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="user_email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    type="submit"
                    value="Send"
                    className="w-full rounded border-2 bg-lime-900 border-white px-6 pb-[6px] pt-2 text-xs font-normal uppercase tracking-widest leading-normal text-white transition duration-500 ease-in-out hover:border-black hover:text-black focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-white dark:focus:bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]"
                  />
                </div>
              </form>

              {/* Confirmation Message */}
              {message && (
                <div className="mt-6 text-center text-lg font-normal text-gray-500">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
