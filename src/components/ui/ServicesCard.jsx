"use client";

import { addOrder } from "@/redux/features/orderSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const ServicesCard = ({ service }) => {
  const dispatch = useDispatch();
  const myOrder = useSelector((state) => state.orders.orders);

  const handleAddOrder = () => {
    if (
      service._id ===
      myOrder.find((order) => order.serviceId === service._id)?.serviceId
    ) {
      toast.error("Service already added to cart");
    } else {
      const order = {
        serviceId: service._id,
        name: service.name,
        price: service.price,
        time: service.duration,
        description: service.description,
      };
      dispatch(addOrder(order));
      toast.success("Service added to cart");
    }
  };

  return (
    // <Link href={`/service/${service.id}`}>
    <div className="rounded-md bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300 border">
      <div className="card-body">
        <div className="mx-auto lg:mx-0 mb-3 p-2 rounded-md w-20 flex justify-center items-center bg-secondary/10">
          <Image
            src={service.icon}
            width={60}
            height={60}
            alt="service icon"
            className="w-12"
            unoptimized
          />
        </div>
        <hr />

        <h2 className="card-title text-secondary text-center">
          {service.name}
        </h2>
        <p className="text-gray-500">{service.description}</p>
        <ul className="list-disc pl-5 mt-3 text-gray-400">
          {service.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        {/* Service time and price */}
        <div className="mt-4">
          <p className=" font-semibold text-gray-600">
            Service Time: <span className="text-primary">{service.time}</span>
          </p>
          <p className="font-semibold text-gray-600">
            Price: <span className="text-primary">${service.price}</span>
          </p>
        </div>

        <button
          onClick={handleAddOrder}
          className="custom-outline-btn bg-secondary/5 border-secondary hover:bg-secondary mt-4"
        >
          Buy service
        </button>
      </div>
    </div>
    // </Link>
  );
};

export default ServicesCard;
