import { useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import { usePageContext } from "../../context/PageContext";
import { twMerge } from "tailwind-merge";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const Modal = ({ children, open, onClose }: ModalProps) => {
  const { isDarkMode } = usePageContext();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    if (id === "modal-wrapper") {
      onClose();
    }
  };
  return (
    <div
      onClick={handleCloseModal}
      className={twMerge(
        !open && "scale-0",
        "bg-black/10 backdrop-filter backdrop-blur-md cursor-pointer fixed inset-0 px-5 overflow-y-auto h-full w-full pt-7 z-50"
      )}
      id="modal-wrapper"
    >
      <div
        className={twMerge(
          !open && "translate-y-[150vh] opacity-0",
          "bg-light-blue duration-200 ease-in-out translate-y-0 cursor-default w-auto md:w-[45rem] lg:w-[45rem] xl:w-[45rem] 2xl:w-[45rem] h-auto rounded-lg pb-7 my-5 mx-auto"
        )}
      >
        {children}
      </div>
      <HiOutlineX
        onClick={onClose}
        className={twMerge(
          isDarkMode ? "text-white" : "text-blue",
          "absolute top-3 right-5 cursor-pointer"
        )}
        size={25}
      />
    </div>
  );
};

export default Modal;
