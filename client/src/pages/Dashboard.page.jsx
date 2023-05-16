import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import MiniCalender from '../components/MiniCalender';
import MiniLectures from '../components/MiniLectures';
import MiniNewsTile from '../components/MiniNewsTile';
import MiniTodoList from '../components/MiniTodoList';
import RecentStudents from '../components/RecentStudents';

function Dashboard() {
  const [user, setUser] = useState({});
  // const user = JSON.parse(localStorage.getItem('user'));
  const firstName = user?.name?.split(' ')[0];
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  return (
    <Layout>
      <div className="text-3xl mb-8 ml-4">Wellcome, {firstName}</div>
      <div className="m-4">
        <RecentStudents />
      </div>
      <div className="flex">
        <div className="m-4">
          <MiniLectures />
        </div>
        <div className="m-4">
          <MiniNewsTile />
        </div>
        <div className="m-4">
          <MiniCalender />
        </div>
        <div>
          <MiniTodoList />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
