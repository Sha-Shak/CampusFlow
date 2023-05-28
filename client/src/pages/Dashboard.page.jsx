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
import Loader from '../components/common/Loader';

function Dashboard() {
  // const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [activeStudents, setActiveStudents] = useState([]);
  const { name } = useSelector((state) => state?.auth?.user) || {};
  const firstName = name?.split(' ')[0];
  const role = localStorage.getItem('role');

  // Api calls to get all students
  const {
    data: allStudents,
    error,
    isSuccess,
  } = useGetAllActiveStudentsQuery();

  useEffect(() => {
    if (name) {
      setIsLoading(false);
    }
  }, [name]);

  useEffect(() => {
    if (allStudents) {
      if (activeStudents.length > 5) {
        setActiveStudents(allStudents.slice(0, 5));
      }
      setActiveStudents(allStudents);
    }
  }, [activeStudents]);

  return (
    <Layout>
      {isLoading && <Loader />}
      <div className="text-3xl mb-8 ml-4">Welcome, {firstName}</div>
      {role === 'instructor' && (
        <div className="m-4">
          <RecentStudents students={allStudents} />
        </div>
      )}
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
