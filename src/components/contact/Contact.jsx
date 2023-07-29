import React, { useContext } from "react";
import contactIcon from "../../assets/svg/contact.svg";
import { PageContext } from "../../context/PageContext";

const Contact = () => {
  const { isDarkMode, contactRef } = useContext(PageContext);

  return (
    <div
      ref={contactRef}
      className={`${
        isDarkMode ? "text-white" : "text-blue"
      } page-padding mb-20`}
    >
      <p className="section-title">GET IN TOUCH</p>
      <div className="flex justify-around items-center gap-12 mt-16 relative flex-wrap">
        <div className="w-[33rem] z-20">
          <form
            className={`bg-white mt-[2rem] md:mt-0 relative w-[25rem] h-full text-blue flex flex-col p-5 rounded-md border-l-4 border-l-yellow border-b-4 border-b-yellow ${
              !isDarkMode && "border-t border-r"
            }`}
          >
            <label className="my-1 font-semibold">Name</label>
            <input className="input-style" type="text" />
            <label className="my-1 font-semibold">Email Address</label>
            <input className="input-style" type="text" />
            <label className="my-1 font-semibold">Message</label>
            <textarea className="rounded-md border border-gray-300 shadow-md py-1 px-2 h-20 focus:outline-blue focus:border:none" />
            <button className="button-style mt-5 font-semibold">Submit</button>
          </form>
        </div>
        <img
          className="-top-14 bottom scale-x-[-1] md:scale-[1] absolute z-10 md:static object-cover sm:h-[20rem] md:h-[15rem] lg-[20rem] xl:h-[20rem]"
          src={contactIcon}
        />
      </div>
    </div>
  );
};

export default Contact;
