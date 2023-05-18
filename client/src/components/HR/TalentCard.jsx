import React from 'react';
import { FiPhoneCall, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { SlEnvolope } from 'react-icons/sl';
import Chip from '../AlumniComponents/Chip';
import { GoLocation } from 'react-icons/go';
import moment from 'moment';
function TalentCard() {
  const alumniInfo = {
    _id: '646213253572798cad80c70e',
    name: 'Shahriar',
    projects: [
      {
        _id: '646360484c2cf7e025d24fcd',
        projectName: 'Campusflow',
        type: 'thesis',
        description: 'abcdsdf',
        githubLink: 'pollock-nag',
        projectLink: 'project-code',
        techStack: ['js', 'react', 'mongodb', 'node'],
        thirdPartyApi: ['[barikoi, mapbox, github]'],
        doneBy: '646213253572798cad80c70e',
        ratigns: [],
        __v: 0,
        ratings: [],
      },
      {
        _id: '646453cf1de72758196c029a',
        projectName: 'Parklink',
        type: 'personal',
        description: 'abcdsdf',
        githubLink: 'pollock-nag',
        projectLink: 'project-code',
        techStack: ['js', 'react', 'mongodb', 'node'],
        thirdPartyApi: ['barikoi', 'mapbox', 'github'],
        doneBy: '646213253572798cad80c70e',
        ratigns: [],
        __v: 0,
        ratings: [],
      },
      {
        _id: '646454181de72758196c02c2',
        projectName: 'Petscan',
        type: 'legacy',
        description: 'abcdsdf',
        githubLink: 'pollock-nag',
        projectLink: 'project-code',
        techStack: ['js', 'react', 'mongodb', 'node'],
        thirdPartyApi: ['barikoi', 'mapbox', 'github'],
        doneBy: '646213253572798cad80c70e',
        ratigns: [],
        __v: 0,
        ratings: [],
      },
      {
        _id: '646454281de72758196c02d7',
        projectName: 'Easyhome',
        type: 'solo',
        description: 'abcdsdf',
        githubLink: 'pollock-nag',
        projectLink: 'project-code',
        techStack: ['js', 'react', 'mongodb', 'node'],
        thirdPartyApi: ['barikoi', 'mapbox', 'github'],
        doneBy: '646213253572798cad80c70e',
        ratigns: [],
        __v: 0,
        ratings: [],
      },
    ],
    education: [
      {
        instituteName: 'BUET',
        program: 'Master of Science in Computer Science',
        fromDate: '2019-09-01T00:00:00.000Z',
        toDate: '2021-06-01T00:00:00.000Z',
        description:
          'A rigorous and comprehensive program that prepares students for careers in computer science.',
        status: true,
        gpa: 3.9,
        _id: '646359ec733cd41ebce21e4e',
      },
      {
        instituteName: 'DMC',
        program: 'Master of Science in Computer Science',
        fromDate: '2019-09-01T00:00:00.000Z',
        toDate: '2021-06-01T00:00:00.000Z',
        description:
          'A rigorous and comprehensive program that prepares students for careers in computer science.',
        status: true,
        gpa: 3.9,
        _id: '646359fb733cd41ebce21e9f',
      },
    ],
    experiences: [
      {
        jobTitle: 'DevOps Engineer',
        companyName: 'Google',
        fromDate: '2021-06-01T00:00:00.000Z',
        toDate: '2023-05-14T00:00:00.000Z',
        description:
          'Designing, developing, and testing software applications.',
        skills: ['JavaScript', 'Python', 'Java'],
        status: true,
        _id: '64635a09733cd41ebce21ef1',
      },
      {
        jobTitle: 'Software Engineer',
        companyName: 'Google',
        fromDate: '2021-06-01T00:00:00.000Z',
        toDate: '2023-05-14T00:00:00.000Z',
        description:
          'Designing, developing, and testing software applications.',
        skills: ['JavaScript', 'Python', 'Java'],
        status: true,
        _id: '64635a1c733cd41ebce21f44',
      },
      {
        jobTitle: 'Software Engineer',
        companyName: 'Google',
        fromDate: '2021-06-01T00:00:00.000Z',
        toDate: '2023-05-14T00:00:00.000Z',
        description:
          'Designing, developing, and testing software applications.',
        skills: ['JavaScript', 'Python', 'Java'],
        status: true,
        _id: '64635cdd4c2cf7e025d24e15',
      },
    ],
    skills: [
      {
        skill: '646213253572798cad80c70e',
        marks: 9,
        _id: '64623a20f3910224c00c4d9d',
      },
      {
        skill: '646213253572798cad80c70e',
        marks: 8,
        _id: '64623a20f3910224c00c4d9e',
      },
    ],
    certifications: [
      {
        name: 'Google',
        url: 'https://www.google.com',
        _id: '64635cfc4c2cf7e025d24e6a',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.LinkedIn.com',
        _id: '64635d8b4c2cf7e025d24ec0',
      },
    ],
    onlineJudge: [
      {
        name: 'LeetCode',
        username: 'pollockk',
        isVerified: false,
        _id: '64635e9d4c2cf7e025d24f17',
      },
    ],
    socialLinks: [
      {
        name: 'Google',
        url: 'https://www.google.com',
        _id: '64635fa14c2cf7e025d24f6f',
      },
      {
        name: 'Stackoverflow',
        url: 'https://www.stackoverflow.com',
        _id: '64635fbe4c2cf7e025d24fc8',
      },
      {
        name: 'phone',
        url: '01234567891',
        _id: '64636b052ca3ee9aa2b6fdae',
      },
      {
        name: 'email',
        url: 'test@gmail.com',
        _id: '64636b162ca3ee9aa2b6fe09',
      },
      {
        name: 'email',
        url: 'test@gmail.com',
        _id: '64636b1b2ca3ee9aa2b6fe65',
      },
      {
        name: 'website',
        url: 'google.com',
        _id: '64636b2d2ca3ee9aa2b6fec2',
      },
      {
        name: 'linkedin',
        url: 'www.linkedin.com',
        _id: '64636b492ca3ee9aa2b6ff20',
      },
    ],
    __v: 22,
    about: 'Hey there I am no one and I am completely free from 401',
    githubUsername: 'sha-shak',
  };

  const latestExperience =
    alumniInfo?.experiences[alumniInfo?.experiences.length - 1];

  const latestEducation =
    alumniInfo?.education[alumniInfo?.education.length - 1];

  const gotoProfile = () => {
    window.location.href = `/alumni/profile`;
  };

  return (
    <>
      <div
        className="card h-auto bg-base-100 border-2 border-purple-200 w-80 hover:border-purple-400 cursor-pointer"
        onClick={gotoProfile}
      >
        <div className="card-body p-5">
          <div className="flex gap-3 items-center">
            <div className="w-16 rounded-full bg-[#C39AF7]">
              <img
                src={`https://avatars.githubusercontent.com/${alumniInfo?.githubUsername}`}
                className="rounded-full p-1 shadow-xl"
              />
            </div>
            <div>
              <div className="text-xl font-semibold text-purple-700 drop-shadow-lg ">
                {alumniInfo?.name}
              </div>
              <div className="text-sm text-gray-700 drop-shadow-lg">
                Student-Feb-23
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <Chip
                name="Full Stack Engineer"
                padding={2}
                round={'md'}
                customColor={'purple-300'}
                borderColor={'purple-300'}
              />
            </div>
          </div>
          {alumniInfo?.experiences.length > 0 ? (
            <>
              <p className=" mt-1 leading-4 text-sm text-gray-700">
                I've worked with <br />
              </p>
              <span className="text-md text-gray-800">
                <span className="font-bold text-purple-700">
                  {latestExperience?.companyName}
                </span>{' '}
                as {latestExperience?.jobTitle}
              </span>
            </>
          ) : (
            <>
              <p className=" mt-1 leading-4 text-sm text-gray-700">
                Academic Information
                <br />
              </p>
              <span className="text-md text-gray-800">
                <span className="font-bold text-purple-700">
                  {latestEducation?.program}
                </span>{' '}
                from {latestEducation?.instituteName}
              </span>
            </>
          )}
          <hr />
          <div className="card-actions justify-left mt-1 gap-1 flex flex-wrap py-1">
            <Chip
              name={'React'}
              padding={2}
              round={'xl'}
              customColor={'white'}
              borderColor={'purple-300'}
            />
            <Chip
              name={'Node'}
              padding={2}
              round={'xl'}
              customColor={'white'}
              borderColor={'purple-300'}
            />
            <Chip
              name={'MongoDB'}
              padding={2}
              round={'xl'}
              customColor={'white'}
              borderColor={'purple-300'}
            />
            <Chip
              name={'Express'}
              padding={2}
              round={'xl'}
              customColor={'white'}
              borderColor={'purple-300'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TalentCard;
