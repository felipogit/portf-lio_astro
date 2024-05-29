import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const Modal = ({ children, isOpen, setIsModalOpen }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-1" >
      <div className="bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-[100rem] relative overflow-auto max-h-full">
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-2 right-2 h-7 w-6 rounded bg-pink-500 hover:bg-pink-600 text-white
          dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
