import React from 'react';
import Single from '../assets/single.png';
import Double from '../assets/double.png';

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Basic Forex</h2>
          <p className="text-center text-4xl font-bold">$50</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Fundamentals to Forex trading
            </p>
            <p className="py-2 border-b mx-8">Invite to Discord Community</p>
            <p className="py-2 border-b mx-8">Historic Analysis</p>
            <p className="py-2 border-b mx-8">1 on 1 training</p>
            <p className="py-2 border-b mx-8">Demo Account Guidance</p>
          </div>
          <a
            href="https://www.linkedin.com/in/temple-ozoadibe-793761256/"
            target="_blank"
            rel="noreferrer"
            className="block bg-[#00df9a] hover:bg-red-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-center text-white"
          >
            Get Started
          </a>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Pro Forex</h2>
          <p className="text-center text-4xl font-bold">$150</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Proprietary Trading Strategy</p>
            <p className="py-2 border-b mx-8 ">Fundamentals to Forex trading</p>
            <p className="py-2 border-b mx-8">Invite to Discord Community</p>
            <p className="py-2 border-b mx-8">1 on 1 training</p>
            <p className="py-2 border-b mx-8">Demo Account Guidance</p>
            <p className="py-2 border-b mx-8">Weekly Trading Signals</p>
          </div>
          <a
            href="https://www.linkedin.com/in/temple-ozoadibe-793761256/"
            target="_blank"
            rel="noreferrer"
            className="block bg-black hover:bg-red-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-center text-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
