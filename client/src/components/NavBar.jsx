import React from 'react';
import { useEffect, useState } from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
function NavBar() {
  const [user, setUser] = useState({});
  const [role, setRole] = useState('');
  // const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
    const role = localStorage.getItem('role');
    setRole(role);
  }, []);

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
                <img src={user?.profileImg} />
              </div>
            </label>
          </div>
          <div className=" ml-3 mr-5">
            <div className="font-bold">{user?.name}</div>
            <div className="text-sm text-gray-500 capitalize	">{role}</div>
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
