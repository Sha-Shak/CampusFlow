import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

const CohortStudents = () => {
  const handleNavigate = () => {
    console.log('navigate to github');
  };

  return (
    <div className="overflow-x-auto w-full mt-4 p-4 table-normal">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Cohort</th>
            <th>Connect</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {mockData.map((student) => (
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://raw.githubusercontent.com/zahidtwt/zahidlive/main/277801721_1146010236235641_4251157026316733609_n.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{student.name}</div>
                    <span className="badge badge-ghost badge-sm">
                      {student.type}
                    </span>
                  </div>
                </div>
              </td>
              <td>{student.cohortName}</td>
              <td className="">
                <div className="flex gap-2">
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
                    <FaEnvelope size={25} />
                  </button>
                  <button
                    onClick={handleNavigate}
                    data-tip="Send Message"
                    className="tooltip"
                  >
                    <RiWhatsappFill size={30} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr className="">
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Information</th>
            <th>Details</th>
          </tr>
        </tfoot>
      </table>
    </div>
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
