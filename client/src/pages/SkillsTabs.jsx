import React from 'react';

function SkillsTabs({ type }) {
  type = type.toLowerCase();

  return (
    <div className="bg-white py-5 px-5 rounded-2xl flex flex-col gap-2">
      {type === 'frontend' && (
        <>
          <div className="flex items-center justify-start ">
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
          </div>
          <div className="flex items-center justify-start ">
            <div className="text-lg w-[25%]">Jest </div>
            <progress
              className="progress progress-info w-72 h-3"
              value="40"
              max="100"
            ></progress>
          </div>
        </>
      )}

      {type === 'backend' && (
        <>
          <div className="flex items-center justify-start ">
            <div className="text-lg w-[25%]">React</div>
            <progress
              className="progress progress-warning w-72 h-3"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-start ">
            <div className="text-lg w-[25%]">Jest </div>
            <progress
              className="progress progress-error w-72 h-3"
              value="40"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-start ">
            <div className="text-lg w-[25%]">Angular</div>
            <progress
              className="progress progress-info w-72 h-3"
              value="60"
              max="100"
            ></progress>
          </div>
        </>
      )}
      {type === 'testing' && (
        <>
          <div className="flex items-center justify-start ">
            <div className="text-lg w-[25%]">React</div>
            <progress
              className="progress progress-error w-72 h-3"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-start ">
            <div className="text-lg w-[25%]">Jest </div>
            <progress
              className="progress progress-succcess w-72 h-3"
              value="40"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-start ">
            <div className="text-lg w-[25%]">Angular</div>
            <progress
              className="progress progress-info w-72 h-3"
              value="60"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-start ">
            <div className="text-lg w-[25%]">React</div>
            <progress
              className="progress progress-error w-72 h-3"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-start ">
            <div className="text-lg w-[25%]">Jest </div>
            <progress
              className="progress progress-succcess w-72 h-3"
              value="40"
              max="100"
            ></progress>
          </div>
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
