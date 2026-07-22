import React from "react";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;
  return (
    <div onClick={onClose} className="fixed inset-0 bg-[#00000062] bg-opacity-50 z-1000 flex justify-center items-center">
      <div onClick={e => e.stopPropagation()} className="bg-white py-8 px-4 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-10 text-xl font-bold cursor-pointer"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
