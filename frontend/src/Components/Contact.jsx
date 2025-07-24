import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mb-24">
      <div
        id="map"
        className="relative h-[500px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9730.65798844992!2d-84.54385570372669!3d30.427394402227847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1732121294203!5m2!1sen!2sus"
          width="100%"
          height="120%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="container max-w-[1000px] mx-auto px-6 md:px-0">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.4)] px-5 py-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-10 md:px-5 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          <div className="flex flex-col items-start justify-center lg:p-2 p-0">
            <h3 className="mb-2">Local Farm Locations:</h3>
            {/* Local Grocery */}
            <div className="block min-w-full text-left">
              <div className="p-6">
                <h5>Local Grocery</h5>
                <h6>1234 Main St, Tallahassee, FL 32301</h6>
                <p className="mb-4 ">
                  All products sourced from Local Farm land and packaged on-site
                </p>
              </div>
            </div>

            {/* Market Booth */}
            <div className="block min-w-full text-left">
              <div className="p-6">
                <h5 >Market Booth</h5>
                <h6 >Booth #1111, Town Sqaure</h6>
                <p className="mb-4 ">
                  Limited selection of our most popular products
                </p>
              </div>
            </div>

            {/* Pop-Up Stand */}
            <div className="block min-w-full text-left">
              <div className="p-6">
                <h5 >Pop-Up Stand</h5>
                <Link to="/events" className="mb-4">
                  <p className="text-orange-400 hover:text-orange-400/50">(see our current pop-up locations)</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
