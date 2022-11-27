import { useState, useEffect } from 'react';
import { Application } from 'components';
import 'styles/applications.css';

function Applications() {
  const [applications, setApplications] = useState([]);
  const [skills, setSkills] = useState({});

  useEffect(() => {
    const token = 'a2feae02-dcf0-415f-9397-926b3583784c';
    const fetchApplications = async () => {
      const res = await fetch(
        `https://bootcamp-2022.devtest.ge/api/applications?token=${token}`
      );
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
        return (
          <Application
            key={index}
            application={app}
            numeration={index}
            skills={skills}
          />
        );
      })}
    </div>
  );
}

export default Applications;
