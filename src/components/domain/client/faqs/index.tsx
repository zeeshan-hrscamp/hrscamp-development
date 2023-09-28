import * as React from "react";
import ClientFaqCard from "./client-faq-card";

const ClientFaqs = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col basis-1/2 grid content-center">
          <h2 className="text-5xl text-green-600">Client FAQs</h2>
        </div>
        <div className="flex flex-col basis-1/2">
          <ClientFaqCard />
        </div>
      </div>
    </>
  );
};

export default ClientFaqs;
