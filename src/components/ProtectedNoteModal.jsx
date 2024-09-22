import React, { useState } from "react";

const ProtectedNoteModal = ({ onUnlock, onCancel }) => {
  const [inputPassword, setInputPassword] = useState("");

  const handleUnlock = () => {
    onUnlock(inputPassword);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Enter Password</h2>
        <input
          type="password"
          className="w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <div className="mt-4 flex justify-end space-x-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={handleUnlock}
          >
            Unlock
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProtectedNoteModal;
