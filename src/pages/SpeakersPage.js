import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LinkedIn, Twitter, Facebook } from '@mui/icons-material';
const speakersData = [
    {
        id: 1,
        name: 'John Doe',
        title: 'CEO, Tech Innovators',
        description: 'John is a seasoned entrepreneur with over 20 years of experience in the tech industry. He is passionate about AI and blockchain technology.',
        image: 'https://via.placeholder.com/150',
        socialLinks: {
            linkedin: '#',
            twitter: '#',
            facebook: '#',
        },
    },
    {
        id: 2,
        name: 'Jane Smith',
        title: 'CTO, Future Labs',
        description: 'Jane is an expert in cloud computing and cybersecurity. She leads the tech innovation team at Future Labs.',
        image: 'https://via.placeholder.com/150',
        socialLinks: {
            linkedin: '#',
            twitter: '#',
            facebook: '#',
        },
    },
    {
        id: 3,
        name: 'Michael Johnson',
        title: 'AI Researcher, OpenAI',
        description: 'Michael is a researcher focused on artificial intelligence and machine learning, working on cutting-edge AI models.',
        image: 'https://via.placeholder.com/150',
        socialLinks: {
            linkedin: '#',
            twitter: '#',
            facebook: '#',
        },
    },
];
const SpeakersPage = () => {
    return (_jsxs("div", { className: "p-6 lg:h-screen h-full py-10", children: [_jsx("h1", { className: "text-3xl font-semibold text-center mb-8 dark:text-white", children: "Meet Our Speakers" }), _jsx("div", { className: "grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children: speakersData.map((speaker) => (_jsx("div", { className: "border rounded-lg p-4 shadow-lg dark:bg-[#484554] dark:text-white dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300", children: _jsxs("div", { className: "flex flex-col items-center", children: [_jsx("img", { src: speaker.image, alt: speaker.name, className: "w-24 h-24 rounded-full mb-4 object-cover" }), _jsx("h2", { className: "text-xl font-bold mb-2", children: speaker.name }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-300", children: speaker.title }), _jsx("p", { className: "mt-2 text-center text-gray-700 dark:text-gray-300", children: speaker.description }), _jsxs("div", { className: "flex space-x-4 mt-4", children: [speaker.socialLinks.linkedin && (_jsx("a", { href: speaker.socialLinks.linkedin, target: "_blank", rel: "noopener noreferrer", children: _jsx(LinkedIn, { className: "text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400" }) })), speaker.socialLinks.twitter && (_jsx("a", { href: speaker.socialLinks.twitter, target: "_blank", rel: "noopener noreferrer", children: _jsx(Twitter, { className: "text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400" }) })), speaker.socialLinks.facebook && (_jsx("a", { href: speaker.socialLinks.facebook, target: "_blank", rel: "noopener noreferrer", children: _jsx(Facebook, { className: "text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-400" }) }))] })] }) }, speaker.id))) })] }));
};
export default SpeakersPage;
