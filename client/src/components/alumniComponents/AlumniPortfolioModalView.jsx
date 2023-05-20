import React, { useEffect, useState } from 'react';
import Chip from '../AlumniComponents/Chip';

function AlumniPortfolioModalView({ project }) {
  const [youtubevdo, setyoutubevdo] = useState('');
  useEffect(() => {
    setyoutubevdo(
      getYoutubePreview('https://www.youtube.com/watch?v=09839DpTctU')
    );
  }, []);
  const getYoutubePreview = (url) => {
    const videoId = url.split('v=')[1];
    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return (
        <iframe
          width="100%"
          height="400px"
          src={embedUrl}
          title="YouTube Preview"
          className="rounded-2xl"
        />
      );
    }
    return null;
  };
  return (
    <div className="">
      <div className="card lg:card-side bg-base-100 shadow-xl w-[70vw] h-[75vh] px-10 pt-5 ">
        <div className="card-body">
          <div>{youtubevdo}</div>
          <h2 className="card-title text-3xl mt-5 text-purple-600">
            {project?.projectName}
          </h2>

          <table>
            <tbody>
              <tr>
                <td className="text-xl font-light">Description</td>
                <td className="text-xl font-light text-gray-400 ">
                  {project?.description}
                </td>
              </tr>
              <tr>
                <td className="text-xl font-light">Type</td>
                <td className="text-xl font-light text-gray-400 ">
                  {project?.type}
                </td>
              </tr>
              <tr>
                <td className="text-xl font-light">Techstack</td>
                <td className="text-xl font-light text-gray-400 flex gap-3.">
                  {project?.techStack.map((tech, i) => (
                    <div className=" " key={i}>
                      {/* {tech} */}
                      <Chip
                        name={tech}
                        customColor={'gray-100'}
                        padding={3}
                        borderColor={'purple-200'}
                      />
                    </div>
                  ))}
                </td>
              </tr>

              <tr>
                <td className="text-xl font-light">Github Link</td>
                <td className="text-xl font-light text-gray-400 ">
                  <a href={project?.githubLink} target="_blank">
                    {project?.githubLink}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-xl font-light">Project Link</td>
                <td className="text-xl font-light text-gray-400 ">
                  <a href={project?.projectLink} target="_blank">
                    {project?.projectLink}
                  </a>
                </td>
              </tr>
              <tr>
                {/* doneby */}
                {/* <td className="text-xl font-light">Done By</td>
                <td className="text-xl font-light text-gray-400 flex gap-3">
                
                  {project?.doneBy.map((doneby, i) => (
                    <div className=" " key={i}>
          
                      <Chip
                        name={doneby}
                        customColor={'gray-100'}
                        padding={3}
                        borderColor={'purple-200'}
                      />
                    </div>
                  ))}
                </td> */}
              </tr>
            </tbody>
          </table>
          {/* <div>
            <div className="text-xl font-light">Description</div>
            <div className="text-xl font-light text-gray-400 ">
              {project?.description}
            </div>
          </div>
          <div>
            <div className="text-xl font-light">Type</div>
            <div className="text-xl font-light text-gray-400 ">
              {project?.type}
            </div>
          </div> */}
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

export default AlumniPortfolioModalView;
