import * as React from "react";
import ClientTestimonialCard from "./client-testimonial-card";

const ClientTestimonials = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600 ">Client Testimonials</h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <ClientTestimonialCard />
        </div>
      </div>
    </>
  );
};

export default ClientTestimonials;
