import React from 'react';
import { FaCheck } from 'react-icons/fa';

const companies = [
  {
    name: 'SELISE',
    logo: 'https://images.squarespace-cdn.com/content/v1/62f276db23ed6539a9115860/1e0b64fd-2155-4d87-bd35-2a34e6ea8912/Project-Code-Dhaka-Logo-Software-Engineering-Bootcamp-Learn-to-Code-JavaScript-Codeworks-React-Node-Mongo-Express-Vue-Angular-Full-Stack-Engineer-Startup-Jobs-in-Tech-Career-Ready-Selise.png?format=300w',
  },
  {
    name: 'Kaz Software',
    logo: 'https://images.squarespace-cdn.com/content/v1/62f276db23ed6539a9115860/5f7b1fd0-d05a-4dfb-b769-cc52f032d10f/Project-Code-Dhaka-Logo-Software-Engineering-Bootcamp-Learn-to-Code-JavaScript-Codeworks-React-Node-Mongo-Express-Vue-Angular-Full-Stack-Engineer-Startup-Jobs-in-Tech-Career-Ready-Kaz+Software.jpg?format=300w',
  },
  {
    name: 'SAMSUNG',
    logo: 'https://images.squarespace-cdn.com/content/v1/62f276db23ed6539a9115860/4e9deffe-f768-443f-a5a7-950d71a7729c/Project-Code-Dhaka-Software-Engineering-Bootcamp-Learn-to-Code-JavaScript-Codeworks-React-Node-Mongo-Express-Vue-Angular-Full-Stack-Engineer-Startup-Jobs-in-Tech-Career-Ready-MERN-MEAN-Remote-6.png?format=300w',
  },
  {
    name: 'PulseTech',
    logo: 'https://images.squarespace-cdn.com/content/v1/62f276db23ed6539a9115860/bea57174-3f2f-465b-b8bf-ebd48aa2fc26/Project-Code-Dhaka-Software-Engineering-Bootcamp-Learn-to-Code-JavaScript-Codeworks-React-Node-Mongo-Express-Vue-Angular-Full-Stack-Engineer-Startup-Jobs-in-Tech-Career-Ready-MERN-MEAN-Remote-11.png?format=300w',
  },
  {
    name: 'Jatri',
    logo: 'https://images.squarespace-cdn.com/content/v1/62f276db23ed6539a9115860/a9cfa8f7-276b-4764-b426-c87fb21e3cb0/download+%284%29.png?format=300w',
  },
  {
    name: 'OPTIMIZELY',
    logo: 'https://images.squarespace-cdn.com/content/v1/62f276db23ed6539a9115860/33fa3fd7-8cc3-45c3-bb78-ff6bd57a7e63/Project-Code-Dhaka-Logo-Software-Engineering-Bootcamp-Learn-to-Code-JavaScript-Codeworks-React-Node-Mongo-Express-Vue-Angular-Full-Stack-Engineer-Startup-Jobs-in-Tech-Career-Ready-Optimizely.png?format=300w',
  },
  {
    name: 'Share Trip',
    logo: 'https://images.squarespace-cdn.com/content/v1/62f276db23ed6539a9115860/d193e870-95dc-411b-a78a-ada0ff6f778a/Project-Code-Dhaka-Software-Engineering-Bootcamp-Learn-to-Code-JavaScript-Codeworks-React-Node-Mongo-Express-Vue-Angular-Full-Stack-Engineer-Startup-Jobs-in-Tech-Career-Ready-MERN-MEAN-Remote-27.jpg?format=300w',
  },
  {
    name: 'MyAlice',
    logo: 'https://images.squarespace-cdn.com/content/v1/62f276db23ed6539a9115860/0ff5f281-ad91-42a5-9e04-c7231eb12a34/Project-Code-Dhaka-Logo-Software-Engineering-Bootcamp-Learn-to-Code-JavaScript-Codeworks-React-Node-Mongo-Express-Vue-Angular-Full-Stack-Engineer-Startup-Jobs-in-Tech-Career-Ready-MyAlice.png?format=300w',
  },
];

const WhyProjectCode = () => {
  return (
    <div className="flex flex-col items-center h-[90vh] bg-white m-10 p-10 rounded-3xl shadow-lg">
      <img className="w-64" src="/public/projectcodefull.png" alt="logo" />{' '}
      <div className="flex flex-col justify-center">
        <div className="flex justify-center text-2xl font-bold  text-[#7E22CE] mt-5">
          Why Project Code?
        </div>
        <div className="flex justify-center text-lg font-normal  text-[#3E67AE] m-2 mb-10 gap-2">
          <span>RELIABLE,</span>
          <span>EFFECIENT, </span>
          <span>CONVENIENT</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-start gap-2">
          <p className="text-sm text-left text-[#444444] flex items-center gap-2">
            <FaCheck className="text-[#444444] text-sm" />
            Immediate access to new talent markets with Project Code’s Always-on
            Hiring.
          </p>
        </div>
        <div className="flex flex-row justify-start gap-2">
          <p className="text-sm text-left text-[#444444] flex items-center gap-2">
            <FaCheck className="text-[#444444] text-sm" />
            Build and scale your teams while enabling a multicultural, diverse.
          </p>
        </div>
        <div className="flex flex-row justify-start gap-2">
          <p className="text-sm text-left text-[#444444] flex items-center gap-2">
            <FaCheck className="text-[#444444] text-sm" />
            More than just hiring
          </p>
        </div>
      </div>
      <div className="mt-20">
        <span className="text-lg font-semibold text-[#3650B0] uppercase ">
          Amazing hiring partners believe in our program
        </span>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {companies.slice(0, 4).map((company) => (
            <img
              src={company.logo}
              alt={company.name}
              className="w-[90px] m-2"
            />
          ))}
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {companies.slice(4).map((company) => (
            <img
              src={company.logo}
              alt={company.name}
              className="w-[90px]  m-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyProjectCode;
