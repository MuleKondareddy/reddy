import React, { useState } from 'react';
import {
  ProjectsContainer,
  ProjectForm,
  ProjectList,
  InputLabel,
  InputField,
  StyledButton,
} from './Styles';

const Projects = () => {
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectList, setProjectList] = useState([]);

  const handleAddProject = () => {
    if (projectName.trim() !== '' && projectLink.trim() !== '' && projectDescription.trim() !== '') {
      setProjectList([...projectList, { name: projectName, link: projectLink, description: projectDescription }]);
      setProjectName('');
      setProjectLink('');
      setProjectDescription('');
    }
  };

  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <ProjectForm>
        <InputLabel htmlFor="projectName">Project Name:</InputLabel>
        <InputField
          type="text"
          id="projectName"
          placeholder="Enter Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <InputLabel htmlFor="projectLink">Project Link:</InputLabel>
        <InputField
          type="text"
          id="projectLink"
          placeholder="Enter Project Link"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
        />

        <InputLabel htmlFor="projectDescription">Project Description:</InputLabel>
        <InputField
          type="text"
          id="projectDescription"
          placeholder="Enter Project Description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />

        <StyledButton onClick={handleAddProject}>Add</StyledButton>
      </ProjectForm>
      <ProjectList>
        {projectList.map((project, index) => (
          <div key={index}>
            <h3>Project Name: {project.name}</h3>
            <p>Link: {project.link}</p>
            <p>Description: {project.description}</p>
          </div>
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;

