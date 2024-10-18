import React, { useState, useEffect } from 'react';
import { Box, TextField, Avatar, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { UploadFile } from '@mui/icons-material';

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    image: ''
  });
  const [darkMode, setDarkMode] = useState(false);

  // Load data from local storage when the component mounts
  useEffect(() => {
    const savedProfile = localStorage.getItem('profile');
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save profile to local storage whenever profile state changes
  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [profile, darkMode]);

  // Handle form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          image: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Box
      className={`min-h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-[#333] transition-colors duration-300`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 bg-white dark:bg-[#484554] shadow-lg rounded-lg max-w-3xl w-full"
      >
        {/* Title */}
        <Typography variant="h4" className="text-center font-bold mb-8 dark:text-white">
          Profile Dashboard
        </Typography>

        {/* Avatar and Image Upload */}
        <div className="flex justify-center items-center mb-6">
          <Avatar
            src={profile.image || 'https://via.placeholder.com/150'}
            sx={{ width: 120, height: 120 }}
            className="dark:bg-gray-400"
          />
          <Button
            variant="contained"
            component="label"
            className="ml-4 bg-blue-500 dark:bg-blue-600 text-white"
          >
            <UploadFile/>
            <input type="file" hidden onChange={handleImageUpload} />
          </Button>
        </div>

        {/* Profile Form */}
        <Box
          component="form"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <TextField
            label="Name"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{
              className: 'dark:text-gray-300'
            }}
            InputProps={{
              className: 'dark:text-gray-200 dark:bg-gray-700'
            }}
          />
          <TextField
            label="Email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{
              className: 'dark:text-gray-300'
            }}
            InputProps={{
              className: 'dark:text-gray-200 dark:bg-gray-700'
            }}
          />
          <TextField
            label="Phone"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{
              className: 'dark:text-gray-300'
            }}
            InputProps={{
              className: 'dark:text-gray-200 dark:bg-gray-700'
            }}
          />
          <TextField
            label="Address"
            name="address"
            value={profile.address}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{
              className: 'dark:text-gray-300'
            }}
            InputProps={{
              className: 'dark:text-gray-200 dark:bg-gray-700'
            }}
          />
        </Box>

        {/* Save Button */}
        <div className="flex justify-end mt-6">
          <Button
            variant="contained"
            className="bg-blue-600 dark:bg-blue-500 text-white"
            onClick={() => alert('Profile Saved!')}
          >
            Save Changes
          </Button>
        </div>

      </motion.div>
    </Box>
  );
};

export default ProfilePage;
