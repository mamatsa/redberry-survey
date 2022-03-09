import { useState, useEffect } from 'react';
import '../../styles/applications.css';
import Application from '../Application';

function Applications() {
  const [applications, setApplications] = useState([]);
  const [skills, setSkills] = useState({});

  useEffect(() => {
    const token = '62245d3f-023a-4139-b3f4-13140f74bea3';
    const fetchApplications = async () => {
      const res = await fetch(`https://bootcamp-2022.devtest.ge/api/applications?token=${token}`);
      const data = await res.json();
      setApplications(data);
    };
    fetchApplications();

    const fetchSkills = async function () {
      const res = await fetch('https://bootcamp-2022.devtest.ge/api/skills');
      const data = await res.json();
      const reshapedSkillsData = {};
      for (const skill of data) {
        const { id, title } = skill;
        reshapedSkillsData[id] = title;
      }
      setSkills(reshapedSkillsData);
    };
    fetchSkills();
  }, []);

  return (
    <div className="applications-container">
      <h3>Submited Applications</h3>
      {applications.map((app, index) => {
        return <Application key={index} application={app} numeration={index} skills={skills} />;
      })}
    </div>
  );
}

export default Applications;
