
const EventsHeader = () => {
  return (
    <div>
        <header>
                {/* Hero section with background image, heading, subheading and button */}
                <div className="relative h-[350px] overflow-hidden bg-[url(./public/images/eventsheader.jpg)] bg-cover bg-center bg-no-repeat">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/0 bg-fixed">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center  md:px-12">
                        <h2 className="m-6 text-white">
        Upcoming Local Events
      </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
      
    </div>
  );
};

export default EventsHeader;
