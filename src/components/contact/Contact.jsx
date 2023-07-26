import React from "react";
import contactIcon from "../../assets/contact.svg";

const Contact = () => {
  return (
    <div className="page-padding mb-20">
      <p className="section-title">GET IN TOUCH</p>
      <div className="flex justify-around  gap-12 mt-16  flex-wrap">
        <div className="w-[33rem] bg-white relative">
          <p className="text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Contact form goes here
          </p>
        </div>
        <img
          className="object-cover sm:h-[15rem] md:h-[15rem] lg-[20rem] xl:h-[20rem]"
          src={contactIcon}
        />
      </div>
    </div>
  );
};

export default Contact;
