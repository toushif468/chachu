import React from 'react';
import { assets } from '../assets/assets';

const Footer: React.FC = () => {
  return (
    <div >
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
       <div>
        <img
          src={assets.logo}
          alt="Chachu logo"
          className="mb-5 w-32"
        />
        <p className="w-full md:w-2/4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint odit et ea excepturi doloremque atque eos alias earum libero asperiores aliquam pariatur</p>
       </div>
      

        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-500">
            <li className="cursor-pointer hover:text-black">Home</li>
            <li className="cursor-pointer hover:text-black">About us</li>
            <li className="cursor-pointer hover:text-black">Delivery</li>
            <li className="cursor-pointer hover:text-black">Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-500">
                <li>+1-212-456-7890</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center text-gray-500">© 2024 Chachu. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
