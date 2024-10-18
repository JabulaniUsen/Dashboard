import React from 'react';
import { motion } from 'framer-motion';

interface RowModalProps {
  row: any;
  onClose: () => void;
  onEdit: (updatedRow: any) => void;
  onDelete: (id: number) => void;
  onMarkComplete: (id: number) => void;
}

const RowModal: React.FC<RowModalProps> = ({ row, onClose, onEdit, onDelete, onMarkComplete }) => {
  const handleEdit = () => {
    const updatedRow = { ...row, name: `${row.name} (edited)` }; // Example edit
    onEdit(updatedRow);
  };

  const handleDelete = () => {
    onDelete(row.id);
  };

  const handleMarkComplete = () => {
    onMarkComplete(row.id);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-8 w-96"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
      >
        <h2 className="text-xl font-bold mb-4">Edit Row</h2>
        <div className="mb-2">
          <p className="text-gray-700">
            <strong>ID:</strong> {row.id}
          </p>
          <p className="text-gray-700">
            <strong>Event Name:</strong> {row.name}
          </p>
          <p className="text-gray-700">
            <strong>Status:</strong> {row.status}
          </p>
          <p className="text-gray-700">
            <strong>Date:</strong> {row.date}
          </p>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
          <button
            onClick={handleMarkComplete}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            Mark Complete
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition-colors w-full"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default RowModal;
