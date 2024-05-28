import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  
}

export const Modal = ({ children, isOpen, setIsModalOpen }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg  w-full max-w-[100rem] relative">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 text-black dark:text-white"
        >
            X
        </button>
        {children}
      </div>
    </div>
  );
};
