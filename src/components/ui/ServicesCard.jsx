import Image from "next/image";

const ServicesCard = ({ service }) => {
  return (
    // <Link href={`/service/${service.id}`}>
    <div className="rounded-md bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300 border">
      <div className="card-body ">
        <div className=" mx-auto lg:mx-0 mb-3 p-2 rounded-md w-20 flex justify-center items-center bg-secondary/10">
          <Image src={service.icon} alt="service icon" className="w-12" />
        </div>
        <hr />

        <h2 className="card-title text-secondary text-center">
          {service.title}
        </h2>
        <p className="text-gray-500">{service.description}</p>
        <ul className="list-disc pl-5 mt-3 text-gray-400">
          {service.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <button className="custom-outline-btn bg-secondary/5 border-secondary hover:bg-secondary">
          Buy service
        </button>
      </div>
    </div>
    // </Link>
  );
};

export default ServicesCard;
