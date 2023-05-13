import React from 'react';
import DayCollapseComponent from './DayCollapse.component';
const week = {
  week: 'Week 1',
  days: [
    {
      day: 'Saturday',
      topics: [
        {
          name: 'Lecture: Welcome',
          url: 'https://lectures.projectcode.me/welcome',
        },
        { name: 'Lecture: Git recap', url: 'Live lecture' },
        {
          name: 'Exercise: Pre-course review',
          url: 'https://github.com/Project-Code-Bd/pre-course',
        },
      ],
    },
    {
      day: 'Sunday',
      topics: [
        {
          name: 'Toy Problem: Two adds',
          url: 'https://github.com/Project-Code-Bd/tp-two-adds',
        },
        { name: 'Lecture: Functional programming', url: 'Live lecture' },
        {
          name: 'Exercise: Pre-course review',
          url: 'https://github.com/Project-Code-Bd/pre-course',
        },
      ],
    },
    {
      day: 'Monday',
      topics: [
        {
          name: 'Toy Problem: Highest word count',
          url: 'https://github.com/Project-Code-Bd/tp-highest-word-count',
        },
        {
          name: 'Lecture: Unit testing',
          url: 'https://lectures.projectcode.me/unit-testing',
        },
        {
          name: 'Lecture: Pair programming',
          url: 'https://lectures.projectcode.me/pair-programming',
        },
        {
          name: 'Exercise: Da tester',
          url: 'https://github.com/Project-Code-Bd/da-tester-exercise',
        },
      ],
    },
    {
      day: 'Tuesday',
      topics: [
        {
          name: 'Toy Problem: Fix this ASAP',
          url: 'https://github.com/Project-Code-Bd/tp-fix-this-asap',
        },
        {
          name: 'Lecture: Advanced JS - 1',
          url: 'https://lectures.projectcode.me/advanced-js-1',
        },
        {
          name: 'Exercise: JayQuery',
          url: 'https://github.com/Project-Code-Bd/jay-query-exercise',
        },
      ],
    },
    {
      day: 'Wednesday',
      topics: [
        {
          name: 'Toy Problem: Clonator',
          url: 'https://github.com/Project-Code-Bd/tp-clonator',
        },
        {
          name: 'Lecture: Advanced JS - 2',
          url: 'https://lectures.projectcode.me/advanced-js-2',
        },
        {
          name: 'Exercise: JayQuery',
          url: 'https://github.com/Project-Code-Bd/jay-query-exercise',
        },
        {
          name: 'Exercise: Sub Class Dance Party',
          url: 'https://github.com/Project-Code-Bd/sub-class-dance-party-exercise',
        },
      ],
    },
    {
      day: 'Thursday',
      topics: [
        {
          name: 'Toy Problem: Evented thing',
          url: 'https://github.com/Project-Code-Bd/tp-evented-thing',
        },
        {
          name: 'Lecture: Advanced JS - 3',
          url: 'https://lectures.projectcode.me/advanced-js-3',
        },
        {
          name: 'Exercise: Sub Class Dance Party',
          url: 'https://github.com/Project-Code-Bd/sub-class-dance-party-exercise',
        },
      ],
    },
  ],
};
function MiniLectures() {
  return (
    <div className="bg-white p-2 px-5 rounded-xl w-80 ">
      <div className="text-xl font-bold my-3"> Lectures this week </div>

      <div className="">
        {week.days.map((day, index) => (
          <DayCollapseComponent key={index} day={day} />
        ))}
      </div>
    </div>
  );
}

export default MiniLectures;
