import Pagination from '../Pagination';
import { useState, useEffect } from 'react';
import Skill from '../Skill';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState('');
  const [userSkills, setUserSkills] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch skills
  useEffect(() => {
    const fetchSkills = async () => {
      const res = await fetch('https://bootcamp-2022.devtest.ge/api/skills');
      const data = await res.json();
      setSkills(data);
    };
    fetchSkills();
  }, []);

  // On form submit
  const onSubmit = function (e) {
    e.preventDefault();

    const skill = document.getElementById('skills');
    if (skill.value === 'default') {
      setErrorMessage('Please choose a skill');
      return;
    }
    for (const skillObj of userSkills) {
      if (skillObj.skillName === skill.value) {
        skillObj.experience = experience;
        return;
      }
    }

    const newSkill = { id: userSkills.length + 1, skillName: skill.value, experience };
    setUserSkills([...userSkills, newSkill]);
    setErrorMessage('');
  };

  return (
    <div className="container">
      <div className="survey-container">
        <h2>Tell us about your skills</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="select-skill">
            <select name="skills" id="skills" required defaultValue="default">
              <option style={{ color: '#fff' }} value="default" disabled hidden>
                Skills
              </option>

              {skills.map((skill) => {
                return (
                  <option key={skill.id} value={skill.title}>
                    {skill.title}
                  </option>
                );
              })}
            </select>
            <div className="select-arrow">
              <div className="select-arrow-1"></div>
              <div className="select-arrow-2"></div>
            </div>
          </div>
          {errorMessage && <p className="error-message">* {errorMessage}</p>}

          <input
            id="experience"
            name="experience"
            style={{ margin: '30px 0' }}
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Experience Duration in Years"
            required
            min="1"
            max="50"
          />
          <button type="submit" className="add-skill">
            Add Programming Language
          </button>
        </form>
        {userSkills.map((userSkill) => {
          return (
            <Skill
              key={userSkill.id}
              id={userSkill.id}
              skillName={userSkill.skillName}
              experience={userSkill.experience}
            />
          );
        })}
        <Pagination />
      </div>
      <div className="about-container">
        <h2>A bit about our battles</h2>
        <p>
          As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety
          of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel
          Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and
          now we have set foot in the web3 industry.
        </p>
      </div>
    </div>
  );
}

export default Skills;
