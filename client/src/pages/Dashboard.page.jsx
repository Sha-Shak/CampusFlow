import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/common/Layout';
import MiniCalender from '../components/Dashboard/MiniCalender';
import MiniLectures from '../components/Dashboard/MiniLectures';
import MiniNewsTile from '../components/Dashboard/MiniNewsTile';
import MiniTodoList from '../components/Dashboard/MiniTodoList';
import MiniWeather from '../components/Dashboard/MiniWeather';
import RecentStudents from '../components/Dashboard/RecentStudents';
import useAuthCheck from '../hooks/useAuthCheck';
import { useGetAllActiveStudentsQuery } from '../features/student/studentApi';

function Dashboard() {
  // const [user, setUser] = useState({});
  const [activeStudents, setActiveStudents] = useState([]);
  const { name } = useSelector((state) => state?.auth?.user) || {};
  const firstName = name?.split(' ')[0];

  // Api calls to get all students
  const {
    data: allStudents,
    error,
    isSuccess,
  } = useGetAllActiveStudentsQuery();

  useEffect(() => {
    if (allStudents) {
      setActiveStudents(allStudents);
    }
  }, [activeStudents]);

  console.log('allStudents', allStudents);

  return (
    <Layout>
      <div className="text-3xl mb-8 ml-4">Welcome, {firstName}</div>
      <div className="m-4">
        <RecentStudents students={allStudents.slice(0, 5)} />
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
          <MiniWeather />
        </div>
        <div>
          <MiniTodoList />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
