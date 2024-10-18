import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const MessagesPage: React.FC = () => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccessMessage('');
    setErrorMessage('');

    const templateParams = {
      message: message,
      to_email: 'Jabulanietokakpan@gmail.com',
    };

    emailjs
      .send('service_qq1axds', 'template_p2g8c3o', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        setSuccessMessage('Message sent successfully!');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setErrorMessage('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold dark:text-white mb-4">Send a Message</h1>
      <form onSubmit={handleSendMessage} className="bg-white dark:bg-[#484554] p-6 rounded-lg shadow-lg">
        <textarea
          rows={5}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={isSending}
          className={`mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
            isSending ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
      {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default MessagesPage;
