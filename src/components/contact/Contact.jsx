import React, { useContext, useState } from "react";
import contactIcon from "../../assets/svg/contact.svg";
import { PageContext } from "../../context/PageContext";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { isDarkMode, contactRef } = useContext(PageContext);
  const [isInputDirty, setIsInputEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: "",
  });

  const {
    VITE_REACT_APP_SERVICE_ID,
    VITE_REACT_APP_TEMPLATE_ID,
    VITE_REACT_APP_USER_ID,
  } = import.meta.env;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    const formValues = e.target;
    e.preventDefault();
    if (!formData.userName || !formData.email || !formData.message) {
      return setIsInputEmpty(true);
    } else {
      setIsLoading(true);

      emailjs
        .sendForm(
          VITE_REACT_APP_SERVICE_ID,
          VITE_REACT_APP_TEMPLATE_ID,
          formValues,
          VITE_REACT_APP_USER_ID
        )
        .then(
          () => {
            toast.success("Message sent successfully");
            setFormData({
              userName: "",
              email: "",
              message: "",
            });
            setIsInputEmpty(false);
            setIsLoading(false);
          },
          () => {
            toast.error("Failed to send message, please try again");
            setIsLoading(false);
          }
        );
    }
  };

  return (
    <div
      ref={contactRef}
      className={`${
        isDarkMode ? "text-white" : "text-blue"
      } page-padding page-padding-top mb-20`}
    >
      <p className="section-title">GET IN TOUCH</p>
      <div className="flex justify-around items-center gap-12 mt-16 relative flex-wrap">
        <div className="w-[33rem] z-20">
          <form
            onSubmit={handleSubmit}
            className={`bg-white mx-auto w-[20rem] md:mx-0  mt-[2rem] md:mt-0 relative md:w-[25rem] h-full text-blue flex flex-col p-5 rounded-md border-l-4 border-l-yellow border-b-4 border-b-yellow ${
              !isDarkMode && "border-t border-r"
            }`}
          >
            <label className="input-label-style">Name</label>
            <input
              value={formData.userName}
              name="userName"
              onChange={handleFormChange}
              className={`input-style ${
                isInputDirty && !formData.userName
                  ? "border border-red"
                  : "border border-gray-300"
              } mb-2`}
              type="text"
            />
            <p
              className={`${
                isInputDirty && !formData.userName ? "visible" : "hidden"
              } text-xs text-red flex items-center gap-1`}
            >
              Name is required
              <HiOutlineExclamationCircle size={15} />
            </p>
            <label className="input-label-style">Email Address</label>
            <input
              value={formData.email}
              name="email"
              onChange={handleFormChange}
              className={`input-style ${
                isInputDirty && !formData.email
                  ? "border border-red"
                  : "border border-gray-300"
              } mb-2`}
              type="email"
            />
            <p
              className={`${
                isInputDirty && !formData.email ? "visible" : "hidden"
              } text-xs text-red flex items-center gap-1`}
            >
              Email is required
              <HiOutlineExclamationCircle size={15} />
            </p>
            <label className="input-label-style">Message</label>
            <textarea
              value={formData.message}
              name="message"
              onChange={handleFormChange}
              className={`textarea-style ${
                isInputDirty && !formData.message
                  ? "border border-red"
                  : "border border-gray-300"
              } mb-2`}
            />
            <p
              className={`${
                isInputDirty && !formData.message ? "visible" : "hidden"
              } text-xs text-red flex items-center gap-1`}
            >
              Message is required
              <HiOutlineExclamationCircle size={15} />
            </p>
            <button className="button-style mt-5 font-semibold">
              {isLoading ? "Submitting..." : "Submit"}
            </button>
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
