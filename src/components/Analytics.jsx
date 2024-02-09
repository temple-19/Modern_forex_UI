import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">
            Discover Your New Stream of Income with One Message to Me
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Take Action Today
          </h1>
          <p>
            Unlock trading success with our Price Action Strategy. Simplify your
            approach, learn from experts, and trade with confidence. Whether
            you're a beginner or rebounding from failures, our strategy empowers
            you. Join us to redefine your trading journey
          </p>

          <a
             href="https://www.linkedin.com/in/templeozoadibe"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
            }}
          >
            <button className="bg-black  hover:bg-red-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Start Forex Trading
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
