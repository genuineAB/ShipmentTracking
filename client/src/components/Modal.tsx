import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
      <div className="fixed inset-0 bg-black  dark:bg-white opacity-50 " />

      <div
        className={`relative bg-[#151A29] rounded-lg shadow-lg  "w-[438px]
           max-w-md mx-6 my-6 flex flex-col max-h-[95vh]`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#283047]  text-[#F9FFF7] text-base font-bold z-10 flex items-center justify-center rounded-full w-8 h-8"
        >
          ✕
        </button>

        <div className="flex-1 overflow-y-auto [msOverflowStyle:none] [scrollbarWidth:none]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
