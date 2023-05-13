import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
function NavBar() {
  return (
    <div className=" pt-5 px-5 sticky top-0 z-[100]">
      <div className="navbar bg-white bg-clip-border  border-[#e1e1e11f] border- shadow-3xl rounded-2xl border-slate-700	sticky top-0">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-purple-700">
            CampusFlow
          </a>
        </div>
        <div tabIndex={0} className="flex-none mx-4 pl-2 rounded-xl shadow-md">
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div> */}

          <div className="dropdown dropdown-end flex">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://raw.githubusercontent.com/zahidtwt/zahidlive/main/277801721_1146010236235641_4251157026316733609_n.jpg" />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <div className=" ml-3 mr-5">
            <div className="font-bold">Zahid Ul Islam</div>
            <div className="text-sm text-gray-500">Student</div>
          </div>
        </div>
        <div className=" mr-3">
          <IoLogOutOutline className="text-3xl" color="gray" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
