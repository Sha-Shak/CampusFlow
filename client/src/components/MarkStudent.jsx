import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import { Button, Divider, Paper } from '@mui/material';
import { useGetSkillsByCategoryQuery } from '../features/skill/skillApi';
import {
  useGetStudentWeekInfoQuery,
  useSetStudentWeekInfoMutation,
} from '../features/student/studentApi';
import DaisyMark from './DaisyMark';

const MarkStudent = ({ studentId, week, handleNext }) => {
  const { data: softSkills } = useGetSkillsByCategoryQuery('softskill');

  const { data: techSkills } = useGetSkillsByCategoryQuery('techskill');

  const { data: studentWeekInfo } = useGetStudentWeekInfoQuery({
    studentId,
    week,
  });
  const [setWeekInfo, { data: weekInfo }] = useSetStudentWeekInfoMutation();
  const initialAssessmentMark = {
    assessmentMark: 0,
  };

  const [assessmentMark, setAssessmentMark] = useState(initialAssessmentMark);
  const [softSkillMarks, setSoftSkillMarks] = useState();
  const [techSkillMarks, setTechSkillMarks] = useState();
  const [modifiedSoftSkills, setModifiedSoftSkills] = useState([]);
  const [modifiedTechSkills, setModifiedTechSkills] = useState([]);
  const [initialSoftSkillMarks, setInitialSoftSkillMarks] = useState({});
  const [initialTechSkillMarks, setInitialTechSkillMarks] = useState({});
  const [unitMarks, setUnitMarks] = useState({});
  const studentUnitMarks = studentWeekInfo?.unitMarks;

  let initialMarks = {};
  useEffect(() => {
    if (!studentWeekInfo?.softSkills[0]?.skill) {
      const initialMarks = softSkills?.reduce((acc, skill) => {
        acc[skill._id] = 0;
        return acc;
      }, {});
      setInitialSoftSkillMarks(initialMarks);
      setSoftSkillMarks(initialSoftSkillMarks);
    }

    if (!studentWeekInfo?.techSkills[0]?.skill) {
      initialMarks = techSkills?.reduce((acc, skill) => {
        acc[skill._id] = 0;
        return acc;
      }, {});
      setInitialTechSkillMarks(initialMarks);
      setTechSkillMarks(initialTechSkillMarks);
    }
  }, [studentWeekInfo, techSkills, softSkills]);

  // slider default value and marks

  useEffect(() => {
    const generate = softSkills?.map((skill) => {
      const studentSkill = studentWeekInfo?.softSkills?.find(
        (studentSkill) => studentSkill.skill?._id === skill?._id
      );
      return {
        ...skill,
        marks: studentSkill?.marks || 0,
      };
    });
    setModifiedSoftSkills(generate);
  }, [studentWeekInfo, softSkills]);

  useEffect(() => {
    const generate = techSkills?.map((skill) => {
      const studentSkill = studentWeekInfo?.techSkills?.find(
        (studentSkill) => studentSkill.skill?._id === skill?._id
      );
      return {
        ...skill,
        marks: studentSkill?.marks || 0,
      };
    });
    setModifiedTechSkills(generate);
  }, [studentWeekInfo, techSkills]);
  const sliderMarks = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: i + 1,
  }));

  const handleAssessmentMarkChange = (event) => {
    const assesmark = +event.target.value;
    setAssessmentMark((prev) => ({
      ...prev,
      [event.target.name]: assesmark,
    }));
  };
  const handleUnitMarkChange = (event) => {
    setUnitMarks((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSoftSliderChange = (event) => {
    const mark = +event.target.value;
    setSoftSkillMarks((prev) => ({
      ...prev,
      [event.target.name]: mark,
    }));
  };

  const handleTechSliderChange = (event) => {
    const mark = +event.target.value;
    setTechSkillMarks((prev) => ({
      ...prev,
      [event.target.name]: mark,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const allSoftSkillMarks = Object.entries(softSkillMarks).map(
      ([skill, mark]) => ({
        skill: skill,
        marks: mark,
      })
    );
    const allTechSkillMarks = Object.entries(techSkillMarks).map(
      ([skill, mark]) => ({
        skill: skill,
        marks: mark,
      })
    );
    const allUnitMarks = Object.entries(unitMarks).map(([unit, mark]) => ({
      unitName: unit,
      marks: mark,
    }));

    console.log(assessmentMark.assessmentMark);
    const data = {
      studentId,
      week,
      assessmentMarks: assessmentMark.assessmentMark,
      softSkills: allSoftSkillMarks,
      techSkills: allTechSkillMarks,
      unitMarks: allUnitMarks,
    };
    console.log(data);
    console.log('submit');

    // handleMarkSubmission(data);

    setWeekInfo(data);
    setAssessmentMark(initialAssessmentMark);
    handleNext();
    setUnitMarks({});
    // toast.success('Marking Successful');
  };

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          px: 5,
          bgcolor: 'white',
        }}
      >
        {/* Assessment Mark Slider */}
        <form onSubmit={handleSubmit}>
          <div className="divider font-600 uppercase">Weekly Assessment</div>

          <DaisyMark
            title={'Assesment Marks'}
            onChange={handleAssessmentMarkChange}
            name={'assessmentMark'}
            defaultValue={studentWeekInfo?.assessmentMarks || 0}
          />
          {/* Assessment Mark Slider Finished */}
          {/* Soft Skill Sliders */}
          <div className="divider font-600 uppercase">Soft Skills </div>

          {modifiedSoftSkills?.map((skill, index) => (
            <div key={index}>
              <DaisyMark
                title={skill?.skillName}
                onChange={handleSoftSliderChange}
                name={skill?._id}
                defaultValue={skill?.marks || 0}
              />
            </div>
          ))}

          {/* Tech Skill Sliders */}
          <div className="divider font-600 uppercase">Tech Skills</div>

          {modifiedTechSkills?.map((skill, index) => (
            <div key={index}>
              <DaisyMark
                title={skill?.skillName}
                onChange={handleTechSliderChange}
                name={skill?._id}
                defaultValue={skill?.marks || 0}
              />
            </div>
          ))}

          <div className="">
            <div className="divider font-600 uppercase">Unit Marks</div>
            {studentUnitMarks?.map((unit, index) => (
              <div className=" p-2 pt-1 rounded-lg" key={index}>
                <DaisyMark
                  title={unit?.unitName}
                  onChange={handleUnitMarkChange}
                  name={unit?.unitName}
                  defaultValue={unit?.marks || 0}
                />
              </div>
            ))}
          </div>
          <button className="btn" type="submit">
            Submit Marks
          </button>
        </form>
      </Paper>
    </>
  );
};

export default MarkStudent;
