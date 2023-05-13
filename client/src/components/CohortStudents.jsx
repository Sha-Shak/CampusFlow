import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetAllCohortStudentsQuery } from '../features/cohort/cohortApi';
import Layout from './Layout';
import TableSkeleton from './TableSkeleton';

const CohortStudents = () => {
  const { cohort } = useParams();
  const { data: students, isSuccess } = useGetAllCohortStudentsQuery(cohort);
  console.log(cohort);
  console.log(students);
  const navigate = useNavigate();
  const handleNavigate = () => {};

  return (
    <Layout>
      <div className="overflow-x-auto w-full p-4 table-normal bg-white min-h-[80vh] rounded-xl shadow-lg">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/cohorts'}>Cohorts</Link>
            </li>
            <li className="capitalize">{cohort}</li>
          </ul>
        </div>

        <table className="w-full bg-white ">
          {/* head */}
          <thead className="bg-violet-200">
            <tr className="text-center">
              <th>Name</th>
              <th>Connect</th>
              <th className="text-center">View Student Info</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {students?.students?.map((student) => (
              <tr className="hover:bg-indigo-100 rounded-xl cursor-pointer hover:shadow-lg">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={
                            student.profileImg ||
                            `https://avatars.githubusercontent.com/t/1233543`
                          }
                          alt={student.name}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{student.name}</div>
                      <span className="badge badge-ghost badge-sm uppercase">
                        {student.type}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="text-center">
                  <div className="flex gap-4">
                    <button
                      onClick={handleNavigate}
                      data-tip="View Github"
                      className="tooltip"
                    >
                      <FaGithub size={25} />
                    </button>
                    <button
                      onClick={handleNavigate}
                      data-tip="Send Email"
                      className="tooltip"
                    >
                      <FaEnvelope size={25} color={'#3bb5f3'} />
                    </button>
                    <button data-tip="Send Message" className="tooltip">
                      <RiWhatsappFill size={30} color={'#25D366'} />
                    </button>
                  </div>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => {
                      navigate(`/student/${student._id}`);
                    }}
                    className="btn btn-contained rounded-xl bg-indigo-100 border-none text-black hover:text-indigo-100 "
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </Layout>
  );
};

export default CohortStudents;

const mockData = [
  {
    name: 'John Smith',
    email: 'johnsmith@example.com',
    password: 'password123',
    profileImg: 'https://example.com/profile.jpg',
    status: true,
    type: 'junior',
    cohortName: 'student-Nov-23',
    githubUsername: 'johnsmith',
    githubMail: 'johnsmith@example.com',
  },
  {
    name: 'Emily Davis',
    email: 'emilydavis@example.com',
    password: 'p@ssword987',
    profileImg: 'https://example.com/emilydavis.jpg',
    status: true,
    type: 'senior',
    cohortName: 'student-Nov-23',
    githubUsername: 'emilydavis',
    githubMail: 'emilydavis@example.com',
  },
  {
    name: 'Sarah Wilson',
    email: 'sarahwilson@example.com',
    password: 'P@ssword456',
    profileImg: 'https://example.com/sarahwilson.jpg',
    status: true,
    type: 'junior',
    cohortName: 'Cohort 1',
    githubUsername: 'sarahwilson',
    githubMail: 'sarahwilson@example.com',
  },
  {
    name: 'James Brown',
    email: 'jamesbrown@example.com',
    password: 'passw0rd!',
    profileImg: 'https://example.com/jamesbrown.jpg',
    status: true,
    type: 'senior',
    cohortName: 'Cohort 1',
    githubUsername: 'jamesbrown',
    githubMail: 'jamesbrown@example.com',
  },
  {
    name: 'Michael Lee',
    email: 'michaellee@example.com',
    password: 'password@123',
    profileImg: 'https://example.com/michaellee.jpg',
    status: true,
    type: 'junior',
    cohortName: 'Cohort 1',
    githubUsername: 'michaellee',
    githubMail: 'michaellee@example.com',
  },
  {
    name: 'Olivia Garcia',
    email: 'oliviagarcia@example.com',
    password: 'Pa$$word789',
    profileImg: 'https://example.com/oliviagarcia.jpg',
    status: true,
    type: 'senior',
    cohortName: 'Cohort 1',
    githubUsername: 'oliviagarcia',
    githubMail: 'oliviagarcia@example.com',
  },
  {
    name: 'William Hernandez',
    email: 'williamhernandez@example.com',
    password: 'password456',
    profileImg: 'https://example.com/williamhernandez.jpg',
    status: true,
    type: 'junior',
    cohortName: 'Cohort 1',
    githubUsername: 'williamhernandez',
    githubMail: 'williamhernandez@example.com',
  },
  {
    name: 'Mia Miller',
    email: 'miamiller@example.com',
    password: 'Pa$$w0rd789',
    profileImg: 'https://example.com/miamiller.jpg',
    status: true,
    type: 'senior',
    cohortName: 'Cohort 1',
    githubUsername: 'miamiller',
    githubMail: 'miamiller@example.com',
  },
  {
    name: 'Jacob Martinez',
    email: 'abcde@gmail.com',
    password: 'password123',
    profileImg: 'https://example.com/jacobmartinez.jpg',
    status: true,
    type: 'junior',
    cohortName: 'Cohort 1',
    githubUsername: 'jacobmartinez',
    githubMail: 'lsjalkdjlk@gmail.com',
  },
];
