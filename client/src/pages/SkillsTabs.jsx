import React from 'react';

function SkillsTabs({ type, skills }) {
  type = type.toLowerCase();
  console.log('skills', skills);
  const color = {
    0: 'info',
    1: 'primary',
    2: 'success',
    3: 'warning',
    4: 'error',
  };

  return (
    <div className="bg-white py-5 px-5 rounded-2xl flex flex-col gap-2">
      {type === 'frontend' && (
        <>
          {skills?.map((skill, index) => {
            return (
              <div className="flex items-center justify-start ">
                <div className="text-lg w-[25%]">{skill?.skill?.skillName}</div>
                <progress
                  className={`progress progress-${color[index]} w-72 h-3`}
                  value={skill?.marks}
                  max="10"
                ></progress>
                <div>
                  <span className="text-sm text-gray-500 ml-2">
                    {Math.round((skill?.marks / 10) * 100)}%
                  </span>
                </div>
              </div>
            );
          })}
        </>
      )}

      {type === 'backend' && (
        <>
          {skills?.map((skill, index) => {
            return (
              <div className="flex items-center justify-start ">
                <div className="text-lg w-[25%]">{skill?.skill?.skillName}</div>
                <progress
                  className={`progress progress-${color[index]} w-72 h-3`}
                  value={skill?.marks}
                  max="10"
                ></progress>
                <div>
                  <span className="text-sm text-gray-500 ml-2">
                    {Math.round((skill?.marks / 10) * 100)}%
                  </span>
                </div>
              </div>
            );
          })}
        </>
      )}
      {type === 'testing' && (
        <>
          {skills?.map((skill, index) => {
            return (
              <div className="flex items-center justify-start ">
                <div className="text-lg w-[25%]">{skill?.skill?.skillName}</div>
                <progress
                  className={`progress progress-${color[index]} w-72 h-3`}
                  value={skill?.marks}
                  max="10"
                ></progress>
                <div>
                  <span className="text-sm text-gray-500 ml-2">
                    {Math.round((skill?.marks / 10) * 100)}%
                  </span>
                </div>
              </div>
            );
          })}
        </>
      )}

      {/* <div className="bg-white py-5 px-5 rounded-2xl flex flex-col gap-2 "> */}
      {/* <div className="flex items-center justify-start ">
          <div className="text-lg w-[25%]">React</div>
          <progress
            className="progress progress-success w-72 h-3"
            value="80"
            max="100"
          ></progress>
        </div>
        <div className="flex items-center justify-start ">
          <div className="text-lg w-[25%]">Jest </div>
          <progress
            className="progress progress-info w-72 h-3"
            value="40"
            max="100"
          ></progress>
        </div>
        <div className="flex items-center justify-start ">
          <div className="text-lg w-[25%]">Angular</div>
          <progress
            className="progress progress-warning w-72 h-3"
            value="60"
            max="100"
          ></progress>
        </div> */}
      {/* <div className="flex items-center justify-start ">
        <div className="text-lg w-[25%]">React</div>
        <progress
          className="progress progress-success w-72 h-3"
          value="80"
          max="100"
        ></progress>
      </div>
      <div className="flex items-center justify-start ">
        <div className="text-lg w-[25%]">Jest </div>
        <progress
          className="progress progress-info w-72 h-3"
          value="40"
          max="100"
        ></progress>
      </div>
      <div className="flex items-center justify-start ">
        <div className="text-lg w-[25%]">Angular</div>
        <progress
          className="progress progress-warning w-72 h-3"
          value="60"
          max="100"
        ></progress>
      </div> */}
      {/* </div> */}
    </div>
  );
}

export default SkillsTabs;
