import React, { useEffect, useState } from 'react';
import Chip from '../alumniComponents/Chip';
import axios from 'axios';
import { useSelector } from 'react-redux';

function AlumniPortfolioModalView({ project }) {
  // console.log('project apps', project);
  const userName = project?.githubLink.split('/')[3];
  const projectName = project?.githubLink.split('/')[4];
  console.log(userName, projectName);
  console.log(project.industry);

  const [youtubevdo, setyoutubevdo] = useState('');
  const [collaborators, setCollaborators] = useState([]);
  useEffect(() => {
    setyoutubevdo(getYoutubePreview(project?.youtubeLink));
  }, []);

  const { accessToken } = useSelector((state) => state?.auth) || {};
  console.log('accessToken', accessToken);
  useEffect(() => {
    const headers = {
      // 'github-access-token': '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',
      'github-access-token': accessToken,
    };
    axios
      .get(
        `https://campusflow.fly.dev/github/getCollaborators/${userName}/${projectName}`,
        headers
      )
      .then((res) => {
        console.log('collabolarators', res.data);
        setCollaborators(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getYoutubePreview = (url) => {
    const videoId = url.split('v=')[1];
    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return (
        <iframe
          width="640px"
          height="360px"
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
      <div className="card lg:card-side bg-base-100 shadow-xl w-[70vw]  px-10 pt-5 ">
        <div className="card-body">
          <div className="flex gap-8">
            <div>{youtubevdo}</div>
            <div className="text-xl font-light text-gray-400">
              <div className="text-3xl mb-4">Description</div>
              <div className="text-justify">{project?.description}</div>
            </div>
          </div>
          <h2 className="card-title text-3xl mt-5 text-purple-600">
            {project?.projectName}
          </h2>

          <table>
            <tbody>
              {/* <tr>
                <td className="text-xl font-light">Description</td>
                <td className="text-xl font-light text-gray-400 ">
                  {project?.description}
                </td>
              </tr> */}
              <tr>
                <td className="text-xl font-light py-2">Type</td>
                <td className="text-xl font-light text-gray-400 ">
                  {project?.type}
                </td>
              </tr>
              <tr>
                <td className="text-xl font-light">Techstack</td>
                <td className="text-xl font-light text-gray-400 flex gap-3 py-2">
                  {project?.techStack.map((tech, i) => (
                    <div className=" " key={i}>
                      {/* {tech} */}
                      <Chip
                        name={tech}
                        customColor={'gray-100'}
                        padding={4}
                        borderColor={'purple-200'}
                      />
                    </div>
                  ))}
                </td>
              </tr>
              <tr>
                <td className="text-xl font-light">Verticals</td>
                <td className="text-xl font-light text-gray-400 flex gap-3 py-2">
                  {project?.industry.map((industry, i) => (
                    <div className=" " key={i}>
                      {/* {tech} */}
                      <Chip
                        name={industry}
                        customColor={'gray-100'}
                        padding={4}
                        borderColor={'purple-200'}
                      />
                    </div>
                  ))}
                </td>
              </tr>

              <tr>
                <td className="text-xl font-light py-3">Github Link</td>
                <td className="text-xl font-light text-gray-400 py-3">
                  <a href={project?.githubLink} target="_blank">
                    {project?.githubLink}
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-xl font-light py-3">Project Link</td>
                <td className="text-xl font-light text-gray-400 py-3">
                  <a href={project?.projectLink} target="_blank">
                    {project?.projectLink}
                  </a>
                </td>
              </tr>
              <tr>
                {/* doneby */}
                <td className="text-xl font-light py-3">Done By</td>
                <td className="text-xl font-light text-gray-400 flex gap-3 py-3">
                  {collaborators?.map((collaborator, i) => (
                    <div className=" " key={i}>
                      {/* <Chip
                        name={collaborator?.login}
                        customColor={'gray-100'}
                        padding={3}
                        borderColor={'purple-200'}
                      /> */}
                      <a
                        href={`https://github.com/${collaborator?.login}`}
                        target="_blank"
                      >
                        <div className="avatar">
                          <div className="w-10 rounded-full">
                            <img src={collaborator?.avatar_url} />
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </td>
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
