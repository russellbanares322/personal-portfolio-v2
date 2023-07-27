import React from "react";
import contactIcon from "../../assets/contact.svg";

const Contact = () => {
  return (
    <div className="page-padding mb-20">
      <p className="section-title">GET IN TOUCH</p>
      <div className="flex justify-around  gap-12 mt-16  flex-wrap">
        <div className="w-[33rem]">
          <form className="bg-white relative w-[25rem] h-full text-blue flex flex-col p-5 rounded-md">
            <label className="my-1 font-semibold">Name</label>
            <input className="input-style" type="text" />
            <label className="my-1 font-semibold">Email Address</label>
            <input className="input-style" type="text" />
            <label className="my-1 font-semibold">Message</label>
            <textarea className="rounded-md border-2 border-black py-1 px-2 h-20 focus:outline-light-yellow focus:border:none" />
            <button className="button-style mt-5 font-semibold">Submit</button>
          </form>
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
