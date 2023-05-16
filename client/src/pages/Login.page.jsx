import React from 'react';
import CodeCard from '../components/Login/CodeCard';
import { FaGithub } from 'react-icons/fa';
import logo from '../../public/projectcode.png';

function LoginPage() {
  return (
    <div className="bg-indigo-900 w-[100%] h-[120vh] overscroll-none ">
      <div className="flex items-center gap-96 justify-center">
        <div>
          <img
            src="https://cpwebassets.codepen.io/assets/packs/lines-2-4e66616a5ef291c3566a7ddfe1ffaaa8.svg"
            alt="lines"
            className=" absolute top-28 right-64 w-full h-3/4 rotate-180"
          />
        </div>
        {/* Button */}
        <div className=" flex flex-col items-center gap-10 z-20">
          <div className="">
            <img
              src={logo}
              alt="logo"
              className="w-40 h-40 border-2 border-indigo-50 rounded-full"
            />
          </div>
          <a href="https://github.com/login/oauth/authorize?client_id=349cd35007a641dd3b2d">
            {/* <button>asdfasdf</button> */}
            <button className="btn bg-purple-200  border-none text-gray-500 hover:bg-purple-300 ">
              <div className="flex gap-2 items-center p-2">
                <span>Login With Github</span>
                <FaGithub size={25} />
              </div>
            </button>
          </a>
        </div>
        {/* Right side code  */}
        <div className="flex flex-col gap-5  p-6 rounded-xl mt-[8vw]">
          <CodeCard />
          <span className="ml-16">
            <CodeCard />
          </span>
          <CodeCard />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
