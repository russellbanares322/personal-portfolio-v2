import { useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";

const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleCloseModal = (e) => {
    const { id } = e.target;
    if (id === "modal-wrapper") {
      onClose();
    }
  };
  return (
    <div
      onClick={handleCloseModal}
      className={`bg-black/10 backdrop-filter backdrop-blur-md cursor-pointer ${
        open ? "visible" : "hidden"
      } fixed inset-0 px-5 overflow-y-auto h-full w-full pt-7  z-50`}
      id="modal-wrapper"
    >
      <div
        className={`bg-light-blue ${
          open ? "scale-1" : "scale-0"
        } cursor-default w-auto  md:w-[45rem]  lg:w-[45rem] xl:w-[45rem] 2xl:w-[45rem] h-auto rounded-lg pb-7 my-5 mx-auto`}
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
