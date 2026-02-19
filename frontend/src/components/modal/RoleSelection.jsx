import React from "react";

const RoleSelectionModal = ({ isOpen, onClose, onSelectRole }) => {
  if (!isOpen) return null;


  return (
<div className="fixed inset-0 pt-40 flex items-center justify-center right z-60">
  <div className="bg-white rounded-xl shadow-2xl w-80 p-6 relative">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 text-xl hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-6 text-center">
          Select Your Role
        </h2>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => onSelectRole("student")}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition"
          >
            Student
          </button>

          <button
            onClick={() => onSelectRole("consultant")}
            className="bg-green-600 text-white py-2 rounded hover:bg-green-500 transition"
          >
            Consultant
          </button>
        </div>

      </div>
    </div>
  );
};

export default RoleSelectionModal;
