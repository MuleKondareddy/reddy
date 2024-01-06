import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const BioText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #555;
`;

const About = () => {
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <BioText>
        Hello! I'm Kondareddy, a passionate web developer with expertise in front-end technologies. 
        I love turning ideas into beautiful, interactive, and user-friendly websites. 
        My journey in the world of web development has been exciting, and I'm always eager to learn and explore new technologies.
      </BioText>
    </AboutContainer>
  );
};

export default About;
