import { useState } from "react";
import contactIcon from "../../assets/svg/contact.svg";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { usePageContext } from "../../context/PageContext";
import { buttonAnimation } from "../../lib/animations";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Contact = () => {
  const { isDarkMode, contactRef } = usePageContext();
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

  const handleFormChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
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
      className={twMerge(
        isDarkMode ? "text-white" : "text-blue",
        "page-padding-x max-w-[1640px] mx-auto w-full page-padding-top mb-20"
      )}
    >
      <p data-aos="fade-right" className="section-title">
        GET IN TOUCH
      </p>
      <div className="flex justify-around items-center gap-12 mt-16 relative flex-wrap">
        <div className="w-[33rem]">
          <form
            data-aos="fade-up"
            onSubmit={handleSubmit}
            className={`bg-white mx-auto w-[20rem] md:mx-0 mt-[2rem] md:mt-0 relative md:w-[25rem] h-full text-blue flex flex-col p-5 rounded-md border-l-4 border-l-yellow border-b-4 border-b-yellow ${
              !isDarkMode && "border-t border-r"
            } z-20`}
          >
            <label className="input-label-style">Name</label>
            <input
              value={formData.userName}
              name="userName"
              onChange={handleFormChange}
              className={twMerge(
                isInputDirty && !formData.userName
                  ? "border border-red"
                  : "border border-gray-300",
                "input-style mb-2"
              )}
              type="text"
            />
            {isInputDirty && !formData.userName && (
              <p className="text-xs text-red flex items-center gap-1">
                Name is required
                <HiOutlineExclamationCircle size={15} />
              </p>
            )}
            <label className="input-label-style">Email Address</label>
            <input
              value={formData.email}
              name="email"
              onChange={handleFormChange}
              className={twMerge(
                isInputDirty && !formData.email
                  ? "border border-red"
                  : "border border-gray-300",
                "input-style mb-2"
              )}
              type="email"
            />
            {isInputDirty && !formData.email && (
              <p className="text-xs text-red flex items-center gap-1">
                Email is required
                <HiOutlineExclamationCircle size={15} />
              </p>
            )}
            <label className="input-label-style">Message</label>
            <textarea
              value={formData.message}
              name="message"
              onChange={handleFormChange}
              className={twMerge(
                isInputDirty && !formData.message
                  ? "border border-red"
                  : "border border-gray-300",
                "textarea-style mb-2"
              )}
            />
            {isInputDirty && !formData.message && (
              <p className="text-xs text-red flex items-center gap-1">
                Message is required
                <HiOutlineExclamationCircle size={15} />
              </p>
            )}
            <motion.button
              whileTap={buttonAnimation.whileTap}
              whileHover={buttonAnimation.whileHover}
              disabled={isLoading}
              className="button-style mt-5 font-semibold disabled:bg-light-yellow disabled:text-gray-500 disabled:cursor-progress"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
        </div>
        <img
          data-aos="zoom-in"
          className="-top-14 bottom scale-x-[-1] md:scale-[1] absolute md:static object-cover sm:h-[20rem] md:h-[15rem] lg-[20rem] xl:h-[20rem]"
          src={contactIcon}
        />
      </div>
    </div>
  );
};

export default Contact;
