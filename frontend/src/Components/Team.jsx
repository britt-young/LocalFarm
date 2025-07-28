import john from "../assets/imgs/people/farmerjohn.jpg";
import jane from "../assets/imgs/people/farmerjane.webp";
import sara from "../assets/imgs/people/farmersara.jpg";
import ray from "../assets/imgs/people/farmerray.jpg";
import leonard from "../assets/imgs/people/farmerleonard.jpg";
import rico from "../assets/imgs/people/farmerrico.jpg";

const teamMembers = [
  {
    id: "john",
    img: john,
    alt: "John Jack Bennett",
    name: 'John "Jack" Bennett',
    title: "Owner of Local Farm",
    description:
      "Growing up on his family’s organic farm in Willow Creek, Jack learned the values of hard work and land stewardship, which he carries into his own farming practice today. Committed to giving back, he donates a portion of his harvest to local food banks and works to create a stronger, more sustainable local food system. Through his farm, Jack hopes to pass on his legacy of care for the land and the community to future generations.",
  },
  {
    id: "jane",
    img: jane,
    alt: "Jane Bennett",
    name: "Jane Bennett",
    title: "Produce Professional",
    description:
      "Jane is a hands-on partner on the farm, where she helps manage everything from crop planning to caring for their livestock. She’s particularly passionate about food education, often hosting workshops for local families on how to cook with fresh, seasonal ingredients. Emily also plays a key role in their community involvement, organizing charity events and coordinating farm tours to educate others about sustainable agriculture. Together with Jack, she is committed to building a healthier, more connected community, ensuring that the next generation grows up with a deep appreciation for the land and the food it provides.",
  },
  {
    id: "sara",
    img: sara,
    alt: "Sara-Ann James",
    name: "Sara-Ann James",
    title: "Veterinarian",
    description:
      "Growing up on his family’s organic farm in Willow Creek, Jack learned the values of hard work and land stewardship, which he carries into his own farming practice today. Committed to giving back, he donates a portion of his harvest to local food banks and works to create a stronger, more sustainable local food system. Through his farm, Jack hopes to pass on his legacy of care for the land and the community to future generations.",
  },
  {
    id: "ray",
    img: ray,
    alt: "Ray Huddleson",
    name: "Ray Huddleson",
    title: "Agricultural Specialist",
    description:
      "Jane is a hands-on partner on the farm, where she helps manage everything from crop planning to caring for their livestock. She’s particularly passionate about food education, often hosting workshops for local families on how to cook with fresh, seasonal ingredients. Emily also plays a key role in their community involvement, organizing charity events and coordinating farm tours to educate others about sustainable agriculture. Together with Jack, she is committed to building a healthier, more connected community, ensuring that the next generation grows up with a deep appreciation for the land and the food it provides.",
  },
  {
    id: "leonard",
    img: leonard,
    alt: "Leonard Robinson",
    name: "Leonard Robinson",
    title: "Market Produce Manager",
    description:
      "Growing up on his family’s organic farm in Willow Creek, Jack learned the values of hard work and land stewardship, which he carries into his own farming practice today. Committed to giving back, he donates a portion of his harvest to local food banks and works to create a stronger, more sustainable local food system. Through his farm, Jack hopes to pass on his legacy of care for the land and the community to future generations.",
  },
  {
    id: "rico",
    img: rico,
    alt: "Rico Hechieverria",
    name: "Rico Hechieverria",
    title: "Distribution Team Lead",
    description:
      "Jane is a hands-on partner on the farm, where she helps manage everything from crop planning to caring for their livestock. She’s particularly passionate about food education, often hosting workshops for local families on how to cook with fresh, seasonal ingredients. Emily also plays a key role in their community involvement, organizing charity events and coordinating farm tours to educate others about sustainable agriculture. Together with Jack, she is committed to building a healthier, more connected community, ensuring that the next generation grows up with a deep appreciation for the land and the food it provides.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen my-16 lg:my-20">
      <h3 className="flex justify-center mb-10 ">Meet the Local Team</h3>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-7xl mx-auto p-4">
        {teamMembers.map(({ id, img, alt, name, title, description }) => (
          <div
            key={id}
            className="flex flex-col bg-white rounded-lg shadow-md h-full"
          >
            <img
              src={img}
              alt={alt}
              loading="lazy"
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className="flex flex-col  flex-grow p-6 bg-zinc-50">
              <div>
                <h6 className="text-black font-bold">{title}</h6>
                <h4 className="mb-4 text-gray-700">{name}</h4>
              </div>
              <p className="text-sm text-gray-600 mt-2">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
