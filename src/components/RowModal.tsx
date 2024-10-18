import React from 'react';
import { motion } from 'framer-motion';
import avatars from '../../public/avatars.svg'
import { ExitToAppRounded, X } from '@mui/icons-material';

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
        className="bg-white flex flex-col gap-5 rounded-lg shadow-lg lg:w-[30rem] dark:bg-[#484554] w-96"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
      >
        <button className="absolute right-5 top-4" onClick={onClose}>
          <ExitToAppRounded/>
        </button>
        <div className="head px-8 pt-8">
          <h1 className='text-xl'>{row.eventName}</h1>
          <h3 className='text-gray-400'>{row.date}</h3>
        </div>

        <p className=" px-8">Deep dive into the world of business</p>

        <div className="px-8">
          <img src={avatars} alt="" />
          <p className='text-gray-400'>
            1 Guest Speaker: 
            <span>{row.speaker}</span>
          </p>
          <p className='text-gray-400'>
            300 Attendees
          </p>
        </div>

        <div className="flex lg:flex-row p-8 flex-col justify-between mt-6 dark:bg-[#ADA9BB]">
          <button
            onClick={handleEdit}
            className="  dark:bg-white dark:text-black px-4 border py-2 rounded hover:bg-gray-200 transition-colors"
          >
            Edit
          </button>
          <div className="flex lg:flex-row flex-col lg:items-center lg:mt-0 mt-4 gap-3">
            <button
              onClick={handleDelete}
              className="bg-[#F43F5E] text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
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
        </div>

      </motion.div>
    </motion.div>
  );
};

export default RowModal;
