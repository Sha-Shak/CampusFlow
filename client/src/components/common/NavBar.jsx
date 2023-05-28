import React from 'react';
import { useEffect, useState } from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedOut } from '../../features/auth/authSlice';
function NavBar() {
  const dispatch = useDispatch();
  const { name, profileImg, githubUsername } =
    useSelector((state) => state?.auth?.user) || {};
  const role = useSelector((state) => state?.auth?.role);
  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem('role');
    window.location.href = '/';
  };
  return (
    <div className=" pt-5 px-5 sticky top-0 z-[40]">
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
                <img
                  src={`https://avatars.githubusercontent.com/${githubUsername}`}
                />
              </div>
            </label>
          </div>
          <div className=" ml-3 mr-5">
            <div className="font-bold">{name}</div>
            <div className="text-sm text-gray-500 capitalize">{role}</div>
          </div>
        </div>
        <div className=" mr-3">
          <IoLogOutOutline className="text-3xl" color="gray" onClick={logout} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
