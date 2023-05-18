import React, { useEffect, useState } from 'react';

import { Paper } from '@mui/material';
import { useGetSkillsByCategoryQuery } from '../../features/skill/skillApi';
import {
  useGetStudentTypeQuery,
  useGetStudentWeekInfoQuery,
  useSetStudentWeekInfoMutation,
} from '../../features/student/studentApi';
import DaisyMark from './DaisyMark';
import toast, { Toaster } from 'react-hot-toast';

const MarkStudent = ({ studentId, week, handleNext }) => {
  const { data: softSkills } = useGetSkillsByCategoryQuery('softskill');

  const { data: techSkills } = useGetSkillsByCategoryQuery('techskill');

  const { data: studentWeekInfo, refetch: refetchStudentInfo } =
    useGetStudentWeekInfoQuery({
      studentId,
      week,
    });
  const { data: studentType, refetch: refetchStudentType } =
    useGetStudentTypeQuery(studentId);
  useEffect(() => {
    refetchStudentInfo();
  }, [week, studentId]);
  const [setWeekInfo, { data: weekInfo, isSuccess, isError }] =
    useSetStudentWeekInfoMutation();

  const [assessmentMark, setAssessmentMark] = useState(0);
  const [softSkillMarks, setSoftSkillMarks] = useState();
  const [techSkillMarks, setTechSkillMarks] = useState();
  const [modifiedSoftSkills, setModifiedSoftSkills] = useState([]);
  const [modifiedTechSkills, setModifiedTechSkills] = useState([]);
  const [initialSoftSkillMarks, setInitialSoftSkillMarks] = useState({});
  const [initialTechSkillMarks, setInitialTechSkillMarks] = useState({});
  const [unitMarks, setUnitMarks] = useState({});
  const studentUnitMarks = studentWeekInfo?.unitMarks;
  console.log('debug');
  useEffect(() => {
    if (!studentWeekInfo?.softSkills[0]?.skill) {
      const initialMarks = softSkills
        ?.filter((skill) => {
          return skill?.studentType?.includes(studentType?.type);
        })
        .reduce((acc, skill) => {
          acc[skill._id] = 0;
          return acc;
        }, {});
      // setInitialSoftSkillMarks(initialMarks);
      setSoftSkillMarks(initialMarks);
    }

    if (!studentWeekInfo?.techSkills[0]?.skill) {
      const initialMarks = techSkills
        ?.filter((skill) => {
          return skill?.studentType?.includes(studentType?.type);
        })
        .reduce((acc, skill) => {
          acc[skill._id] = 0;
          return acc;
        }, {});
      // setInitialTechSkillMarks(initialMarks);
      setTechSkillMarks(initialMarks);
    }
  }, [studentWeekInfo, techSkills, softSkills, studentId, week]);

  // slider default value and marks

  useEffect(() => {
    const generate = softSkills
      ?.filter((skill) => {
        return skill?.studentType?.includes(studentType?.type);
      })
      .map((skill) => {
        const studentSkill = studentWeekInfo?.softSkills?.find(
          (studentSkill) => studentSkill.skill?._id === skill?._id
        );
        return {
          ...skill,
          marks: studentSkill?.marks || 0,
        };
      });

    setModifiedSoftSkills(generate);
  }, [studentWeekInfo, softSkills, studentId, week]);

  useEffect(() => {
    const generate = techSkills
      ?.filter((skill) => {
        return skill?.studentType?.includes(studentType?.type);
      })
      .map((skill) => {
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

  useEffect(() => {
    const generate = studentUnitMarks?.reduce((acc, unit) => {
      acc[unit?.unitName] = unit?.marks;
      return acc;
    }, {});
    setUnitMarks(generate);
  }, [studentUnitMarks]);

  useEffect(() => {
    const generate = studentWeekInfo?.assessmentMarks;

    setAssessmentMark(generate);
  }, [studentWeekInfo]);
  useEffect(() => {
    if (!studentWeekInfo?.softSkills[0]?.skill) return;
    const generate = studentWeekInfo?.softSkills?.reduce((acc, skill) => {
      acc[skill?.skill?._id] = skill?.marks;
      return acc;
    }, {});
    setSoftSkillMarks(generate);
  }, [studentWeekInfo]);
  useEffect(() => {
    if (!studentWeekInfo?.techSkills[0]?.skill) return;
    const generate = studentWeekInfo?.techSkills?.reduce((acc, skill) => {
      acc[skill?.skill?._id] = skill?.marks;
      return acc;
    }, {});
    setTechSkillMarks(generate);
  }, [studentWeekInfo]);

  const handleSubmitMark = () => {
    refetchStudentInfo();
  };

  const handleAssessmentMarkChange = (event) => {
    const assesmark = +event.target.value;
    setAssessmentMark(assesmark);
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
    const allSoftSkillMarksDraft = Object.entries(softSkillMarks).map(
      ([skill, mark]) => ({
        skill: skill,
        marks: mark,
      })
    );
    const allSoftSkillMarks = allSoftSkillMarksDraft.filter(
      (skill) => skill.skill && skill.marks
    );

    const allTechSkillMarksDraft = Object.entries(techSkillMarks).map(
      ([skill, mark]) => ({
        skill: skill,
        marks: mark,
      })
    );
    const allTechSkillMarks = allTechSkillMarksDraft.filter(
      (skill) => skill.skill && skill.marks
    );

    const allUnitMarks = Object.entries(unitMarks).map(([unit, mark]) => ({
      unitName: unit,
      marks: mark,
    }));

    const data = {
      studentId,
      week,
      assessmentMarks: assessmentMark,
      softSkills: allSoftSkillMarks,
      techSkills: allTechSkillMarks,
      unitMarks: allUnitMarks,
    };
    console.log(data);
    console.log('submit');

    // handleMarkSubmission(data);

    setWeekInfo(data);
    setAssessmentMark(0);
    refetchStudentInfo();
    handleNext();
    setUnitMarks({});
    // toast.success('Marking Successful');
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success('Marking Successful');
    }
    if (isError) {
      toast.error('Marking Failed');
    }
  }, [isSuccess, isError]);

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          px: 5,
          bgcolor: 'white',
        }}
      >
        <Toaster />
        {/* Assessment Mark Slider */}
        <form onSubmit={handleSubmit}>
          <div className="uppercase divider font-600">Weekly Assessment</div>

          <DaisyMark
            title={'Assesment Marks'}
            onChange={handleAssessmentMarkChange}
            name={'assessmentMark'}
            defaultValue={studentWeekInfo?.assessmentMarks || 0}
          />
          {/* Assessment Mark Slider Finished */}
          {/* Soft Skill Sliders */}
          <div className="uppercase divider font-600">Soft Skills </div>

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
          <div className="uppercase divider font-600">Tech Skills</div>

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
            <div className="uppercase divider font-600">Unit Marks</div>
            {studentUnitMarks?.map((unit, index) => (
              <div className="p-2 pt-1 rounded-lg " key={index}>
                <DaisyMark
                  title={unit?.unitName}
                  onChange={handleUnitMarkChange}
                  name={unit?.unitName}
                  defaultValue={unit?.marks || 0}
                />
              </div>
            ))}
          </div>
          <button className="btn" type="submit" onClick={handleSubmitMark}>
            Submit Marks
          </button>
        </form>
      </Paper>
    </>
  );
};

export default MarkStudent;
