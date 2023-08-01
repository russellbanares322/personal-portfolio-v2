import React from "react";
import { HiOutlineX } from "react-icons/hi";

const Modal = ({ children, open, onClose }) => {
  return (
    <div
      className={`bg-black/10 backdrop-filter backdrop-blur-md ${
        open ? "visible" : "hidden"
      } fixed inset-0 overflow-y-auto h-full w-full px-3 pt-7 lg:px-[20rem] z-50`}
    >
      <div
        className={`bg-light-blue ${
          open ? "scale-1" : "scale-0"
        }  w-auto h-auto rounded-lg pb-7 my-5`}
      >
        {children}
      </div>
      <HiOutlineX
        onClick={onClose}
        className="text-white absolute top-3 right-5 cursor-pointer"
        size={25}
      />
    </div>
  );
};

export default Modal;
