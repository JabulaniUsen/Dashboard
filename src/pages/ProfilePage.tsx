import React from "react";
import { LinkedIn, Twitter, Facebook } from "@mui/icons-material";

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 lg:h-screen h-full">
      <div className="bg-white dark:bg-[#484554] rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <img
          src='/assets/main.jpeg'
          alt="Akemini Ndaobong"
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl font-semibold dark:text-white">
            Akemini Ndaobong
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Bio:</strong> I am a competent software developer who is
            driven by a passion for leveraging technology to solve problems.
            Skilled in Javascript, Typescript, ReactJs, NodeJs, ExpressJs, Agile
            Methodologies, HTML, Cascading Style Sheets (CSS), MongoDB, and
            Postgresql, I am confident in my ability to deliver innovative
            solutions that drive organizational success. I am unwaveringly
            committed to keeping up with the latest developments in technology
            and industry best practices, and I constantly hone my skill set to
            stay ahead of software development trends.
          </p>
          <div className="text-gray-500 dark:text-gray-300">
            <p>
              <strong>Address:</strong> Nigeria
            </p>
            <a href="mailto:akemini.ndaobong@gmail.com">
              <strong>Email:</strong> akemini.ndaobong@gmail.com
            </a>
            <p>
              <strong>Phone:</strong> +234 806 289 8015
            </p>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/akemini-ndaobong-008678229/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400" />
            </a>
            <a
              href="https://x.com/TechAkem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400" />
            </a>
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-400" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
