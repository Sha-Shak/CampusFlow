import React from 'react';
import Layout from '../components/Layout';
import MiniCalender from '../components/MiniCalender';
import MiniLectures from '../components/MiniLectures';
import MiniNewsTile from '../components/MiniNewsTile';
import NavBar from '../components/NavBar';
import RecentStudents from '../components/RecentStudents';

function Dashboard() {
  return (
    <Layout>
      <div className="text-3xl mb-8 ml-4">Wellcome, Zahid</div>
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
      </div>
    </Layout>
  );
}

export default Dashboard;
