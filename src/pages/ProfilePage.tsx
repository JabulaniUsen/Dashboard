import React from 'react';
import { LinkedIn, Twitter, Facebook } from '@mui/icons-material';

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:h-screen h-full">
      <div className="bg-white dark:bg-[#484554] rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <img
          src="https://via.placeholder.com/200"
          alt="Usenobong Etokakpan"
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl font-semibold dark:text-white">Usenobong Etokakpan</h1>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Bio:</strong> I am a professional frontend developer with over 4 years of experience in building
            responsive and scalable web applications. I specialize in JavaScript frameworks like React.js and Next.js, as
            well as state management using tools like Redux and Context API. I have strong experience in HTML5, CSS3, and
            modern UI/UX design principles. In addition to my technical expertise, I collaborate closely with backend teams
            to integrate RESTful APIs and GraphQL for full-stack development. My passion for creating smooth user
            experiences drives me to continuously explore new frontend technologies and practices.
          </p>
          <div className="text-gray-500 dark:text-gray-300">
            <p><strong>Address:</strong> 1234 Developer Street, Code City, Techland</p>
            <a href='mailto:jabulanietokakpan@gmail.com'><strong>Email:</strong> jabulanietokakpan@gmail.com</a>
            <p><strong>Phone:</strong> +123 456 7890</p>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedIn className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
